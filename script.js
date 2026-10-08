// TOEIC Pro Interactive Testing Platform Engine

(function () {
  'use strict';

  // State
  let currentMode = 'practice'; // 'practice' | 'exam' | 'mistakes'
  let currentTestId = '多益1';
  let currentTest = null;
  let rawQuestions = []; // All questions of current test or mistakes
  let questions = []; // Filtered active question list
  let currentFilter = 'all'; // 'all' | 'part5' | 'part6' | 'part7'
  let currentIndex = 0;
  let userAnswers = {}; // { qId: selectedOpt }
  let flaggedQuestions = new Set();
  
  // Stats for Practice Mode
  let practiceStats = { correct: 0, wrong: 0 };

  // Exam Timer
  let examDuration = 75 * 60; // 75 mins in seconds
  let examTimeLeft = examDuration;
  let examTimerInterval = null;

  // LocalStorage Keys
  const STORAGE_MISTAKES_KEY = 'toeic_pro_mistakes_v1';
  const STORAGE_ANSWERS_PREFIX = 'toeic_pro_answers_v1_';
  const STORAGE_FLAGS_PREFIX = 'toeic_pro_flags_v1_';
  const STORAGE_INDEX_PREFIX = 'toeic_pro_index_v1_';
  const STORAGE_CURRENT_TEST_KEY = 'toeic_pro_current_test_v1';
  const STORAGE_FILTER_KEY = 'toeic_pro_filter_v1';
  const STORAGE_MODE_KEY = 'toeic_pro_mode_v1';

  // State Persistence Helpers
  function saveCurrentState() {
    try {
      if (currentMode !== 'mistakes') {
        localStorage.setItem(STORAGE_CURRENT_TEST_KEY, currentTestId);
      }
      localStorage.setItem(STORAGE_MODE_KEY, currentMode);
      localStorage.setItem(STORAGE_FILTER_KEY, currentFilter);

      const storageKey = (currentMode === 'mistakes') ? 'mistakes' : currentTestId;
      localStorage.setItem(STORAGE_ANSWERS_PREFIX + storageKey, JSON.stringify(userAnswers));
      localStorage.setItem(STORAGE_FLAGS_PREFIX + storageKey, JSON.stringify(Array.from(flaggedQuestions)));
      localStorage.setItem(STORAGE_INDEX_PREFIX + storageKey, String(currentIndex));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  function loadSavedStateForTest(testId) {
    try {
      const storageKey = (currentMode === 'mistakes') ? 'mistakes' : testId;
      const rawAns = localStorage.getItem(STORAGE_ANSWERS_PREFIX + storageKey);
      userAnswers = rawAns ? JSON.parse(rawAns) : {};

      const rawFlags = localStorage.getItem(STORAGE_FLAGS_PREFIX + storageKey);
      flaggedQuestions = rawFlags ? new Set(JSON.parse(rawFlags)) : new Set();

      const savedIdx = parseInt(localStorage.getItem(STORAGE_INDEX_PREFIX + storageKey), 10);
      if (!isNaN(savedIdx) && savedIdx >= 0) {
        currentIndex = savedIdx;
      } else {
        currentIndex = 0;
      }
    } catch (e) {
      userAnswers = {};
      flaggedQuestions = new Set();
      currentIndex = 0;
    }
  }

  function recalculatePracticeStats() {
    let correct = 0;
    let wrong = 0;
    const qList = (rawQuestions && rawQuestions.length > 0) ? rawQuestions : questions;
    qList.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans) {
        if (ans === q.answer) {
          correct++;
        } else {
          wrong++;
        }
      }
    });
    practiceStats = { correct, wrong };
    updatePracticeStats();
  }

  // DOM Elements
  const testSelect = document.getElementById('testSelect');
  const btnModePractice = document.getElementById('btnModePractice');
  const btnModeExam = document.getElementById('btnModeExam');
  const btnModeMistakes = document.getElementById('btnModeMistakes');
  const mistakesCountEl = document.getElementById('mistakesCount');
  
  const examControls = document.getElementById('examControls');
  const timerDisplay = document.getElementById('timerDisplay');
  const btnSubmitExam = document.getElementById('btnSubmitExam');

  const progressText = document.getElementById('progressText');
  const progressStat = document.getElementById('progressStat');
  const progressFill = document.getElementById('progressFill');

  const practiceBanner = document.getElementById('practiceBanner');
  const practiceCorrectEl = document.getElementById('practiceCorrect');
  const practiceWrongEl = document.getElementById('practiceWrong');
  const practiceRateEl = document.getElementById('practiceRate');

  const btnToggleAnswer = document.getElementById('btnToggleAnswer');
  const answerToggleText = document.getElementById('answerToggleText');
  const btnToggleExplain = document.getElementById('btnToggleExplain');
  const explainToggleText = document.getElementById('explainToggleText');
  const btnResetTest = document.getElementById('btnResetTest');
  const practiceFilterGroup = document.getElementById('practiceFilterGroup');
  const filterBtns = practiceFilterGroup ? practiceFilterGroup.querySelectorAll('.filter-btn') : [];

  let showAnswerInPractice = (localStorage.getItem('toeic_show_answer') !== 'false');
  let showExplainInPractice = (localStorage.getItem('toeic_show_explain') !== 'false');

  const cardQNum = document.getElementById('cardQNum');
  const cardQPart = document.getElementById('cardQPart');
  const btnFlag = document.getElementById('btnFlag');
  const questionPrompt = document.getElementById('questionPrompt');
  const optionsContainer = document.getElementById('optionsContainer');
  const questionCard = document.getElementById('questionCard');
  const readingGroupStage = document.getElementById('readingGroupStage');
  const feedbackCard = document.getElementById('feedbackCard');
  const feedbackHeader = feedbackCard ? feedbackCard.querySelector('.feedback-header') : null;
  const feedbackStatus = document.getElementById('feedbackStatus');
  const feedbackCorrectOpt = document.getElementById('feedbackCorrectOpt');
  const feedbackNotes = document.getElementById('feedbackNotes');

  const btnPrevQ = document.getElementById('btnPrevQ');
  const btnNextQ = document.getElementById('btnNextQ');
  const btnOpenDrawer = document.getElementById('btnOpenDrawer');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const paletteSidebar = document.getElementById('paletteSidebar');
  const paletteGrid = document.getElementById('paletteGrid');
  const answeredCountBadge = document.getElementById('answeredCountBadge');
  const totalQuestionsBadge = document.getElementById('totalQuestionsBadge');

  // Modal Elements
  const resultModal = document.getElementById('resultModal');
  const modalTestName = document.getElementById('modalTestName');
  const modalScore = document.getElementById('modalScore');
  const resCorrectCount = document.getElementById('resCorrectCount');
  const resWrongCount = document.getElementById('resWrongCount');
  const resUnansweredCount = document.getElementById('resUnansweredCount');
  const resAccuracy = document.getElementById('resAccuracy');
  const btnReviewMistakes = document.getElementById('btnReviewMistakes');
  const btnRetakeTest = document.getElementById('btnRetakeTest');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const toast = document.getElementById('toast');

  // Initialize
  function init() {
    try {
      const savedTest = localStorage.getItem(STORAGE_CURRENT_TEST_KEY);
      if (savedTest) {
        currentTestId = savedTest;
        if (testSelect) testSelect.value = savedTest;
      }
      const savedMode = localStorage.getItem(STORAGE_MODE_KEY);
      if (savedMode && ['practice', 'exam', 'mistakes'].includes(savedMode)) {
        currentMode = savedMode;
      }
      const savedFilter = localStorage.getItem(STORAGE_FILTER_KEY);
      if (savedFilter && ['all', 'part5', 'part6', 'part7'].includes(savedFilter)) {
        currentFilter = savedFilter;
      }
    } catch (e) {}

    loadMistakesCount();
    updateToggleButtonsUI();
    setupEventListeners();

    btnModePractice.classList.toggle('active', currentMode === 'practice');
    btnModeExam.classList.toggle('active', currentMode === 'exam');
    btnModeMistakes.classList.toggle('active', currentMode === 'mistakes');
    if (filterBtns && filterBtns.length > 0) {
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === currentFilter));
    }

    if (currentMode === 'exam') {
      practiceBanner.style.display = 'none';
      examControls.style.display = 'flex';
      loadTest(currentTestId);
    } else if (currentMode === 'mistakes') {
      practiceBanner.style.display = 'none';
      examControls.style.display = 'none';
      loadMistakesMode();
    } else {
      practiceBanner.style.display = 'flex';
      examControls.style.display = 'none';
      loadTest(currentTestId);
    }
  }

  // Determine Question Part (Part 5: 句子填空, Part 6: 段落填空, Part 7: 閱讀理解)
  function getQuestionPart(q) {
    if (!q) return 'part5';
    // Part 5: Question 1-30 (or <= 40 with no range)
    if (q.id <= 30) return 'part5';
    // Part 6: Short passage cloze with range like 31-34, 35-38, etc.
    if (q.id <= 46) {
      if (q.range && String(q.range).trim() !== '') return 'part6';
      if (q.id <= 40) return 'part5';
      return 'part6';
    }
    // Part 7: Reading Comprehension
    return 'part7';
  }

  // Get User-Friendly Part Name
  function getQuestionPartLabel(q) {
    const part = getQuestionPart(q);
    if (part === 'part5') return 'Part 5 句子填空';
    if (part === 'part6') return 'Part 6 段落填空';
    return 'Part 7 閱讀理解';
  }

  // Filter Questions for Practice Mode
  function applyFilter(filterKey) {
    currentFilter = filterKey;
    
    // Update Filter Tab UI
    filterBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.filter === filterKey);
    });

    if (filterKey === 'all') {
      questions = [...rawQuestions];
    } else {
      questions = rawQuestions.filter(q => getQuestionPart(q) === filterKey);
    }

    if (questions.length === 0) {
      showToast('此分類在此試卷中暫無題目，已切換回全部題型');
      currentFilter = 'all';
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
      questions = [...rawQuestions];
    }

    currentIndex = 0;
    renderPalette();
    renderQuestion(currentIndex);
    saveCurrentState();
  }

  // Load Test Data
  function loadTest(testId) {
    currentTestId = testId;
    if (testSelect && testSelect.value !== testId) {
      testSelect.value = testId;
    }

    if (currentMode === 'mistakes') {
      loadMistakesMode();
      return;
    }

    if (typeof TOEIC_DATA !== 'undefined' && TOEIC_DATA.tests) {
      currentTest = TOEIC_DATA.tests.find(t => t.test_id === testId) || TOEIC_DATA.tests[0];
      rawQuestions = currentTest ? [...currentTest.questions] : [];
    } else {
      rawQuestions = [];
    }

    if (rawQuestions.length === 0) {
      showToast('⚠️ 題庫載入失敗或無題目');
      return;
    }

    // Load saved answers, flags, and index for this test
    loadSavedStateForTest(testId);
    recalculatePracticeStats();

    // Apply active filter (or default to 'all' if in exam mode)
    if (currentMode === 'exam') {
      questions = [...rawQuestions];
    } else {
      if (currentFilter === 'all') {
        questions = [...rawQuestions];
      } else {
        const filtered = rawQuestions.filter(q => getQuestionPart(q) === currentFilter);
        questions = filtered.length > 0 ? filtered : [...rawQuestions];
      }
    }

    if (currentIndex >= questions.length || currentIndex < 0) {
      currentIndex = 0;
    }

    renderPalette();
    renderQuestion(currentIndex);
    saveCurrentState();

    if (currentMode === 'exam') {
      startExamTimer();
    }
  }

  // Render Palette Grid
  function renderPalette() {
    paletteGrid.innerHTML = '';
    totalQuestionsBadge.textContent = questions.length;

    questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id || (idx + 1);
      btn.dataset.index = idx;

      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderQuestion(currentIndex);
        // On mobile, close drawer after picking a question
        if (window.innerWidth <= 960) {
          paletteSidebar.classList.remove('mobile-open');
        }
      });

      paletteGrid.appendChild(btn);
    });

    updatePaletteStatus();
  }

  // Update Palette Grid Status Styles
  function updatePaletteStatus() {
    const btns = paletteGrid.querySelectorAll('.palette-btn');
    let answeredCount = 0;

    btns.forEach((btn, idx) => {
      const q = questions[idx];
      btn.className = 'palette-btn';

      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      const ans = userAnswers[q.id];
      if (ans) {
        answeredCount++;
        btn.classList.add('answered');

        if (currentMode === 'practice') {
          if (showAnswerInPractice) {
            if (ans === q.answer) {
              btn.classList.add('practice-correct');
            } else {
              btn.classList.add('practice-wrong');
            }
          }
        }
      }

      if (flaggedQuestions.has(q.id)) {
        btn.classList.add('flagged');
      }
    });

    answeredCountBadge.textContent = answeredCount;
    progressStat.textContent = `已答 ${answeredCount} 題`;

    const progressPct = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;
    progressFill.style.width = `${progressPct}%`;
    progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  }

  // Render Current Question (支援單題與題組同頁連貫閱讀)
  function renderQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentIndex = index;
    saveCurrentState();
    const q = questions[index];

    // Card Header Info
    cardQNum.textContent = `Question ${q.id}`;
    cardQPart.textContent = getQuestionPartLabel(q);

    // Flag Button Status
    if (flaggedQuestions.has(q.id)) {
      btnFlag.classList.add('flagged');
    } else {
      btnFlag.classList.remove('flagged');
    }

    // 檢查是否為題組題 (Reading Group)
    if (q.type === 'group' && q.passages && q.passages.length > 0) {
      // 隱藏單題卡片，顯示題組舞台
      if (questionCard) questionCard.style.display = 'none';
      if (feedbackCard) feedbackCard.style.display = 'none';
      if (readingGroupStage) {
        readingGroupStage.style.display = 'grid';
        renderReadingGroupStage(q);
      }
    } else {
      // 顯示單題卡片，隱藏題組舞台
      if (readingGroupStage) readingGroupStage.style.display = 'none';
      if (questionCard) questionCard.style.display = 'block';
      renderSingleQuestionStage(q);
    }

    // Navigation Buttons State
    btnPrevQ.disabled = (index === 0);
    btnNextQ.disabled = (index === questions.length - 1);

    updatePaletteStatus();
  }

  // 渲染單題視窗
  function renderSingleQuestionStage(q) {
    const chosen = userAnswers[q.id];
    let promptHtml = escapeHtml(q.question);
    const blankRegex = /_{3,}|＿＿＿+/g;

    if (blankRegex.test(promptHtml)) {
      promptHtml = promptHtml.replace(blankRegex, () => {
        if (chosen && q.options[chosen]) {
          return `<span class="blank-slot filled" id="blankSlot">${escapeHtml(q.options[chosen])}</span>`;
        } else {
          return `<span class="blank-slot" id="blankSlot">＿＿＿＿＿＿</span>`;
        }
      });
    }
    questionPrompt.innerHTML = promptHtml;

    optionsContainer.innerHTML = '';
    const optionKeys = ['A', 'B', 'C', 'D'];

    optionKeys.forEach(optKey => {
      const optVal = q.options[optKey];
      if (!optVal && optVal !== '') return;

      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.dataset.opt = optKey;

      if (chosen === optKey) {
        btn.classList.add('selected');
      }

      if (currentMode === 'practice' && chosen) {
        if (showAnswerInPractice) {
          if (optKey === q.answer) {
            btn.classList.add('correct-choice');
          } else if (chosen === optKey) {
            btn.classList.add('wrong-choice');
          }
        }
      }

      btn.innerHTML = `
        <span class="opt-badge">${optKey}</span>
        <span class="opt-text">${escapeHtml(optVal)}</span>
      `;

      btn.addEventListener('click', () => {
        selectOption(q, optKey);
      });

      optionsContainer.appendChild(btn);
    });

    // Feedback Card (Practice Mode)
    if (currentMode === 'practice' && chosen && showExplainInPractice) {
      feedbackCard.style.display = 'block';
      const isCorrect = (chosen === q.answer);
      if (feedbackHeader) {
        feedbackHeader.className = `feedback-header ${isCorrect ? 'correct' : 'wrong'}`;
      }

      if (showAnswerInPractice) {
        feedbackStatus.textContent = isCorrect ? '🎉 作答正確！' : '❌ 作答錯誤！';
        feedbackCorrectOpt.innerHTML = `(${q.answer}) ${escapeHtml(q.options[q.answer] || '')}`;
      } else {
        feedbackStatus.textContent = '📝 已完成作答';
        feedbackCorrectOpt.innerHTML = `已隱藏答案 <button class="btn-peek-ans" id="btnPeekAns">點擊揭曉</button>`;
        setTimeout(() => {
          const btnPeek = document.getElementById('btnPeekAns');
          if (btnPeek) {
            btnPeek.onclick = (e) => {
              e.stopPropagation();
              feedbackStatus.textContent = isCorrect ? '🎉 作答正確！' : '❌ 作答錯誤！';
              feedbackCorrectOpt.innerHTML = `(${q.answer}) ${escapeHtml(q.options[q.answer] || '')}`;
              const optBtns = optionsContainer.querySelectorAll('.opt-btn');
              optBtns.forEach(b => {
                if (b.dataset.opt === q.answer) b.classList.add('correct-choice');
                else if (b.dataset.opt === chosen) b.classList.add('wrong-choice');
              });
            };
          }
        }, 0);
      }

      feedbackNotes.innerHTML = generateMentorCard(q, isCorrect);
    } else {
      feedbackCard.style.display = 'none';
    }
  }

  // 渲染題組連貫同頁視窗 (Reading Group Stage)
  function renderReadingGroupStage(currentQ) {
    if (!readingGroupStage) return;

    // 取得同一題組的所有小題
    const groupQuestions = questions.filter(item => item.group_id === currentQ.group_id);

    // 1. 組裝左側文章面板 (Passage Pane)
    let passageHtml = `
      <div class="passage-pane">
        <div class="passage-header-badge">
          📌 ${escapeHtml(currentQ.group_range || '閱讀理解題組')} · ${escapeHtml(currentQ.group_part || 'Part 7 閱讀理解')}
        </div>
    `;

    currentQ.passages.forEach(p => {
      passageHtml += `
        <div class="passage-item-box">
          <h2 class="passage-title-main">${escapeHtml(p.title || '閱讀文章')}</h2>
      `;

      if (p.type === 'chat' && p.messages) {
        // 即時通訊聊天室主題
        passageHtml += `<div class="chat-room-container">`;
        p.messages.forEach(msg => {
          passageHtml += `
            <div class="chat-bubble-item">
              <div class="chat-meta">
                <span class="chat-sender">${escapeHtml(msg.sender)}</span>
                <span class="chat-time">${escapeHtml(msg.time)}</span>
              </div>
              <div class="chat-msg">${escapeHtml(msg.text)}</div>
            </div>
          `;
        });
        passageHtml += `</div>`;
      } else if (p.type === 'recipe') {
        // 食譜指引主題
        passageHtml += `
          <div class="recipe-box">
            <div class="section-label">🥣 食材清單 (Ingredients)</div>
            <ul class="ingredient-list">
              ${(p.ingredients || []).map(ing => `<li>${escapeHtml(ing)}</li>`).join('')}
            </ul>
            <div class="section-label">👨‍🍳 烘焙步驟 (Directions)</div>
            <ol class="instruction-list">
              ${(p.instructions || []).map(ins => `<li>${escapeHtml(ins)}</li>`).join('')}
            </ol>
            ${p.nutrition ? `<div style="font-size:12.5px;color:#94a3b8;margin-top:10px;">📊 營養標示：${escapeHtml(p.nutrition)}</div>` : ''}
          </div>
        `;
      } else if (p.type === 'form') {
        // 訂單/表單主題
        passageHtml += `
          <div class="form-box">
            ${p.order_number ? `<div style="font-weight:700;color:var(--gold);margin-bottom:8px;">訂單編號：${escapeHtml(p.order_number)}</div>` : ''}
            ${p.customer ? `
              <div style="font-size:13.5px;color:#cbd5e1;margin-bottom:12px;padding:8px;background:rgba(255,255,255,0.04);border-radius:8px;">
                <strong>顧客姓名：</strong>${escapeHtml(p.customer.name || '')} | <strong>Email：</strong>${escapeHtml(p.customer.email || '')}
              </div>
            ` : ''}
            ${p.flavors ? `
              <div class="section-label">📋 訂購品項與數量</div>
              <ul class="ingredient-list">
                ${p.flavors.map(f => `<li><strong>${escapeHtml(f.flavor)}:</strong> ${f.qty} 顆</li>`).join('')}
              </ul>
            ` : ''}
            ${p.sections ? `
              <div class="evaluation-sections">
                ${p.sections.map(sec => `
                  <div style="margin-bottom:12px;padding:10px;background:rgba(255,255,255,0.03);border-radius:8px;">
                    <div style="font-weight:700;color:#93c5fd;">${escapeHtml(sec.q)}</div>
                    <div style="font-size:13.5px;color:#e2e8f0;margin-top:4px;">${escapeHtml(sec.why || sec.answer || '')}</div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${p.requirement ? `<div style="font-size:13px;color:#f59e0b;margin-bottom:6px;">⚠️ <strong>起訂限制：</strong>${escapeHtml(p.requirement)}</div>` : ''}
            ${p.special_details ? `<div style="font-size:13px;color:#60a5fa;margin-bottom:6px;">📝 <strong>特殊備註：</strong>${escapeHtml(p.special_details)}</div>` : ''}
            ${p.note ? `<div style="font-size:12px;color:#ef4444;margin-top:8px;">📌 <strong>取消政策：</strong>${escapeHtml(p.note)}</div>` : ''}
          </div>
        `;
      } else {
        // 一般文章、公告、信件
        passageHtml += `
          <div class="passage-text-content">${escapeHtml(p.content || '')}</div>
        `;
      }

      passageHtml += `</div>`;
    });

    passageHtml += `</div>`; // 結束 passage-pane

    // 2. 組裝右側小題面板 (Subquestions Pane)
    let subqHtml = `<div class="subquestions-pane">`;

    groupQuestions.forEach(subQ => {
      const isCurrentActive = (subQ.id === currentQ.id);
      const chosen = userAnswers[subQ.id];
      const isAnswered = Boolean(chosen);
      const isCorrect = (chosen === subQ.answer);

      subqHtml += `
        <div class="subquestion-card ${isCurrentActive ? 'active-subq' : ''}" id="subqCard_${subQ.id}">
          <div class="subq-header">
            <span class="subq-num-badge">Question ${subQ.id}</span>
            <button class="btn-flag ${flaggedQuestions.has(subQ.id) ? 'flagged' : ''}" data-subqid="${subQ.id}" title="標記稍後檢查">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>${flaggedQuestions.has(subQ.id) ? '已標記' : '標記'}</span>
            </button>
          </div>

          <div class="subq-prompt">${escapeHtml(subQ.question)}</div>

          <div class="subq-options">
      `;

      const optionKeys = ['A', 'B', 'C', 'D'];
      optionKeys.forEach(optKey => {
        const optVal = subQ.options[optKey];
        if (!optVal && optVal !== '') return;

        let optClass = 'opt-btn';
        if (chosen === optKey) optClass += ' selected';

        if (currentMode === 'practice' && chosen && showAnswerInPractice) {
          if (optKey === subQ.answer) optClass += ' correct-choice';
          else if (chosen === optKey) optClass += ' wrong-choice';
        }

        subqHtml += `
          <button class="${optClass}" data-subqid="${subQ.id}" data-opt="${optKey}">
            <span class="opt-badge">${optKey}</span>
            <span class="opt-text">${escapeHtml(optVal)}</span>
          </button>
        `;
      });

      subqHtml += `</div>`; // 結束 subq-options

      // 刷題模式下若已作答且開啟解析，立即顯示導師解析卡片
      if (currentMode === 'practice' && isAnswered && showExplainInPractice) {
        subqHtml += generateMentorCard(subQ, isCorrect);
      }

      subqHtml += `</div>`; // 結束 subquestion-card
    });

    subqHtml += `</div>`; // 結束 subquestions-pane

    readingGroupStage.innerHTML = passageHtml + subqHtml;

    // 綁定小題卡片事件
    readingGroupStage.querySelectorAll('.subq-options button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetSubQId = parseInt(btn.dataset.subqid, 10);
        const optKey = btn.dataset.opt;
        const targetQ = questions.find(item => item.id === targetSubQId);
        if (targetQ) {
          selectOption(targetQ, optKey);
        }
      });
    });

    readingGroupStage.querySelectorAll('.subq-header .btn-flag').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSubQId = parseInt(btn.dataset.subqid, 10);
        if (flaggedQuestions.has(targetSubQId)) {
          flaggedQuestions.delete(targetSubQId);
        } else {
          flaggedQuestions.add(targetSubQId);
        }
        saveCurrentState();
        updatePaletteStatus();
        renderReadingGroupStage(currentQ);
      });
    });

    // 自動聚焦捲動至當前子題
    const currentSubqEl = document.getElementById(`subqCard_${currentQ.id}`);
    if (currentSubqEl) {
      currentSubqEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }


  // Handle Option Click
  function selectOption(q, optKey) {
    userAnswers[q.id] = optKey;

    if (currentMode === 'practice') {
      const isCorrect = (optKey === q.answer);
      if (!isCorrect) {
        saveMistake(q);
      }
      recalculatePracticeStats();
    }

    saveCurrentState();
    renderQuestion(currentIndex);
    updatePaletteStatus();
  }

  // Clear current test answers & reset progress
  function clearCurrentTestAnswers() {
    const testTitle = currentTest ? currentTest.title : currentTestId;
    if (!confirm(`確定要清除【${testTitle}】的所有作答紀錄並重新練習嗎？`)) {
      return;
    }

    const storageKey = (currentMode === 'mistakes') ? 'mistakes' : currentTestId;
    userAnswers = {};
    flaggedQuestions.clear();
    currentIndex = 0;
    try {
      localStorage.removeItem(STORAGE_ANSWERS_PREFIX + storageKey);
      localStorage.removeItem(STORAGE_FLAGS_PREFIX + storageKey);
      localStorage.removeItem(STORAGE_INDEX_PREFIX + storageKey);
    } catch (e) {}

    recalculatePracticeStats();
    renderPalette();
    renderQuestion(0);
    showToast(`🧹 已清除【${testTitle}】的作答紀錄！`);
  }

  // Update Practice Stats Banner
  function updatePracticeStats() {
    practiceCorrectEl.textContent = practiceStats.correct;
    practiceWrongEl.textContent = practiceStats.wrong;
    const total = practiceStats.correct + practiceStats.wrong;
    const rate = total > 0 ? Math.round((practiceStats.correct / total) * 100) : 0;
    practiceRateEl.textContent = `${rate}%`;
  }

  // Save Mistake to LocalStorage
  function saveMistake(q) {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_MISTAKES_KEY) || '[]');
      if (!stored.some(item => item.id === q.id && item.testId === currentTestId)) {
        stored.push({
          testId: currentTestId,
          id: q.id,
          question: q.question,
          options: q.options,
          answer: q.answer
        });
        localStorage.setItem(STORAGE_MISTAKES_KEY, JSON.stringify(stored));
        loadMistakesCount();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Load Mistakes Count Badge
  function loadMistakesCount() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_MISTAKES_KEY) || '[]');
      mistakesCountEl.textContent = stored.length;
    } catch (e) {
      mistakesCountEl.textContent = '0';
    }
  }

  // Load Mistakes Mode
  function loadMistakesMode() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_MISTAKES_KEY) || '[]');
      rawQuestions = [...stored];
      questions = [...stored];
      if (questions.length === 0) {
        showToast('🎉 太棒了！目前沒有任何錯題記錄！');
        switchMode('practice');
        return;
      }
      loadSavedStateForTest('mistakes');
      if (currentIndex >= questions.length || currentIndex < 0) {
        currentIndex = 0;
      }
      renderPalette();
      renderQuestion(currentIndex);
    } catch (e) {
      showToast('讀取錯題記錄失敗');
    }
  }

  // Switch Modes (Practice / Exam / Mistakes)
  function switchMode(newMode) {
    currentMode = newMode;
    btnModePractice.classList.toggle('active', currentMode === 'practice');
    btnModeExam.classList.toggle('active', currentMode === 'exam');
    btnModeMistakes.classList.toggle('active', currentMode === 'mistakes');

    saveCurrentState();

    if (currentMode === 'exam') {
      practiceBanner.style.display = 'none';
      examControls.style.display = 'flex';
      startExamTimer();
    } else if (currentMode === 'practice') {
      practiceBanner.style.display = 'flex';
      examControls.style.display = 'none';
      stopExamTimer();
    } else if (currentMode === 'mistakes') {
      practiceBanner.style.display = 'none';
      examControls.style.display = 'none';
      stopExamTimer();
      loadMistakesMode();
      return;
    }

    loadTest(currentTestId);
  }

  // Exam Timer Functions
  function startExamTimer() {
    stopExamTimer();
    examTimeLeft = examDuration;
    updateTimerDisplay();

    examTimerInterval = setInterval(() => {
      examTimeLeft--;
      updateTimerDisplay();

      if (examTimeLeft <= 300) {
        // Less than 5 mins
        document.getElementById('examTimer').classList.add('urgent');
      }

      if (examTimeLeft <= 0) {
        stopExamTimer();
        showToast('⏰ 考試時間結束，自動交卷！');
        submitExam();
      }
    }, 1000);
  }

  function stopExamTimer() {
    if (examTimerInterval) {
      clearInterval(examTimerInterval);
      examTimerInterval = null;
    }
    const timerBox = document.getElementById('examTimer');
    if (timerBox) timerBox.classList.remove('urgent');
  }

  function updateTimerDisplay() {
    const mins = Math.floor(examTimeLeft / 60);
    const secs = examTimeLeft % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Submit Exam & Score Calculation
  function submitExam() {
    stopExamTimer();
    let correctCount = 0;
    let wrongCount = 0;
    let unansCount = 0;

    questions.forEach(q => {
      const userAns = userAnswers[q.id];
      if (!userAns) {
        unansCount++;
      } else if (userAns === q.answer) {
        correctCount++;
      } else {
        wrongCount++;
        saveMistake(q);
      }
    });

    const total = questions.length;
    const accuracy = total > 0 ? (correctCount / total) : 0;

    // TOEIC Reading Score Mapping (5 ~ 495)
    // Formula: baseline + curved accuracy score
    let toeicScaledScore = 5;
    if (correctCount > 0) {
      toeicScaledScore = Math.round(50 + (accuracy * 445) / 5) * 5;
      toeicScaledScore = Math.min(495, Math.max(5, toeicScaledScore));
    }

    modalTestName.textContent = currentTest ? currentTest.title : '多益全真測驗';
    modalScore.textContent = toeicScaledScore;
    resCorrectCount.textContent = correctCount;
    resWrongCount.textContent = wrongCount;
    resUnansweredCount.textContent = unansCount;
    resAccuracy.textContent = `${(accuracy * 100).toFixed(1)}%`;

    resultModal.style.display = 'flex';
  }

  // Toast Notification
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Event Listeners
  function setupEventListeners() {
    // Test Selector
    testSelect.addEventListener('change', (e) => {
      loadTest(e.target.value);
    });

    // Mode Buttons
    btnModePractice.addEventListener('click', () => switchMode('practice'));
    btnModeExam.addEventListener('click', () => switchMode('exam'));
    btnModeMistakes.addEventListener('click', () => switchMode('mistakes'));

    // Prev / Next
    btnPrevQ.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
      }
    });

    btnNextQ.addEventListener('click', () => {
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
      }
    });

    // Keyboard Shortcuts (Arrow keys & A/B/C/D)
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          currentIndex--;
          renderQuestion(currentIndex);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < questions.length - 1) {
          currentIndex++;
          renderQuestion(currentIndex);
        }
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const optKey = e.key.toUpperCase();
        if (questions[currentIndex]) {
          selectOption(questions[currentIndex], optKey);
        }
      }
    });

    // Flag Button
    btnFlag.addEventListener('click', () => {
      const q = questions[currentIndex];
      if (!q) return;

      if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
        btnFlag.classList.remove('flagged');
        showToast(`已取消標記第 ${q.id} 題`);
      } else {
        flaggedQuestions.add(q.id);
        btnFlag.classList.add('flagged');
        showToast(`🚩 已標記第 ${q.id} 題稍後檢查`);
      }
      saveCurrentState();
      updatePaletteStatus();
    });

    // Drawer Toggle (Mobile)
    btnOpenDrawer.addEventListener('click', () => {
      paletteSidebar.classList.add('mobile-open');
    });

    btnCloseDrawer.addEventListener('click', () => {
      paletteSidebar.classList.remove('mobile-open');
    });

    // Submit Exam Button
    btnSubmitExam.addEventListener('click', () => {
      const answeredCount = Object.keys(userAnswers).length;
      const unansCount = questions.length - answeredCount;

      if (unansCount > 0) {
        if (confirm(`您還有 ${unansCount} 題尚未作答，確定要立即交卷計分嗎？`)) {
          submitExam();
        }
      } else {
        submitExam();
      }
    });

    // Modal Action Buttons
    btnCloseModal.addEventListener('click', () => {
      resultModal.style.display = 'none';
    });

    btnRetakeTest.addEventListener('click', () => {
      resultModal.style.display = 'none';
      const storageKey = (currentMode === 'mistakes') ? 'mistakes' : currentTestId;
      userAnswers = {};
      flaggedQuestions.clear();
      currentIndex = 0;
      try {
        localStorage.removeItem(STORAGE_ANSWERS_PREFIX + storageKey);
        localStorage.removeItem(STORAGE_FLAGS_PREFIX + storageKey);
        localStorage.removeItem(STORAGE_INDEX_PREFIX + storageKey);
      } catch (e) {}
      recalculatePracticeStats();
      if (currentMode === 'exam') startExamTimer();
      renderPalette();
      renderQuestion(0);
    });

    btnReviewMistakes.addEventListener('click', () => {
      resultModal.style.display = 'none';
      switchMode('mistakes');
    });

    // Reset Test Button (Practice Mode)
    if (btnResetTest) {
      btnResetTest.addEventListener('click', () => {
        clearCurrentTestAnswers();
      });
    }

    // Toggle Answer Display Button (Practice Mode)
    if (btnToggleAnswer) {
      btnToggleAnswer.addEventListener('click', () => {
        showAnswerInPractice = !showAnswerInPractice;
        localStorage.setItem('toeic_show_answer', showAnswerInPractice);
        updateToggleButtonsUI();
        renderQuestion(currentIndex);
        updatePaletteStatus();
        showToast(showAnswerInPractice ? '👁️ 已開啟答案顯示' : '🔒 已關閉答案顯示');
      });
    }

    // Toggle Explanation Button (Practice Mode)
    if (btnToggleExplain) {
      btnToggleExplain.addEventListener('click', () => {
        showExplainInPractice = !showExplainInPractice;
        localStorage.setItem('toeic_show_explain', showExplainInPractice);
        updateToggleButtonsUI();
        renderQuestion(currentIndex);
        showToast(showExplainInPractice ? '📖 已開啟題目解釋' : '🚫 已關閉題目解釋');
      });
    }

    // Question Type Filter Tabs (Practice Mode)
    if (filterBtns && filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter || 'all';
          applyFilter(filter);
          const filterLabels = {
            'all': '全部題型',
            'part5': 'Part 5 句子填空',
            'part6': 'Part 6 段落填空',
            'part7': 'Part 7 閱讀理解'
          };
          showToast(`🎯 已切換題型：${filterLabels[filter] || filter}（共 ${questions.length} 題）`);
        });
      });
    }

    // Global Tooltip Mobile Long-press & Tap Handlers
    let longPressTimer = null;
    let touchMoved = false;

    document.addEventListener('touchstart', (e) => {
      const trigger = e.target.closest('.word-tooltip-trigger');
      if (!trigger) {
        document.querySelectorAll('.word-tooltip-trigger.active').forEach(t => t.classList.remove('active'));
        return;
      }
      touchMoved = false;
      clearTimeout(longPressTimer);
      longPressTimer = setTimeout(() => {
        if (!touchMoved) {
          document.querySelectorAll('.word-tooltip-trigger.active').forEach(t => {
            if (t !== trigger) t.classList.remove('active');
          });
          trigger.classList.toggle('active');
          if (navigator.vibrate) {
            try { navigator.vibrate(25); } catch (err) {}
          }
        }
      }, 350);
    }, { passive: true });

    document.addEventListener('touchmove', () => {
      touchMoved = true;
      clearTimeout(longPressTimer);
    }, { passive: true });

    document.addEventListener('touchend', () => {
      clearTimeout(longPressTimer);
    }, { passive: true });

    // Tap to toggle tooltip on mobile/desktop
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('.word-tooltip-trigger');
      if (trigger) {
        const wasActive = trigger.classList.contains('active');
        document.querySelectorAll('.word-tooltip-trigger.active').forEach(t => t.classList.remove('active'));
        if (!wasActive) {
          trigger.classList.add('active');
        }
      } else {
        document.querySelectorAll('.word-tooltip-trigger.active').forEach(t => t.classList.remove('active'));
      }
    });
  }

  // Update Practice Toggles UI
  function updateToggleButtonsUI() {
    if (btnToggleAnswer && answerToggleText) {
      if (showAnswerInPractice) {
        btnToggleAnswer.className = 'toggle-btn active';
        answerToggleText.textContent = '開啟';
        btnToggleAnswer.title = '點擊關閉即時答案顯示';
      } else {
        btnToggleAnswer.className = 'toggle-btn inactive';
        answerToggleText.textContent = '關閉';
        btnToggleAnswer.title = '點擊開啟即時答案顯示';
      }
    }
    if (btnToggleExplain && explainToggleText) {
      if (showExplainInPractice) {
        btnToggleExplain.className = 'toggle-btn active';
        explainToggleText.textContent = '開啟';
        btnToggleExplain.title = '點擊關閉題目解析';
      } else {
        btnToggleExplain.className = 'toggle-btn inactive';
        explainToggleText.textContent = '關閉';
        btnToggleExplain.title = '點擊開啟題目解析';
      }
    }
  }

  // Generate Rich Explanation
  
  // Generate High-Pedagogy Mentor Card (專業導師生活化譬喻解析)
  function generateMentorCard(q, isCorrect) {
    const exp = q.explanation || {};
    const takeaway = exp.mentor_takeaway || exp.focus || '💡 掌握多益核心考點與上下文關鍵線索';
    const analogy = exp.mentor_analogy || '';
    const translation = exp.context_translation || exp.translation || '';
    const evidence = exp.evidence || '';
    const trapAnalysis = exp.trap_analysis || {};
    const keyVocab = exp.key_vocab || [];

    // 若具備升級版的導師解析欄位
    if (analogy || trapAnalysis['A'] || trapAnalysis['B']) {
      let trapsHtml = '';
      const optionKeys = ['A', 'B', 'C', 'D'];
      optionKeys.forEach(optKey => {
        const itemText = trapAnalysis[optKey];
        if (!itemText) return;
        const isOptCorrect = (optKey === q.answer);
        trapsHtml += `
          <div class="trap-item">
            <span class="trap-opt-badge ${isOptCorrect ? 'correct' : 'wrong'}">選項 (${optKey})</span>
            ${escapeHtml(itemText)}
          </div>
        `;
      });

      let vocabHtml = '';
      if (keyVocab && keyVocab.length > 0) {
        vocabHtml = `
          <div class="mentor-block">
            <div class="section-label">🔑 職場實戰高頻必備詞彙</div>
            <div class="vocab-container">
              ${keyVocab.map(v => `
                <div class="vocab-pill">
                  <span class="vocab-word">${escapeHtml(v.word)}</span>
                  <span class="vocab-meaning">${escapeHtml(v.meaning)}</span>
                  ${v.note ? `<span style="font-size:11px;color:#94a3b8;">(${escapeHtml(v.note)})</span>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="mentor-pedagogy-card">
          <!-- 1. 秒懂核心 -->
          <div class="takeaway-box">
            <div class="takeaway-text">${escapeHtml(takeaway)}</div>
          </div>

          <!-- 2. 導師生活化譬喻 -->
          ${analogy ? `
            <div class="analogy-box">
              <div class="analogy-title">🎯 導師生動譬喻（為什麼選它？）</div>
              <div class="analogy-content">${escapeHtml(analogy)}</div>
            </div>
          ` : ''}

          <!-- 3. 前後文情境流暢翻譯 -->
          ${translation ? `
            <div class="translation-box">
              <div class="translation-title">📖 前後文情境流暢翻譯</div>
              <div class="translation-content">${escapeHtml(translation)}</div>
            </div>
          ` : ''}

          <!-- 4. 原文關鍵線索定位 -->
          ${evidence ? `
            <div class="evidence-box">
              <div class="evidence-title">🎯【原文破題關鍵線索】</div>
              <div class="evidence-content">${escapeHtml(evidence)}</div>
            </div>
          ` : ''}

          <!-- 5. 避坑防雷指南 -->
          ${trapsHtml ? `
            <div class="traps-container">
              <div class="traps-title">🚨 避坑防雷指南（選項為何錯誤？）</div>
              ${trapsHtml}
            </div>
          ` : ''}

          <!-- 6. 職場高頻詞彙 -->
          ${vocabHtml}
        </div>
      `;
    }

    // 舊版回退相容渲染
    return generateExplanation(q, isCorrect);
  }

  function generateExplanation(q, isCorrect) {
    const exp = q.explanation || {};
    const focus = exp.focus || '多益核心文法與語意測驗';
    const type = exp.type || '句型結構與詞彙運用';
    const translation = exp.translation || '';
    const grammar = exp.grammar || '';
    const optionsAnalysis = exp.options_analysis || {};

    const ansText = q.options[q.answer] || '';
    const ansInfo = optionsAnalysis[q.answer] || {};
    const ansMeaning = ansInfo.meaning || '';

    let replacement = `<strong>${escapeHtml(ansText)}</strong>`;
    if (ansMeaning) {
      replacement = `<span class="word-tooltip-trigger" tabindex="0" data-meaning="${escapeHtml(ansMeaning)}" title="懸停或長按查看中文翻譯"><strong class="highlight-ans">${escapeHtml(ansText)}</strong><span class="word-tooltip-box" role="tooltip"><span class="tooltip-header"><span class="tooltip-badge">中文翻譯</span><span class="tooltip-word">${escapeHtml(ansText)}</span></span><span class="tooltip-body">${escapeHtml(ansMeaning)}</span><span class="tooltip-arrow"></span></span></span>`;
    }
    let completeSentence = escapeHtml(q.question).replace(/_{3,}|＿＿＿+/g, replacement);

    const optionKeys = ['A', 'B', 'C', 'D'];
    let optionsGridHtml = '';

    optionKeys.forEach(optKey => {
      const optVal = q.options[optKey];
      if (!optVal) return;

      const isOptCorrect = (optKey === q.answer);
      const optInfo = optionsAnalysis[optKey] || {};
      const pos = optInfo.pos || (isOptCorrect ? '正解詞性' : '選項詞性');
      const meaning = optInfo.meaning ? `「${escapeHtml(optInfo.meaning)}」` : '';
      const reason = optInfo.reason || (isOptCorrect ? '符合本題文法結構與上下文語意。' : '此選項在此處文法結構或語境搭配不符。');
      const example = optInfo.example || '';

      optionsGridHtml += `
        <div class="opt-analysis-item ${isOptCorrect ? 'correct-item' : 'wrong-item'}">
          <div class="opt-item-header">
            <div class="opt-item-title">
              <span>(${optKey}) ${escapeHtml(optVal)}</span>
              ${meaning ? `<span style="font-size:12.5px;color:#94a3b8;">${meaning}</span>` : ''}
            </div>
            <span class="opt-status-tag">${isOptCorrect ? '✅ 正確解答' : '❌ 錯誤排除'}</span>
          </div>
          <div class="opt-item-pos">📌 詞性判斷：<span>${escapeHtml(pos)}</span></div>
          <div class="opt-item-reason">
            <strong>${isOptCorrect ? '【正確解析】' : '【排除原因】'}</strong> ${escapeHtml(reason)}
          </div>
          ${example ? `<div class="opt-item-example"><strong>範例：</strong>${escapeHtml(example)}</div>` : ''}
        </div>
      `;
    });

    return `
      <div class="explain-box">
        <div class="explain-header-row">
          <span class="explain-badge">🎯 核心考點：${escapeHtml(focus)}</span>
          <span class="explain-badge tense">⏳ 句型/時態：${escapeHtml(type)}</span>
        </div>

        <div class="explain-section">
          <span class="explain-tag">📌 完整正確語句</span>
          <div class="explain-sentence">${completeSentence}</div>
        </div>

        ${translation ? `
          <div class="explain-section">
            <span class="explain-tag">🌐 句意中文翻譯</span>
            <div class="explain-translation-text">${escapeHtml(translation)}</div>
          </div>
        ` : ''}

        ${grammar ? `
          <div class="explain-section">
            <span class="explain-tag">📝 文法與結構精析</span>
            <div class="explain-grammar-text">${escapeHtml(grammar)}</div>
          </div>
        ` : ''}

        <div class="explain-section">
          <span class="explain-tag">🔍 四大選項深度剖析（文法 / 詞性 / 時態 / 搭配）</span>
          <div class="options-analysis-grid">
            ${optionsGridHtml}
          </div>
        </div>

        <div class="explain-tip">
          ${isCorrect ? '🌟 觀念清晰，作答精準！請繼續保持！' : '💡 已為您將此題自動收錄至「錯題複習專區」，建議針對上述 4 個選項的詞性與時態重點加強複習。'}
        </div>
      </div>
    `;
  }

  // HTML Escape Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Bootstrap on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
