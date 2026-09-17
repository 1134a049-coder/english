const TOEIC_DATA = {
  "project": "多益英檢 APP 題庫資料庫",
  "tests_count": 4,
  "tests": [
    {
      "test_id": "多益1",
      "title": "多益模擬測驗一 (Test 1)",
      "total_questions": 53,
      "questions": [
        {
          "id": 1,
          "range": "",
          "page": 1,
          "question": "______ newer employees, senior workers tend to harbor deep loyalty towards the company.",
          "options": {
            "A": "Unlike",
            "B": "Through",
            "C": "Until",
            "D": "Among"
          },
          "answer": "A",
          "explanation": {
            "focus": "介系詞用法與語意對比",
            "type": "介系詞片語修飾全句",
            "translation": "不同於新進員工，資深員工往往對公司懷有深厚的忠誠度。",
            "grammar": "句首空格後接名詞片語 newer employees，逗號後全句主詞為 senior workers，動詞為 tend to。兩者形成「新進員工 vs. 資深員工」的對比，需選擇具有對照含義的介系詞。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "不同於、不像",
                "correct": true,
                "reason": "Unlike 後接名詞表示與主詞相反之特徵，精準呈現新舊員工忠誠度的強烈對照。",
                "example": "Unlike her sister, Emily is fond of sports."
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "透過、穿過",
                "correct": false,
                "reason": "表手段或空間穿越（如 through effort），放入句首「透過新進員工，資深員工往往忠誠」語意不通。"
              },
              "C": {
                "pos": "prep./conj. 介系詞/連接詞",
                "meaning": "直到...為止",
                "correct": false,
                "reason": "表時間持續的截止點（如 until midnight），不能接人稱名詞表示對象。"
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "在...之中",
                "correct": false,
                "reason": "表在三者或群體之中（如 among peers），若用 Among newer employees 則主詞也應屬於其中之一，語法邏輯矛盾。"
              }
            }
          }
        },
        {
          "id": 2,
          "range": "",
          "page": 1,
          "question": "The conference ______ by more than one hundred management executives last week.",
          "options": {
            "A": "attendance",
            "B": "was attended",
            "C": "attends",
            "D": "is attended"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態（過去式）與被動語態",
            "type": "過去被動態 (was + p.p.)",
            "translation": "上週有一百多位高階管理主管出席了這場會議。",
            "grammar": "主詞 The conference（會議）為不可自主執行出席動作的無生命名詞，必須使用被動態（be + p.p.）；句尾有明確過去時間副詞 last week，故限定使用過去被動態 was attended。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "出席、出席人數",
                "correct": false,
                "reason": "空格在主詞後方，需要謂語動詞，不可直接填入名詞 attendance。"
              },
              "B": {
                "pos": "v. 動詞過去被動態",
                "meaning": "被出席、有人參加",
                "correct": true,
                "reason": "符合主詞單數、過去時態（last week）與被動語態要求，搭配介系詞 by 引導主動執行者。",
                "example": "The lecture was attended by hundreds of students."
              },
              "C": {
                "pos": "v. 動詞現在式單數",
                "meaning": "出席、參加",
                "correct": false,
                "reason": "現在式與 last week 時態矛盾，且為主動語態，會議無法主動參加他人。"
              },
              "D": {
                "pos": "v. 動詞現在被動態",
                "meaning": "被出席",
                "correct": false,
                "reason": "雖為被動態，但 is 為現在式，與句尾過去時間副詞 last week 產生時態衝突。"
              }
            }
          }
        },
        {
          "id": 3,
          "range": "",
          "page": 1,
          "question": "The politician promised that after he was elected, he would ______ in a new age of peace.",
          "options": {
            "A": "take",
            "B": "usher",
            "C": "consider",
            "D": "generate"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞片語搭配（固定片語）",
            "type": "情態助動詞 would + 原形動詞",
            "translation": "這位政客承諾當選之後，將會開創一個和平的新時代。",
            "grammar": "空格前為助動詞 would，後接副詞 in。需挑選能與 in 搭配並表達「宣告/引領進入新紀元」的動詞片語。",
            "options_analysis": {
              "A": {
                "pos": "v. 動詞原形",
                "meaning": "拿取、帶領",
                "correct": false,
                "reason": "take in 常見含義為「吸收、收留、欺騙」，無法與 a new age of peace 構成開創新時代之意。"
              },
              "B": {
                "pos": "v. 動詞原形",
                "meaning": "引領、迎接",
                "correct": true,
                "reason": "固定片語 usher in 表「引領...的到來、開創新局」，為多益政經變革題型之高頻核心用詞。",
                "example": "The technological breakthrough ushered in a new era."
              },
              "C": {
                "pos": "v. 動詞原形",
                "meaning": "考慮、認為",
                "correct": false,
                "reason": "及物動詞，後直接接受詞或動名詞，不接副詞 in。"
              },
              "D": {
                "pos": "v. 動詞原形",
                "meaning": "產生、引起",
                "correct": false,
                "reason": "及物動詞，表示產生能源或利潤（generate profit），不與 in 搭配使用。"
              }
            }
          }
        },
        {
          "id": 4,
          "range": "",
          "page": 1,
          "question": "The firm's partners discussed the situation thoroughly, ______ left the meeting still unclear as to the organization's future.",
          "options": {
            "A": "without",
            "B": "therefore",
            "C": "including",
            "D": "yet"
          },
          "answer": "D",
          "explanation": {
            "focus": "對等連接詞與語意轉折",
            "type": "對等連接詞 (Coordinating Conjunction)",
            "translation": "事務所合夥人深入討論了目前情況，然而會議結束時對組織的未來依舊感到不明朗。",
            "grammar": "前半句「深入討論 (discussed thoroughly)」與後半句「依舊不明朗 (still unclear)」語意形成強烈轉折對照，空格需填入能連接兩謂語動詞的轉折連接詞。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "沒有、缺乏",
                "correct": false,
                "reason": "介系詞後面必須接名詞或動名詞（V-ing），不可直接連接動詞過去式 left。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "因此",
                "correct": false,
                "reason": "副詞不能當對等連接詞連接兩個獨立動詞短語，且表示因果關係而非轉折。"
              },
              "C": {
                "pos": "prep. 介系詞",
                "meaning": "包括",
                "correct": false,
                "reason": "介系詞，後面需接包含之項目名詞，文法不符。"
              },
              "D": {
                "pos": "conj. 對等連接詞",
                "meaning": "然而、但是",
                "correct": true,
                "reason": "yet 作對等連接詞相當於 but，可連接具有轉折語意的兩個謂語動詞（discussed..., yet left...）。",
                "example": "He worked hard, yet he failed the test."
              }
            }
          }
        },
        {
          "id": 5,
          "range": "",
          "page": 1,
          "question": "Sometimes, I have trouble telling ______ lunchbox is supposed to be mine.",
          "options": {
            "A": "when",
            "B": "my",
            "C": "that",
            "D": "which"
          },
          "answer": "D",
          "explanation": {
            "focus": "疑問形容詞引導之名詞子句",
            "type": "疑問形容詞 (Interrogative Adjective)",
            "translation": "有時候我很難分辨哪一個便當盒才是我的。",
            "grammar": "telling 後接名詞子句作受詞。空格後緊接單數名詞 lunchbox，需填入能在有限範圍內指涉「哪一個」的疑問形容詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 疑問副詞",
                "meaning": "何時",
                "correct": false,
                "reason": "when 是副詞，不能直接修飾名詞 lunchbox，telling when lunchbox 文法不通。"
              },
              "B": {
                "pos": "pron. 代名詞",
                "meaning": "我的",
                "correct": false,
                "reason": "若填 my lunchbox 則與後文 mine（我的）語意重疊矛盾，且缺少引導名詞子句之疑問詞。"
              },
              "C": {
                "pos": "conj. 連接詞",
                "meaning": "那個/引導詞",
                "correct": false,
                "reason": "that 引導名詞子句時陳述確定事實，無法表達「分辨是哪一個」的疑問語氣。"
              },
              "D": {
                "pos": "adj./pron. 疑問形容詞",
                "meaning": "哪一個",
                "correct": true,
                "reason": "which 作疑問形容詞修飾 lunchbox，表達在若干便當盒中辨別「哪一個」，文法與語意皆完備。",
                "example": "I don't know which bus goes downtown."
              }
            }
          }
        },
        {
          "id": 6,
          "range": "",
          "page": 1,
          "question": "Every time I hear the phone, I think it might be bad news, and I get this ______ feeling in my stomach.",
          "options": {
            "A": "sink",
            "B": "sunk",
            "C": "sank",
            "D": "sinking"
          },
          "answer": "D",
          "explanation": {
            "focus": "現在分詞轉形容詞（慣用片語）",
            "type": "現在分詞作定語修飾名詞",
            "translation": "每次電話一響，我就覺得可能是壞消息，胃裡就泛起一陣不祥下沉的難受感。",
            "grammar": "空格位於指示代名詞 this 與名詞 feeling 之間，需選擇修飾 feeling 的形容詞。英文中 a sinking feeling 為固定成語。",
            "options_analysis": {
              "A": {
                "pos": "v./n. 動詞原形/名詞",
                "meaning": "下沉/水槽",
                "correct": false,
                "reason": "動詞原形不可直接置於 this 與名詞 feeling 之間作定語。"
              },
              "B": {
                "pos": "v. 過去分詞",
                "meaning": "沉沒的",
                "correct": false,
                "reason": "通常形容實體沈入水中的物體（如 a sunk vessel），不用於形容心情。"
              },
              "C": {
                "pos": "v. 過去式動詞",
                "meaning": "下沉了",
                "correct": false,
                "reason": "動詞過去式只能作謂語動詞，不可置於名詞前作修飾詞。"
              },
              "D": {
                "pos": "adj./V-ing 現在分詞",
                "meaning": "往下跌落的、下沉的",
                "correct": true,
                "reason": "a sinking feeling 為高頻英美慣用語，指「（預感不祥或大難臨頭時）心頭一沉的感受」。",
                "example": "She had a sinking feeling that she forgot her passport."
              }
            }
          }
        },
        {
          "id": 7,
          "range": "",
          "page": 1,
          "question": "Barbara had only been ______ staff for three weeks before the accident occurred.",
          "options": {
            "A": "in",
            "B": "at",
            "C": "on",
            "D": "for"
          },
          "answer": "C",
          "explanation": {
            "focus": "介系詞與組織團隊搭配",
            "type": "固定介系詞片語 (on staff)",
            "translation": "在事故發生之前，芭芭拉加入員工團隊才僅僅三週。",
            "grammar": "空格與後方名詞 staff 搭配。表示「屬於...的職員/員工編制」使用固定介系詞 on staff。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "在...之內",
                "correct": false,
                "reason": "英文習慣不說 in staff，而說 on staff 或 on the team。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "在...地點",
                "correct": false,
                "reason": "at 表具體地點或時間，不能與 staff 搭配表達職務隸屬。"
              },
              "C": {
                "pos": "prep. 介系詞",
                "meaning": "在...之上/隸屬",
                "correct": true,
                "reason": "on staff 為商業英文標準用法，表示「受聘為正式職員/在編人員」。",
                "example": "We currently have five doctors on staff."
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "為了/長達",
                "correct": false,
                "reason": "後文已有 for three weeks 表時間長度，若前面再用 for staff 語意重複且不符搭配習慣。"
              }
            }
          }
        },
        {
          "id": 8,
          "range": "",
          "page": 1,
          "question": "You can't have it ______ ways; it's either one or the other.",
          "options": {
            "A": "no",
            "B": "your",
            "C": "both",
            "D": "neither"
          },
          "answer": "C",
          "explanation": {
            "focus": "不定代名詞之雙重肯定否定",
            "type": "慣用句型 (have it both ways)",
            "translation": "你不可能兩全其美；不是選這個，就是選那個。",
            "grammar": "後文 it's either one or the other（二擇一）提示前句表示「不能兩者兼得」，英文慣用片語為 have it both ways。",
            "options_analysis": {
              "A": {
                "pos": "adj./adv. 形容詞/副詞",
                "meaning": "沒有",
                "correct": false,
                "reason": "have it no ways 語法錯誤，且句首已有否定詞 can't，形成雙重否定致語意混亂。"
              },
              "B": {
                "pos": "pron. 代名詞",
                "meaning": "你的",
                "correct": false,
                "reason": "have it your way 意思是「隨你的便」，但後面是二選一條件，語意不相容。"
              },
              "C": {
                "pos": "pron./adj. 不定代名詞",
                "meaning": "兩者都",
                "correct": true,
                "reason": "can't have it both ways 為常見成語，意指「魚與熊掌不可兼得、不能妄想雙重好處」。",
                "example": "You cannot have it both ways: you must choose."
              },
              "D": {
                "pos": "pron. 不定代名詞",
                "meaning": "兩者皆非",
                "correct": false,
                "reason": "neither 與 can't 搭配會造成雙重否定，句義反轉。"
              }
            }
          }
        },
        {
          "id": 9,
          "range": "",
          "page": 1,
          "question": "When it comes to negotiating, I don't compromise. I want the highest value for the ______ cost.",
          "options": {
            "A": "lowest",
            "B": "low",
            "C": "lowering",
            "D": "lowly"
          },
          "answer": "A",
          "explanation": {
            "focus": "形容詞最高級之詞性與語意",
            "type": "最高級形容詞 (lowest)",
            "translation": "談判的時候我絕不妥協。我要以最低的成本爭取最高的價值。",
            "grammar": "空格位於定冠詞 the 與單數名詞 cost 之間，前文有 highest value（最高價值），形成 the highest... for the lowest... 的對仗最高級修飾。",
            "options_analysis": {
              "A": {
                "pos": "adj. 最高級形容詞",
                "meaning": "最低的",
                "correct": true,
                "reason": "lowest 符合 the + 最高級 + 名詞 cost 的語法結構，與 highest value 完美呼應。",
                "example": "We offer the best service at the lowest cost."
              },
              "B": {
                "pos": "adj. 原級形容詞",
                "meaning": "低的",
                "correct": false,
                "reason": "原級與 the highest 的強烈對比修辭不匹配，商業談判追求最極致效益。"
              },
              "C": {
                "pos": "v./adj. 現在分詞",
                "meaning": "正在降低的",
                "correct": false,
                "reason": "lowering cost 語義為「使成本降低中」，不合此處靜態名詞修飾。"
              },
              "D": {
                "pos": "adv./adj. 副詞/地位低的",
                "meaning": "卑微地",
                "correct": false,
                "reason": "lowly 表地位卑下，不能修飾金額成本 cost。"
              }
            }
          }
        },
        {
          "id": 10,
          "range": "",
          "page": 1,
          "question": "I prefer spicy food, so I find the food here too ______ to be enjoyable.",
          "options": {
            "A": "ancient",
            "B": "delicate",
            "C": "tasteless",
            "D": "flavorful"
          },
          "answer": "C",
          "explanation": {
            "focus": "形容詞語意選擇（飲食評價）",
            "type": "too + adj. + to V 句型",
            "translation": "我偏好重口味辣食，所以我覺得這裡的食物太索然無味，難以享受。",
            "grammar": "因果關係句：前半句說明偏好 spicy food（辛辣重口味），故在 too ______ to be enjoyable 結構中，需填入代表缺乏味道的負面形容詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "古老的",
                "correct": false,
                "reason": "ancient 用於指古代歷史文明，不能形容當下的菜餚口味。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "精緻清淡的",
                "correct": false,
                "reason": "delicate 表細緻高雅，通常為正面褒義詞，不符合無法享受的抱怨語氣。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "索然無味的、淡而無味的",
                "correct": true,
                "reason": "tasteless 直接與 spicy food 形成對立，完美契合 too tasteless to be enjoyable（無味至極無法下嚥）。",
                "example": "The soup was bland and tasteless."
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "美味可口的、香氣濃郁的",
                "correct": false,
                "reason": "flavorful 是正面美味之意，若太美味不可能導致 not enjoyable。"
              }
            }
          }
        },
        {
          "id": 11,
          "range": "",
          "page": 1,
          "question": "This is so ______ ! Why are you doing this now, in public?",
          "options": {
            "A": "embarrassing",
            "B": "embarrassed",
            "C": "embarrasses",
            "D": "embarrassingly"
          },
          "answer": "A",
          "explanation": {
            "focus": "情緒分詞形容詞（-ing vs. -ed）",
            "type": "be + so + adj. 表事物特徵",
            "translation": "這實在太令人尷尬了！你為什麼現在非要在公共場合這樣做？",
            "grammar": "主詞為代名詞 This（指眼前發生的事情/狀況），事物「令人感到尷尬」需用現在分詞 -ing 形容詞；人「感到尷尬」才用過去分詞 -ed。",
            "options_analysis": {
              "A": {
                "pos": "adj. 現在分詞轉形容詞",
                "meaning": "令人尷尬的、難堪的",
                "correct": true,
                "reason": "主詞 This 指這件事，形容事物令人尷尬必須使用 -ing 結尾的 embarrassing。",
                "example": "It was an embarrassing situation for everyone."
              },
              "B": {
                "pos": "adj. 過去分詞轉形容詞",
                "meaning": "（人）感到尷尬的",
                "correct": false,
                "reason": "embarrassed 修飾人感受到的情緒（如 I felt embarrassed），不能修飾事物 This。"
              },
              "C": {
                "pos": "v. 動詞第三人稱單數",
                "meaning": "使尷尬",
                "correct": false,
                "reason": "空格在 is so 後方，需接形容詞作表語，不能直接接一般及物動詞現在式。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "尷尬地",
                "correct": false,
                "reason": "副詞不能在 be 動詞後單獨充當主詞補語。"
              }
            }
          }
        },
        {
          "id": 12,
          "range": "",
          "page": 1,
          "question": "The protestors don't want the new power plant to be built ______ they fear a powerful earthquake may trigger a meltdown.",
          "options": {
            "A": "furthermore",
            "B": "assuming that",
            "C": "due to",
            "D": "because"
          },
          "answer": "D",
          "explanation": {
            "focus": "因果副詞子句連接詞",
            "type": "原因從屬連接詞 (because)",
            "translation": "抗議人士不希望興建新核電廠，因為他們擔心強烈地震可能會引發爐心熔毀。",
            "grammar": "前半句與後半句各自包含主詞與動詞，為兩個完整子句。後半句解釋抗議的原因，需填入引導原因副詞子句的連接詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 轉折副詞",
                "meaning": "此外、而且",
                "correct": false,
                "reason": "副詞無法直接連接兩個句子，且語意表示遞進而非原因。"
              },
              "B": {
                "pos": "conj. 連接詞片語",
                "meaning": "假設、假使",
                "correct": false,
                "reason": "assuming that 表假設條件，與此處既成擔憂的原因語境不合。"
              },
              "C": {
                "pos": "prep. 介系詞片語",
                "meaning": "由於、因為",
                "correct": false,
                "reason": "due to 是介系詞，後面只能接名詞或代名詞，不可直接接完整句子（they fear...）。"
              },
              "D": {
                "pos": "conj. 從屬連接詞",
                "meaning": "因為",
                "correct": true,
                "reason": "because 後接完整句子表達理由原因，完全合乎句法與文意。",
                "example": "He stayed home because he was feeling ill."
              }
            }
          }
        },
        {
          "id": 13,
          "range": "",
          "page": 1,
          "question": "Excuse me, I think I'm getting another call. Can I put you on ______ ?",
          "options": {
            "A": "hold",
            "B": "pause",
            "C": "silence",
            "D": "speaker"
          },
          "answer": "A",
          "explanation": {
            "focus": "商務電話通訊固定片語",
            "type": "put someone on hold",
            "translation": "不好意思，好像有插播進來。可以請您先稍候一下嗎？",
            "grammar": "電話通訊情境。請對方「稍等、先別掛斷」的商業英文標準習慣用語為 put someone on hold。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "等待、暫停狀態",
                "correct": true,
                "reason": "put on hold 為標準電話用語，專指保留通話請對方稍候。",
                "example": "Please hold the line; I will put you on hold for a moment."
              },
              "B": {
                "pos": "n./v. 暫停",
                "meaning": "暫停",
                "correct": false,
                "reason": "pause 用於音訊影片播放暫停，電話通訊不說 put on pause。"
              },
              "C": {
                "pos": "n. 沈默",
                "meaning": "無聲、沈默",
                "correct": false,
                "reason": "put on silence 語意怪異，手機靜音用 mute。"
              },
              "D": {
                "pos": "n. 擴音/揚聲器",
                "meaning": "擴音器",
                "correct": false,
                "reason": "放擴音是用 put you on speakerphone，單獨 speaker 語意不準確且與前文插播無關。"
              }
            }
          }
        },
        {
          "id": 16,
          "range": "",
          "page": 1,
          "question": "______ I don't believe in ghosts, I still think that old house on the hill is too creepy for me to enter.",
          "options": {
            "A": "Once",
            "B": "Even though",
            "C": "Now that",
            "D": "Whether"
          },
          "answer": "B",
          "explanation": {
            "focus": "讓步副詞子句連接詞",
            "type": "Even though（雖然、即使）",
            "translation": "即使我不信鬼神，我依然覺得山丘上的那棟老房子太令人毛骨悚然，不敢踏進去一步。",
            "grammar": "前半句「我不信鬼」與後半句「覺得可怕不敢進去」形成讓步矛盾關係，需選用引導讓步副詞子句的連接詞。",
            "options_analysis": {
              "A": {
                "pos": "conj. 連接詞",
                "meaning": "一旦...",
                "correct": false,
                "reason": "Once 引導時間條件子句，語意「一旦我不信鬼」前後邏輯不合。"
              },
              "B": {
                "pos": "conj. 連接詞片語",
                "meaning": "即使、雖然",
                "correct": true,
                "reason": "Even though 引導讓步子句，精確銜接「理性上不信鬼」但「感性上依舊害怕」的強烈對比。",
                "example": "Even though it was raining heavily, we went for a hike."
              },
              "C": {
                "pos": "conj. 連接詞片語",
                "meaning": "既然...",
                "correct": false,
                "reason": "Now that 表「既然/現在因為...」，後接已發生的新事實引發結果，不符此處語境。"
              },
              "D": {
                "pos": "conj. 連接詞",
                "meaning": "是否...",
                "correct": false,
                "reason": "Whether 引導名詞子句或 whether... or not，不能直接置於此作獨立讓步副詞子句。"
              }
            }
          }
        },
        {
          "id": 17,
          "range": "",
          "page": 2,
          "question": "It looks like a storm is ______ , so we'd better go inside.",
          "options": {
            "A": "brewing",
            "B": "traversing",
            "C": "disturbing",
            "D": "augmenting"
          },
          "answer": "A",
          "explanation": {
            "focus": "天候與事態醞釀之動詞搭配",
            "type": "現在進行式 (is brewing)",
            "translation": "看起來似乎有一場暴風雨正在醞釀形成，我們最好趕緊進屋去。",
            "grammar": "主詞 a storm 與動詞 brew 構成固定搭配，a storm is brewing 專指暴風雨正在凝聚醞釀，即將爆發。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞",
                "meaning": "醞釀、正在形成",
                "correct": true,
                "reason": "brew 原指釀造啤酒，引申為暴風雨或危機正在暗中醞釀，為多益高分聽讀常考地道搭配。",
                "example": "Trouble has been brewing in the department for months."
              },
              "B": {
                "pos": "v.-ing 現在分詞",
                "meaning": "橫越、穿越",
                "correct": false,
                "reason": "traverse 需接空間受詞（如 traversing the desert），不能用於形容暴風雨形成。"
              },
              "C": {
                "pos": "v.-ing 現在分詞",
                "meaning": "打擾、干擾",
                "correct": false,
                "reason": "disturbing 為及物動詞，意為打擾他人，不能用於風暴自己生成。"
              },
              "D": {
                "pos": "v.-ing 現在分詞",
                "meaning": "擴大、增加",
                "correct": false,
                "reason": "augment 指擴增薪資、軍力或預算，不用於天氣。"
              }
            }
          }
        },
        {
          "id": 19,
          "range": "",
          "page": 2,
          "question": "This division ______ unprofitable for six quarters. We have to reorganize.",
          "options": {
            "A": "has been",
            "B": "should have been",
            "C": "would be",
            "D": "is being"
          },
          "answer": "A",
          "explanation": {
            "focus": "現在完成式與持續性時間副詞",
            "type": "現在完成式 (has been)",
            "translation": "這個部門已經連續六個季度處於虧損狀態。我們必須進行重組組織。",
            "grammar": "時間副詞為 for six quarters（長達六季），表示從過去某個時間點持續到當前的狀態，限定使用現在完成式 has/have + p.p.；主詞 This division 為單數。",
            "options_analysis": {
              "A": {
                "pos": "v. 現在完成式",
                "meaning": "已經一直處於...",
                "correct": true,
                "reason": "單數主詞搭配 has been，精準呼應 for six quarters 的持續時間長度。",
                "example": "The company has been profitable for five consecutive years."
              },
              "B": {
                "pos": "v. 過去與假設情態",
                "meaning": "本來應該...",
                "correct": false,
                "reason": "should have been 表「本該如此卻未如此」，但事實上部門確實一直在虧損。"
              },
              "C": {
                "pos": "v. 過去條件式",
                "meaning": "將會是...",
                "correct": false,
                "reason": "would be 表示未來假設，不能與已發生的 for six quarters 連用。"
              },
              "D": {
                "pos": "v. 現在進行式",
                "meaning": "當前正在表現出...",
                "correct": false,
                "reason": "is being 表示短暫刻意之舉止（如 he is being silly），不與長期狀態 for six quarters 搭配。"
              }
            }
          }
        },
        {
          "id": 20,
          "range": "",
          "page": 2,
          "question": "I think you should accept the ______ and pay raise; after all, you earned them.",
          "options": {
            "A": "promoter",
            "B": "promotional",
            "C": "promote",
            "D": "promotion"
          },
          "answer": "D",
          "explanation": {
            "focus": "定冠詞後接名詞與對等結構",
            "type": "名詞 (the + promotion and pay raise)",
            "translation": "我認為你應該接受這次升遷與加薪；畢竟這是你應得的。",
            "grammar": "空格前有定冠詞 the，後有對等連接詞 and 及名詞片語 pay raise（加薪），空格必須填入與加薪相對等之單數或不可數名詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞（指人）",
                "meaning": "推廣者、主辦者",
                "correct": false,
                "reason": "指主辦展演推廣活動的人，職涯升級應使用 promotion。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "推銷宣傳的",
                "correct": false,
                "reason": "形容詞不能單獨受 the 修飾並與名詞 pay raise 並列。"
              },
              "C": {
                "pos": "v. 動詞原形",
                "meaning": "晉升、推廣",
                "correct": false,
                "reason": "動詞原形不能直接放在定冠詞 the 後面當受詞。"
              },
              "D": {
                "pos": "n. 抽象名詞",
                "meaning": "升遷、晉級",
                "correct": true,
                "reason": "promotion（升遷）完美契合 the promotion and pay raise（晉升與調薪）的職場核心搭配。",
                "example": "She received a promotion to senior manager."
              }
            }
          }
        },
        {
          "id": 24,
          "range": "",
          "page": 2,
          "question": "After ______ his newly given authority by being very rude to the other employees, Daniel has fallen from the boss's good graces.",
          "options": {
            "A": "abuses",
            "B": "abusing",
            "C": "abused",
            "D": "was abusing"
          },
          "answer": "B",
          "explanation": {
            "focus": "被動語態與時態判斷",
            "type": "動詞語態 (Passive Voice)",
            "translation": "完整句子意指：After abusing his newly given authority by being very rude to the other employees, Daniel has fallen from the boss's good graces.",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "abuses",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "abusing",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "abused",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "was abusing",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 26,
          "range": "",
          "page": 2,
          "question": "The guests availed ______ of the free champagne at the exhibition opening.",
          "options": {
            "A": "themselves",
            "B": "their",
            "C": "them",
            "D": "they"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：The guests availed themselves of the free champagne at the exhibition opening.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "themselves",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "their",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "them",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "they",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 27,
          "range": "",
          "page": 2,
          "question": "Because my professor understands that I have been very busy, he ______ extended the deadline on my research paper.",
          "options": {
            "A": "callously",
            "B": "mercifully",
            "C": "maliciously",
            "D": "frenetically"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Because my professor understands that I have been very busy, he mercifully extended the deadline on my research paper.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "callously",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "mercifully",
                "correct": true,
                "reason": "【正確】adv. 副詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "adv. 副詞",
                "meaning": "maliciously",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "frenetically",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 31,
          "range": "31 .34",
          "page": 3,
          "question": "We are looking for a male character actor to play the funny, but not ______ best friend of the leading role in our upcoming film.",
          "options": {
            "A": "fresh",
            "B": "female",
            "C": "attractive",
            "D": "geometric"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：We are looking for a male character actor to play the funny, but not attractive best friend of the leading role in our upcoming film.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "fresh",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "female",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "attractive",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "geometric",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 32,
          "range": "31",
          "page": 3,
          "question": "We want someone who looks friendly, but not ______ .",
          "options": {
            "A": "intimidating",
            "B": "intimidates",
            "C": "intimidated",
            "D": "intimidation"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：We want someone who looks friendly, but not intimidating .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "intimidating",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "intimidates",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "intimidated",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "intimidation",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 35,
          "range": "35",
          "page": 3,
          "question": "Normally I don't write in to advice columns, but lately I feel I have no ______ .",
          "options": {
            "A": "service",
            "B": "nothing",
            "C": "direction",
            "D": "possibility"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Normally I don't write in to advice columns, but lately I feel I have no direction .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "service",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "nothing",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "direction",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "possibility",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 43,
          "range": "43 ",
          "page": 4,
          "question": "",
          "options": {
            "A": "ghostly",
            "B": "musical",
            "C": "fictional",
            "D": "historical"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "ghostly",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "musical",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "fictional",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "historical",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 44,
          "range": "43 ",
          "page": 4,
          "question": "",
          "options": {
            "A": "belief",
            "B": "believed",
            "C": "believes",
            "D": "is believed"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "belief",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "believed",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "believes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "is believed",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 45,
          "range": "43 .46",
          "page": 4,
          "question": "",
          "options": {
            "A": "incorporated",
            "B": "incorporating",
            "C": "incorporation",
            "D": "to incorporate"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "incorporated",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "incorporating",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "incorporation",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "to incorporate",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 46,
          "range": "43.46",
          "page": 4,
          "question": "area which is now part ot Turkey Claus. Christian cultuire well-behaved children on Christmas Eve.",
          "options": {
            "A": "Saint Nicholas was born in the village ot Palara, an",
            "B": "This ovonlually ovolvod Into the anglicized Sann",
            "C": "Santa Claus is a logendary ligure of Western",
            "D": "Accordingto tradition,SantaClausbringsgifts to"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：area which is now part ot Turkey Claus. Christian cultuire well-behaved children on Christmas Eve.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Saint Nicholas was born in the village ot Palara, an",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "This ovonlually ovolvod Into the anglicized Sann",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Santa Claus is a logendary ligure of Western",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Accordingto tradition,SantaClausbringsgifts to",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 47,
          "range": "",
          "page": 5,
          "question": "Doris May (18:56 Saturday,Aprll 6) I need some advice on managing my team. No matter what project I give them, they seem to have a lot of difficulty finishing It on time. What can 1 do? Susan Reynolds (10:01 Sunday,Aprill 7) It sounds like you're not giving them enough structure. Break the project Into smaller pleces. Mike Hays (13:15 Sunday, April 7) I agree with Susan. I'd also add that you should make sure you avoid leaving larger tasks towards the end. Your team will run out of time. Doris May (14:07 Sunday, April 7) @Mike I hear you. How do I set hard limits without babysitting them? Patricia Wells (18:54 Sunday, April 7) @Doris Some employees will underperform no matter what. I would suggest praising/rewarding the most productive team member. Soon others will follow suit. Doris May (19:17 Sunday, April 7) @Patricia Great,thanks! Send Mrs. Kendra Lipnisky's Banana Walnut Muffins 2 eggs 1/2 cup of butter,softened 1and1/2cupsofbrownsugar 4 tablespoons of buttermilk -1 teaspoon of baking soda 1 teaspoon of vanilla extract 1 and 1/2 cups of flour (preferably sifted) .2bananas,mashed 1 cup of walnuts or any other nut you like (break into larger chunks) Baking Directions 2. Grease muffin tin. 4. Add buttermilk, blend, and then mix in the eggs followed by the mashed banana. 5. Add flour and baking soda, stir to combine. 8. Stir in walnut chunks. I 7.Pour batter into muffin Un until each mold is about 213 full. 8. Bake at 350'F for 20-25 minutes, or until lops are brown. 9. Additionally, a toothpick may be Inserted into the center of the muffin as a test. If it comes out cleanly. then the muffins are done. Nutritional info (per muffin): Calorles-238; Fat-11g: Carbs-32g: Fiber-1g: Proteln-3g",
          "options": {
            "A": "Preheat oven to 350*F (175°C).",
            "B": "Cream the butter and sugar."
          },
          "answer": "B",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：Doris May (18:56 Saturday,Aprll 6) I need some advice on managing my team. No matter what project I give them, they seem to have a lot of difficulty finishing It on time. What can 1 do? Susan Reynolds (10:01 Sunday,Aprill 7) It sounds like you're not giving them enough structure. Break the project Into smaller pleces. Mike Hays (13:15 Sunday, April 7) I agree with Susan. I'd also add that you should make sure you avoid leaving larger tasks towards the end. Your team will run out of time. Doris May (14:07 Sunday, April 7) @Mike I hear you. How do I set hard limits without babysitting them? Patricia Wells (18:54 Sunday, April 7) @Doris Some employees will underperform no matter what. I would suggest praising/rewarding the most productive team member. Soon others will follow suit. Doris May (19:17 Sunday, April 7) @Patricia Great,thanks! Send Mrs. Kendra Lipnisky's Banana Walnut Muffins 2 eggs 1/2 cup of butter,softened 1and1/2cupsofbrownsugar 4 tablespoons of buttermilk -1 teaspoon of baking soda 1 teaspoon of vanilla extract 1 and 1/2 cups of flour (preferably sifted) .2bananas,mashed 1 cup of walnuts or any other nut you like (break into larger chunks) Baking Directions 2. Grease muffin tin. 4. Add buttermilk, blend, and then mix in the eggs followed by the mashed banana. 5. Add flour and baking soda, stir to combine. 8. Stir in walnut chunks. I 7.Pour batter into muffin Un until each mold is about 213 full. 8. Bake at 350'F for 20-25 minutes, or until lops are brown. 9. Additionally, a toothpick may be Inserted into the center of the muffin as a test. If it comes out cleanly. then the muffins are done. Nutritional info (per muffin): Calorles-238; Fat-11g: Carbs-32g: Fiber-1g: Proteln-3g",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Preheat oven to 350*F (175°C).",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Cream the butter and sugar.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 48,
          "range": "47.48",
          "page": 5,
          "question": "On April 7 at 14:07, what does Doris May mean when she writes, \"I hear you\"?",
          "options": {
            "A": "She received a voice mail",
            "B": "She understands.",
            "C": "She disagrees",
            "D": "She wants them to explain further"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：On April 7 at 14:07, what does Doris May mean when she writes, \"I hear you\"?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She received a voice mail",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She understands.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She disagrees",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "She wants them to explain further",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 49,
          "range": "49 ",
          "page": 5,
          "question": "What is one method the recipe does NOT suggest could be used to check if the muffins are done?",
          "options": {
            "A": "Considering the total baking time",
            "B": "Poking the muffin with a toothpick",
            "C": "Looking at the color of the muffin top",
            "D": "Touching the muffin to see if it's soft"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：What is one method the recipe does NOT suggest could be used to check if the muffins are done?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Considering the total baking time",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Poking the muffin with a toothpick",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Looking at the color of the muffin top",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Touching the muffin to see if it's soft",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 50,
          "range": "49",
          "page": 5,
          "question": "Which of the following ingredient substitutions would NOT ruin the recipe?",
          "options": {
            "A": "Adding salt instead of sugar",
            "B": "Adding olive oil instead of butter",
            "C": "Adding icing sugar instead offlour",
            "D": "Addingpeanutsinsteadofwalnuts"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Which of the following ingredient substitutions would NOT ruin the recipe?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Adding salt instead of sugar",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "Adding olive oil instead of butter",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Adding icing sugar instead offlour",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Addingpeanutsinsteadofwalnuts",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 51,
          "range": "",
          "page": 6,
          "question": "Seminars on Small Business Available at Bowmonte City Hall Originally Posted: 11/15 11:54:44 PM MDT I Updated: 5 Hours Ago Tomomow marks the first anniversary of the Bowmonte City Business Association's continuing series of free small business semlnars.The city is pleased to announce the retum of its series of workshops aimed at sman business owners or anyone who wishes to start their own company in Bowmonte. The workshops will occur on the thlrd Weanesday of each month. Tme first will be hosted tomorrow on Nov. 21 at city hall and is scheduled to feature numerous success stones about local businesses, as told by their founders, managers. and innovating employees. Each free session will begin at 7 p.m.and go until 9 p.m. The sessions are generated in.collaboration with the Bowmonte Financial Expansion Partnership and 'Business Besties, a networking group based in Bowmonte. Can't make it in person? This year. we are also pleased to offer the webinar option. We will be streaming the seminars with an integrated chat function where viewers may post their questions during the Q&A section of the seminar in real time. To join, simply visit: bowmonteaityall.com/ive Unlike last year,this wave of seminars wil be recorded, so you can check out our online database and review previous seminars at: bowmontecityhau.com/seminars/archives Registration is not required. Carmen's Cupcakes Order Form MDC - 2085 Order Number Wrigh! Fielder Full Name: Last name First name 1992 16 11 Birth Date: Day Year Month E-mail:*f.wnight@crestwalkfoundation.com Mobile/PhoneNumber.01-555-222-5258 Cupcake Flavors (2 dozen minimum) Vanilla 10 Chocolate Coconut Carrot Cake Peanut Butter Icing (Optional): 12 Peanut Butter Cream Cheese Dark Chocolate Milk Chocolate Strawbey Mint 2016 30 PickupDate/mme:10 Year Day Month 30 11 Minutes JNOH Special Detalls: Though peanuts are fine.please onsure that no aimonds or cashews are added lo the cupcakes Note: Cancellation of orders withln 48 hours of the pickup dale wll still result In the customer being chargod the full amount.",
          "options": {
            "A": "M. I P.M."
          },
          "answer": "A",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：Seminars on Small Business Available at Bowmonte City Hall Originally Posted: 11/15 11:54:44 PM MDT I Updated: 5 Hours Ago Tomomow marks the first anniversary of the Bowmonte City Business Association's continuing series of free small business semlnars.The city is pleased to announce the retum of its series of workshops aimed at sman business owners or anyone who wishes to start their own company in Bowmonte. The workshops will occur on the thlrd Weanesday of each month. Tme first will be hosted tomorrow on Nov. 21 at city hall and is scheduled to feature numerous success stones about local businesses, as told by their founders, managers. and innovating employees. Each free session will begin at 7 p.m.and go until 9 p.m. The sessions are generated in.collaboration with the Bowmonte Financial Expansion Partnership and 'Business Besties, a networking group based in Bowmonte. Can't make it in person? This year. we are also pleased to offer the webinar option. We will be streaming the seminars with an integrated chat function where viewers may post their questions during the Q&A section of the seminar in real time. To join, simply visit: bowmonteaityall.com/ive Unlike last year,this wave of seminars wil be recorded, so you can check out our online database and review previous seminars at: bowmontecityhau.com/seminars/archives Registration is not required. Carmen's Cupcakes Order Form MDC - 2085 Order Number Wrigh! Fielder Full Name: Last name First name 1992 16 11 Birth Date: Day Year Month E-mail:*f.wnight@crestwalkfoundation.com Mobile/PhoneNumber.01-555-222-5258 Cupcake Flavors (2 dozen minimum) Vanilla 10 Chocolate Coconut Carrot Cake Peanut Butter Icing (Optional): 12 Peanut Butter Cream Cheese Dark Chocolate Milk Chocolate Strawbey Mint 2016 30 PickupDate/mme:10 Year Day Month 30 11 Minutes JNOH Special Detalls: Though peanuts are fine.please onsure that no aimonds or cashews are added lo the cupcakes Note: Cancellation of orders withln 48 hours of the pickup dale wll still result In the customer being chargod the full amount.",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "M. I P.M.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 54,
          "range": "53",
          "page": 6,
          "question": "What will Fielder likely haveto dobefore his order will be filled?",
          "options": {
            "A": "He'll have to buy more cupcakes.",
            "B": "He'll have to change the icing types.",
            "C": "He'll have to change the pickup time.",
            "D": "He'll have to provide more personal information."
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What will Fielder likely haveto dobefore his order will be filled?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll have to buy more cupcakes.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll have to change the icing types.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll have to change the pickup time.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll have to provide more personal information.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 55,
          "range": "",
          "page": 7,
          "question": "The octopus (in any form of subspecies) is a fasdinating creature. 1ll's common knowledge thal it has elghttentacles-hence the octo'prefix in its name but lt also has three heans. a beak, venom, Ink which it can excrele for defense, and no bones. Being boneless allows the octopus to squeeze inlo incredbly smat spaces. 2)-- he octopus can also propel itselt by taking In and expelling water from its body. ll can even regenerate lost limbs. But pehaps most lmpressively. the octopus possesses far and away the mosl rapid physical camouflage ability of any animal ln the worid.-f3j The .octopus is also believed.to be the most intelligent of all Invertebrate creatures. demonstrating shon-term and long:tem memory as well as complex directional and problem solving skills. Many who study octopuses assert that they also play,use tools. leam lessons from experience. and are capable of distinguishing belween people. Octopuses even show preference, swimming up to people they like and ★,-th',uop Kon aidoad e jajem soniur Buninbs Date (m/d/y):June 16.2016 Cass:Entrepreneurship101 [11213 Why? Although I learned a lot, I feel that I could have studied more in the amount of time given, or the same amount in less time. 2. How wouid you rate your professor? 1234 Why? Though knowledgeable, he spoke too quietly, and sometimes he was late to dlass. The hands-on work where we were given problems to solve in the field was very informative. 4. What do you feel needs to be improved? Some of the lectures were based only on theory and so did not seem relevant lo the real wond. As a result, I had trouble rermembening what was taught. 5.Additional comments or suggestions? r'd really prefer fewer leclures and less theory-based reading. If the course could have more hands-on prolects, that would be great.",
          "options": {
            "A": "How would you rate this class?",
            "B": "What did you like best about the class?"
          },
          "answer": "A",
          "explanation": {
            "focus": "被動語態與時態判斷",
            "type": "動詞語態 (Passive Voice)",
            "translation": "完整句子意指：The octopus (in any form of subspecies) is a fasdinating creature. 1ll's common knowledge thal it has elghttentacles-hence the octo'prefix in its name but lt also has three heans. a beak, venom, Ink which it can excrele for defense, and no bones. Being boneless allows the octopus to squeeze inlo incredbly smat spaces. 2)-- he octopus can also propel itselt by taking In and expelling water from its body. ll can even regenerate lost limbs. But pehaps most lmpressively. the octopus possesses far and away the mosl rapid physical camouflage ability of any animal ln the worid.-f3j The .octopus is also believed.to be the most intelligent of all Invertebrate creatures. demonstrating shon-term and long:tem memory as well as complex directional and problem solving skills. Many who study octopuses assert that they also play,use tools. leam lessons from experience. and are capable of distinguishing belween people. Octopuses even show preference, swimming up to people they like and ★,-th',uop Kon aidoad e jajem soniur Buninbs Date (m/d/y):June 16.2016 Cass:Entrepreneurship101 [11213 Why? Although I learned a lot, I feel that I could have studied more in the amount of time given, or the same amount in less time. 2. How wouid you rate your professor? 1234 Why? Though knowledgeable, he spoke too quietly, and sometimes he was late to dlass. The hands-on work where we were given problems to solve in the field was very informative. 4. What do you feel needs to be improved? Some of the lectures were based only on theory and so did not seem relevant lo the real wond. As a result, I had trouble rermembening what was taught. 5.Additional comments or suggestions? r'd really prefer fewer leclures and less theory-based reading. If the course could have more hands-on prolects, that would be great.",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How would you rate this class?",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "What did you like best about the class?",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 58,
          "range": "58 ",
          "page": 7,
          "question": "What is most likely to be the student's learning style?",
          "options": {
            "A": "Visual",
            "B": "Kinesthetic",
            "C": "Auditory",
            "D": "Negative"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：What is most likely to be the student's learning style?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "Visual",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "Kinesthetic",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Auditory",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "Negative",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 59,
          "range": "58 ",
          "page": 7,
          "question": "How does the student seem to feel about theory- based learning?",
          "options": {
            "A": "It has little practical application.",
            "B": "Being abstract, it is easy to remember.",
            "C": "It is necessary for learning real-world skills",
            "D": "None of the above"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：How does the student seem to feel about theory- based learning?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It has little practical application.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Being abstract, it is easy to remember.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is necessary for learning real-world skills",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "None of the above",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 60,
          "range": "58 ",
          "page": 7,
          "question": "What best summarizes the student's feelings towards the class? sometimes late Wasto ot tirne",
          "options": {
            "A": "Mostly satlsfled but still critical",
            "B": "Mostly unsatistied but still hopeful",
            "C": "Extremaly angry because the piofessorwas",
            "D": "Completely unsatistied because the class was a"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What best summarizes the student's feelings towards the class? sometimes late Wasto ot tirne",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "Mostly satlsfled but still critical",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "Mostly unsatistied but still hopeful",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Extremaly angry because the piofessorwas",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Completely unsatistied because the class was a",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 62,
          "range": "61.64",
          "page": 8,
          "question": "According to this article.what is something Cunha's opponents accuse him of?",
          "options": {
            "A": "Being a chauvinist",
            "B": "Unethically taking advantage of a situation",
            "C": "Movingfunds to fill deficits",
            "D": "Winningthe presidency illegally"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：According to this article.what is something Cunha's opponents accuse him of?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "Being a chauvinist",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "Unethically taking advantage of a situation",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Movingfunds to fill deficits",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "Winningthe presidency illegally",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 63,
          "range": "61.64",
          "page": 8,
          "question": "According to this article, what can be assumed about Rousseff? gender. reasons.",
          "options": {
            "A": "She is currently unpopular in her own country",
            "B": "She has definitely been proven guilty of corruption",
            "C": "She has been unjustly removed because of her",
            "D": "She has been ousted by the public for political"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：According to this article, what can be assumed about Rousseff? gender. reasons.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She is currently unpopular in her own country",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "She has definitely been proven guilty of corruption",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "She has been unjustly removed because of her",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "She has been ousted by the public for political",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 65,
          "range": "65 ",
          "page": 8,
          "question": "Who or what most likely are the speakers?",
          "options": {
            "A": "Office workers",
            "B": "University students",
            "C": "High school students",
            "D": "Members of a family"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Who or what most likely are the speakers?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Office workers",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "University students",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "High school students",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "Members of a family",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 67,
          "range": "65. 67",
          "page": 8,
          "question": "At 10:39 p.m., what does M.Borton lmply when he wrltes, \"Dldn't you see how he reacted when Alex mlssed hls deadline\"?",
          "options": {
            "A": "Pater gol angry at an enmployee.",
            "B": "Chiang doasn't pay attention at work.",
            "C": "M.Borton wants to know how Peterreacted",
            "D": "M. Borton wasn't sure ll his colleagues were at work."
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：At 10:39 p.m., what does M.Borton lmply when he wrltes, \"Dldn't you see how he reacted when Alex mlssed hls deadline\"?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Pater gol angry at an enmployee.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Chiang doasn't pay attention at work.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "M.Borton wants to know how Peterreacted",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "M. Borton wasn't sure ll his colleagues were at work.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 71,
          "range": "68 ",
          "page": 9,
          "question": "What can be assumed about the location of the retreat?",
          "options": {
            "A": "It is accessible by car.",
            "B": "It is in a desert.",
            "C": "It is on an island.",
            "D": "It is in the mountains."
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What can be assumed about the location of the retreat?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is accessible by car.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is in a desert.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is on an island.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is in the mountains.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 72,
          "range": "72 ",
          "page": 10,
          "question": "Where did Brian leave his note?",
          "options": {
            "A": "In his office",
            "B": "On the recycling bin",
            "C": "Ontheperson'sdoor",
            "D": "On top of the garbage"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Where did Brian leave his note?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "In his office",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "On the recycling bin",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "Ontheperson'sdoor",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "On top of the garbage",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 73,
          "range": "72 ",
          "page": 10,
          "question": "How does Brian intend to find out who has been throwing garbage in the bin if he doesn't know who they are? personal information.",
          "options": {
            "A": "He'il wait bythe bin",
            "B": "He'll ask the building's owners.",
            "C": "He'll consult his hidden camera.",
            "D": "He'll look through the garbage to discover their"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：How does Brian intend to find out who has been throwing garbage in the bin if he doesn't know who they are? personal information.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'il wait bythe bin",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll ask the building's owners.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll consult his hidden camera.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He'll look through the garbage to discover their",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 74,
          "range": "72 ",
          "page": 10,
          "question": "What does Brian think is the most irritating detail about this situation?",
          "options": {
            "A": "Thathe has to write rude notes",
            "B": "That he has to sort through garbage",
            "C": "That he may have to get someone evicted",
            "D": "That the person doesn't care about the environment"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What does Brian think is the most irritating detail about this situation?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Thathe has to write rude notes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "That he has to sort through garbage",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "That he may have to get someone evicted",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "That the person doesn't care about the environment",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 75,
          "range": "72 ",
          "page": 10,
          "question": "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Every time you do this, it is my responsibility to go through the recycling and sort it.\"",
          "options": {
            "A": "[1]",
            "B": "[2]",
            "C": "[3]",
            "D": "[4]"
          },
          "answer": "A",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Every time you do this, it is my responsibility to go through the recycling and sort it.\"",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[1]",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[2]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[3]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[4]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              }
            }
          }
        },
        {
          "id": 78,
          "range": "76.80",
          "page": 11,
          "question": "What wasKal McKay's overall impression of the movie?",
          "options": {
            "A": "Well done,despite its flaws",
            "B": "Not as good as others in the same genre",
            "C": "Too sarcastic for the story",
            "D": "Overly serious for a superhero movie"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What wasKal McKay's overall impression of the movie?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Well done,despite its flaws",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Not as good as others in the same genre",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Too sarcastic for the story",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Overly serious for a superhero movie",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 80,
          "range": "76.80",
          "page": 11,
          "question": "What can we infer from the passages? Batman's persona",
          "options": {
            "A": "The reviewers both hate comic books",
            "B": "The reviewers write for different mediums",
            "C": "The reviewers likely write for the news section",
            "D": "The reviewers share the same opinion about"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What can we infer from the passages? Batman's persona",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The reviewers both hate comic books",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The reviewers write for different mediums",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "The reviewers likely write for the news section",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The reviewers share the same opinion about",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 81,
          "range": "81 ",
          "page": 12,
          "question": "Whydid Katelynwant ProfessorBloomsbury asher secondary advisor? her thesis.",
          "options": {
            "A": "The professorwil bringa differentperspective",
            "B": "The professor's reputation would increase interest in",
            "C": "The professor could help her analyze data",
            "D": "Ail of the above"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Whydid Katelynwant ProfessorBloomsbury asher secondary advisor? her thesis.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "The professorwil bringa differentperspective",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The professor's reputation would increase interest in",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The professor could help her analyze data",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Ail of the above",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 84,
          "range": "81 ",
          "page": 12,
          "question": "Which of the following substitutions js most synonymous with\"to my satisfaction\"in this context? discipline)",
          "options": {
            "A": "If you can explain (and I am gleeful)",
            "B": "If you can explain (and I am flattered)",
            "C": "If you can explain (and I am convinced)",
            "D": "If you can explain (using the rhetoric proper to my"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Which of the following substitutions js most synonymous with\"to my satisfaction\"in this context? discipline)",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "If you can explain (and I am gleeful)",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "If you can explain (and I am flattered)",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "If you can explain (and I am convinced)",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "If you can explain (using the rhetoric proper to my",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 92,
          "range": "91 ",
          "page": 14,
          "question": "Which user likely attends Barkley High School?",
          "options": {
            "A": "ILoveCats99",
            "B": "KimmyStardust29",
            "C": "StevenHasPowers55",
            "D": "JennyLovesSwimming11"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Which user likely attends Barkley High School?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "ILoveCats99",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "KimmyStardust29",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "StevenHasPowers55",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "JennyLovesSwimming11",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 94,
          "range": "91 ",
          "page": 14,
          "question": "According to both users in the \"Against it\" section, what is really to blame for the obesity of chidren?",
          "options": {
            "A": "Changing biology",
            "B": "Sugarandtransfat",
            "C": "lrresponsibleparents",
            "D": "A broken education system"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：According to both users in the \"Against it\" section, what is really to blame for the obesity of chidren?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Changing biology",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Sugarandtransfat",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "lrresponsibleparents",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "A broken education system",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 95,
          "range": "91",
          "page": 14,
          "question": "Which of the following statements best encapsulates the argument made by the user JennyLovesSwimming11? more irresponsible. learned responsibility does. policies can be manipulated",
          "options": {
            "A": "Obesity is an unstoppable generational problem.",
            "B": "Americans will not admit that they are becoming",
            "C": "Restriction doesn't stop undesirable behavior,",
            "D": "By changing the parental zeitgeist, government"
          },
          "answer": "C",
          "explanation": {
            "focus": "被動語態與時態判斷",
            "type": "動詞語態 (Passive Voice)",
            "translation": "完整句子意指：Which of the following statements best encapsulates the argument made by the user JennyLovesSwimming11? more irresponsible. learned responsibility does. policies can be manipulated",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Obesity is an unstoppable generational problem.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "Americans will not admit that they are becoming",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Restriction doesn't stop undesirable behavior,",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "By changing the parental zeitgeist, government",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        }
      ]
    },
    {
      "test_id": "多益2",
      "title": "多益模擬測驗二 (Test 2)",
      "total_questions": 40,
      "questions": [
        {
          "id": 1,
          "range": "",
          "page": 1,
          "question": "We are going to ______ in the morning to go over our strategy for the following days.",
          "options": {
            "A": "engage",
            "B": "gather",
            "C": "explain",
            "D": "wait"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：We are going to gather in the morning to go over our strategy for the following days.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "engage",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "gather",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "explain",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "wait",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 2,
          "range": "",
          "page": 1,
          "question": "The man was so ______ in the television program that he didn't hear someone call his name.",
          "options": {
            "A": "relaxed",
            "B": "engaged",
            "C": "engaging",
            "D": "engagement"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：The man was so engaged in the television program that he didn't hear someone call his name.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "relaxed",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "engaged",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "engaging",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "engagement",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 3,
          "range": "",
          "page": 1,
          "question": "These items are really ______ in price and quality, so it's a matter of what your own preference is in color and weight.",
          "options": {
            "A": "compare",
            "B": "comparing",
            "C": "comparison",
            "D": "comparable"
          },
          "answer": "D",
          "explanation": {
            "focus": "be 動詞後接形容詞作表語",
            "type": "be comparable in...",
            "translation": "這些產品在價格和品質上其實不相上下，因此完全取決於您個人對顏色和重量的偏好。",
            "grammar": "空格位於 are really ______ in price and quality 之中，be 動詞後需要形容詞充當表語。comparable in 表示在某方面具有可比性、不相上下。",
            "options_analysis": {
              "A": {
                "pos": "v. 動詞原形",
                "meaning": "比較",
                "correct": false,
                "reason": "原形動詞不能直接接在 are 後面充當表語。"
              },
              "B": {
                "pos": "v.-ing 現在分詞",
                "meaning": "正在比較的",
                "correct": false,
                "reason": "comparing 表主動進行比較動作，產品無法主動比較自己。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "比較",
                "correct": false,
                "reason": "名詞 comparison 語法不合，若用名詞應為 a comparison。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "可相比的、相差無幾的",
                "correct": true,
                "reason": "be comparable in 是多益商務高頻片語，表示「在品質、性能或價格上相仿/旗鼓相當」。",
                "example": "The two models are comparable in performance."
              }
            }
          }
        },
        {
          "id": 4,
          "range": "",
          "page": 1,
          "question": "______ as Nelson was about to walk out the door, his mobile phone rang.",
          "options": {
            "A": "Just",
            "B": "Away",
            "C": "Much",
            "D": "Around"
          },
          "answer": "A",
          "explanation": {
            "focus": "時間副詞片語 (Just as)",
            "type": "副詞修飾從屬連接詞 as",
            "translation": "正當尼爾森準備走出大門時，他的手機響了起來。",
            "grammar": "as Nelson was about to walk out the door 為時間副詞子句。需填入副詞與 as 構成「就在...的當下」之強調片語。",
            "options_analysis": {
              "A": {
                "pos": "adv. 時間副詞",
                "meaning": "正好、恰好",
                "correct": true,
                "reason": "Just as... 為固定時間副詞片語，表達兩動作同時瞬間發生（正當...時）。",
                "example": "Just as I was leaving the house, it started to rain."
              },
              "B": {
                "pos": "adv. 空間副詞",
                "meaning": "離開、遠離",
                "correct": false,
                "reason": "Away as 無此用法，語法錯誤。"
              },
              "C": {
                "pos": "adv. 程度副詞",
                "meaning": "非常、很多",
                "correct": false,
                "reason": "Much as 意思是「雖然、儘管」（讓步語氣），與此處手機響起的時間點完全不合。"
              },
              "D": {
                "pos": "prep./adv. 介系詞/副詞",
                "meaning": "圍繞、大約",
                "correct": false,
                "reason": "Around as 無此句型結構。"
              }
            }
          }
        },
        {
          "id": 5,
          "range": "",
          "page": 1,
          "question": "You should be able to pick up your driver's license about a week after you file for it with all the ______ information.",
          "options": {
            "A": "steady",
            "B": "asking",
            "C": "requisite",
            "D": "desperate"
          },
          "answer": "C",
          "explanation": {
            "focus": "必備資訊之形容詞搭配",
            "type": "形容詞修飾不可數名詞 information",
            "translation": "在您備齊所有必備資訊提出申請後約一週，應該就能領取駕照了。",
            "grammar": "空格位於 the 與名詞 information 之間，需選擇修飾申請必要條件的形容詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "穩定的、持續的",
                "correct": false,
                "reason": "steady information（穩定資訊）語意不合邏輯。"
              },
              "B": {
                "pos": "v.-ing 現在分詞",
                "meaning": "詢問的",
                "correct": false,
                "reason": "asking information 搭配錯誤，申請需要的是必備規定資料。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "必要的、必不可少的 (requisite)",
                "correct": true,
                "reason": "requisite information 為正式公文與手續專用詞，表示「規定要求的必需資料」。",
                "example": "Applicants must possess the requisite qualifications."
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "絕望的、拼命的",
                "correct": false,
                "reason": "desperate 表絕望失控，不能形容證照申請資料。"
              }
            }
          }
        },
        {
          "id": 6,
          "range": "",
          "page": 1,
          "question": "Could you help me ______ how much paint I will need for three rooms in my house?",
          "options": {
            "A": "determined",
            "B": "determining",
            "C": "determine",
            "D": "determination"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞 help 之受詞補語",
            "type": "help + 受詞 + (to) 原形動詞",
            "translation": "你可以幫我評估一下，我房子裡的三個房間需要多少油漆嗎？",
            "grammar": "句型為 Could you help me ______ ...？在 help 後面，接原形動詞或帶 to 不定詞均可（help someone [to] determine）。",
            "options_analysis": {
              "A": {
                "pos": "p.p./v. 過去式/分詞",
                "meaning": "決定了、堅定的",
                "correct": false,
                "reason": "help 後不可接過去式或過去分詞。"
              },
              "B": {
                "pos": "v.-ing 現在分詞",
                "meaning": "決定著",
                "correct": false,
                "reason": "help 後不可直接接動名詞/分詞。"
              },
              "C": {
                "pos": "v. 動詞原形",
                "meaning": "查明、測定、評算",
                "correct": true,
                "reason": "符合 help me (to) determine 的原形動詞補語文法規則。",
                "example": "Can you help me solve this math problem?"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "決心、測定",
                "correct": false,
                "reason": "名詞不可作為受詞補語接名詞子句 how much paint..."
              }
            }
          }
        },
        {
          "id": 7,
          "range": "",
          "page": 1,
          "question": "Did you say you have a ______ in mind for overcoming recent customer dissatisfaction?",
          "options": {
            "A": "strata",
            "B": "strategy",
            "C": "strategic",
            "D": "strategize"
          },
          "answer": "B",
          "explanation": {
            "focus": "名詞詞性與商業策略搭配",
            "type": "have a + 單數名詞 + in mind",
            "translation": "你剛才有說你心中已有解決近期顧客不滿的具體策略嗎？",
            "grammar": "句型為 have a ______ in mind for...。不定冠詞 a 後面必須填入單數可數名詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 複數名詞",
                "meaning": "階層、地層 (stratum 的複數)",
                "correct": false,
                "reason": "strata 是複數形態，前面不能加單數冠詞 a。"
              },
              "B": {
                "pos": "n. 單數可數名詞",
                "meaning": "策略、對策",
                "correct": true,
                "reason": "strategy 為單數名詞，have a strategy in mind for... 表「針對某問題心中有因應策略」。",
                "example": "We need to formulate a new marketing strategy."
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "戰略上的、策略性的",
                "correct": false,
                "reason": "形容詞不可在 a 後面單獨作為受詞。"
              },
              "D": {
                "pos": "v. 動詞原形",
                "meaning": "制定策略",
                "correct": false,
                "reason": "動詞不能接在冠詞 a 之後。"
              }
            }
          }
        },
        {
          "id": 8,
          "range": "",
          "page": 1,
          "question": "I'm afraid that kind of behavior is ______ unacceptable.",
          "options": {
            "A": "simply",
            "B": "frantically",
            "C": "deliberately",
            "D": "courageously"
          },
          "answer": "A",
          "explanation": {
            "focus": "程度副詞修飾形容詞",
            "type": "副詞修飾形容詞 (simply unacceptable)",
            "translation": "恐怕那樣的行為根本是完全令人無法容忍的。",
            "grammar": "空格修飾形容詞 unacceptable（不可接受的）。simply 在口語與商務溝通中作強調副詞，表示「根本、簡直」。",
            "options_analysis": {
              "A": {
                "pos": "adv. 程度副詞",
                "meaning": "簡直、根本",
                "correct": true,
                "reason": "simply unacceptable 為常見商務強烈譴責語境搭配，表示「毫無妥協空間、絕不能接受」。",
                "example": "Such delays are simply unacceptable to our clients."
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "發狂地、手忙腳亂地",
                "correct": false,
                "reason": "形容人的神態混亂，不修飾道德行為標準。"
              },
              "C": {
                "pos": "adv. 副詞",
                "meaning": "故意地、蓄意地",
                "correct": false,
                "reason": "deliberately 用於修飾主動動作（如 deliberately broke it），不直接修飾形容詞 unacceptable。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "勇敢地",
                "correct": false,
                "reason": "語意褒義，與 unacceptable 矛盾。"
              }
            }
          }
        },
        {
          "id": 9,
          "range": "",
          "page": 1,
          "question": "If we ______ all that supporting sales data, the client might have otherwise backed out of the deal.",
          "options": {
            "A": "wasn't provided",
            "B": "wouldn't provide",
            "C": "don't provide",
            "D": "hadn't provided"
          },
          "answer": "D",
          "explanation": {
            "focus": "與過去事實相反之假設語氣",
            "type": "與過去相反虛擬式 (If + had + p.p.)",
            "translation": "如果我們當初沒有提供所有那些支持性的銷售數據，客戶原本很可能會退出這筆交易。",
            "grammar": "主要子句為 might have + p.p.（might have backed out），明確指出此為「與過去事實相反」的假設語氣。If 條件子句動詞必須使用過去完成式 had + p.p.。",
            "options_analysis": {
              "A": {
                "pos": "v. 過去被動態",
                "meaning": "沒被提供",
                "correct": false,
                "reason": "主詞是 we（我們），動作是主動提供而非被提供，且時態非過去完成式。"
              },
              "B": {
                "pos": "v. 過去條件式",
                "meaning": "將不會提供",
                "correct": false,
                "reason": "If 條件子句內不可直接使用情態助動詞 would。"
              },
              "C": {
                "pos": "v. 現在式否定",
                "meaning": "不提供",
                "correct": false,
                "reason": "現在式與過去虛擬語氣主要子句 might have backed out 嚴重時態脫節。"
              },
              "D": {
                "pos": "v. 過去完成式否定",
                "meaning": "若當初沒有提供",
                "correct": true,
                "reason": "hadn't provided 符合與過去相反的虛擬條件子句時態結構（If + had + p.p.）。",
                "example": "If she had left earlier, she would have caught the train."
              }
            }
          }
        },
        {
          "id": 10,
          "range": "",
          "page": 1,
          "question": "Only in ______ circumstances can employees at the company take a leave of more than two weeks.",
          "options": {
            "A": "except",
            "B": "exception",
            "C": "exceptional",
            "D": "exceptionally"
          },
          "answer": "C",
          "explanation": {
            "focus": "形容詞修飾複數名詞",
            "type": "exceptional circumstances（特殊情況）",
            "translation": "只有在特殊例外情況下，本公司員工才能請假超過兩週。",
            "grammar": "空格位於介系詞 in 與複數名詞 circumstances 之間，需填入修飾名詞的形容詞。exceptional circumstances 為商業與法規之固定專有片語。",
            "options_analysis": {
              "A": {
                "pos": "prep./v. 介系詞/及物動詞",
                "meaning": "除...之外",
                "correct": false,
                "reason": "介系詞不能直接修飾後面的名詞 circumstances。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "例外",
                "correct": false,
                "reason": "名詞不可直接作定語修飾複數名詞 circumstances。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "非凡的、例外的 (exceptional)",
                "correct": true,
                "reason": "exceptional circumstances 為法律及公司制度之標準法規用語，指「極為罕見之特殊事由」。",
                "example": "Extensions will be granted only in exceptional circumstances."
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "格外地、極端地",
                "correct": false,
                "reason": "副詞不能直接修飾名詞 circumstances。"
              }
            }
          }
        },
        {
          "id": 11,
          "range": "",
          "page": 1,
          "question": "I'm in need of a(n) ______ contractor who can repair our leaking pool in the backyard.",
          "options": {
            "A": "arguable",
            "B": "reputable",
            "C": "opposable",
            "D": "perceivable"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：I'm in need of a(n) reputable contractor who can repair our leaking pool in the backyard.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "arguable",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "reputable",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "opposable",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "perceivable",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 13,
          "range": "",
          "page": 1,
          "question": "The store will be closing in 15 minutes. Please ______ the items you wish to purchase and make your way to the cashier.",
          "options": {
            "A": "select",
            "B": "be select",
            "C": "selecting",
            "D": "going to select"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：The store will be closing in 15 minutes. Please select the items you wish to purchase and make your way to the cashier.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "select",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "be select",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "selecting",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "going to select",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 17,
          "range": "",
          "page": 2,
          "question": "Letitia has been getting so much ______ in her inbox that she missed important e-mails.",
          "options": {
            "A": "spam",
            "B": "cram",
            "C": "clues",
            "D": "whim"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Letitia has been getting so much spam in her inbox that she missed important e-mails.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "spam",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "cram",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "clues",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "whim",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 32,
          "range": "31 ",
          "page": 3,
          "question": "Starting January 1, Best Airlines ______ from Tokyo to Singapore, Kuala Lumpur, Auckland, and Sydney.",
          "options": {
            "A": "has flown",
            "B": "will be flying",
            "C": "flew",
            "D": "would fly"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Starting January 1, Best Airlines will be flying from Tokyo to Singapore, Kuala Lumpur, Auckland, and Sydney.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "has flown",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "will be flying",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "flew",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "would fly",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 33,
          "range": "31 ",
          "page": 3,
          "question": "Throughout the month of January, all ______ -class passengers will receive the premium service package at 50 percent off.",
          "options": {
            "A": "ticket",
            "B": "financial",
            "C": "economy",
            "D": "estimated"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Throughout the month of January, all economy -class passengers will receive the premium service package at 50 percent off.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "ticket",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "financial",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "economy",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "estimated",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 34,
          "range": "31 ",
          "page": 3,
          "question": "[Promotion detail] ______",
          "options": {
            "A": "Just enter the discount code BEST50JAL16 at check-in.",
            "B": "Price increases will be based on the date of purchase.",
            "C": "Take advantage of this special during the Christmas holiday.",
            "D": "Seats for the new bus lines will be limited, so buy now."
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Promotion detail] Just enter the discount code BEST50JAL16 at check-in.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Just enter the discount code BEST50JAL16 at check-in.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Price increases will be based on the date of purchase.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Take advantage of this special during the Christmas holiday.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Seats for the new bus lines will be limited, so buy now.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 35,
          "range": "35 ",
          "page": 3,
          "question": "ATTENTION: ______ Please take care of your valuables and do not leave your belongings unattended.",
          "options": {
            "A": "It is customary to first ask them before offering them money.",
            "B": "Early birds can be the first to experience it.",
            "C": "There are pickpockets operating in this area.",
            "D": "Travelers might have a chance to snap a picture of this rare sight."
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：ATTENTION: There are pickpockets operating in this area. Please take care of your valuables and do not leave your belongings unattended.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is customary to first ask them before offering them money.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Early birds can be the first to experience it.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "There are pickpockets operating in this area.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Travelers might have a chance to snap a picture of this rare sight.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 36,
          "range": "35",
          "page": 3,
          "question": "Please take care of your valuables and do not leave your belongings ______ .",
          "options": {
            "A": "attendant",
            "B": "inattentive",
            "C": "attending",
            "D": "unattended"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Please take care of your valuables and do not leave your belongings unattended .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "attendant",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "inattentive",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "attending",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "unattended",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 39,
          "range": "39",
          "page": 3,
          "question": "...stranding more than 600 ticket ______ for the day and affecting 24 domestic and international routes.",
          "options": {
            "A": "holders",
            "B": "planners",
            "C": "travelers",
            "D": "consumers"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：...stranding more than 600 ticket holders for the day and affecting 24 domestic and international routes.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "holders",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "planners",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "travelers",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "consumers",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 40,
          "range": "",
          "page": 4,
          "question": "[Airline history] ______",
          "options": {
            "A": "The airline had never experienced this type of event before.",
            "B": "People were left wondering how four crashes could have occurred.",
            "C": "The first was in 2014, and the other two months and a year later.",
            "D": "This was deemed unacceptable for a three-year span."
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Airline history] The first was in 2014, and the other two months and a year later.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The airline had never experienced this type of event before.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "People were left wondering how four crashes could have occurred.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The first was in 2014, and the other two months and a year later.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "This was deemed unacceptable for a three-year span.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 42,
          "range": "39 . 42",
          "page": 4,
          "question": "",
          "options": {
            "A": "Actually",
            "B": "Similarly",
            "C": "Addilionally",
            "D": "Consequently"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "Actually",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "Similarly",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "adv. 副詞",
                "meaning": "Addilionally",
                "correct": true,
                "reason": "【正確】adv. 副詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "Consequently",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 46,
          "range": "43.46",
          "page": 4,
          "question": "",
          "options": {
            "A": "that",
            "B": "than",
            "C": "though",
            "D": "thus"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "that",
                "correct": true,
                "reason": "【正確】pron./conj. 關係詞/代名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "than",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "conj. 連接詞",
                "meaning": "though",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "thus",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 49,
          "range": "49",
          "page": 5,
          "question": "What do we know about Evan Blackmore?",
          "options": {
            "A": "He is a criminal.",
            "B": "He works at a library.",
            "C": "His library card has expired",
            "D": "He's forgotten to return library materials"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What do we know about Evan Blackmore?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He is a criminal.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He works at a library.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "His library card has expired",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He's forgotten to return library materials",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 50,
          "range": "49",
          "page": 5,
          "question": "When is the return date for the overdue books?",
          "options": {
            "A": "December2",
            "B": "December13",
            "C": "February28",
            "D": "February 18"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：When is the return date for the overdue books?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "December2",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "December13",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "February28",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "February 18",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 51,
          "range": "",
          "page": 6,
          "question": "From: penny@pennyanecom To. Subject: Looking for the digital version of A Story of Sirings Dear Ms. Lane. I recentty read your wondertul book A Story ol Strings and thoroughly enjoyed the way you wove so much historical maleral inlo an enjoyable personal narrative. I leamed so much aboul the hlstory of string instruments through your interviews with musidans and nistorians. I see thal you aiso made a documentary film of the same name: nowever. I can only find it on Dvo Is il possible to buy and download it as a digital file? As I am traveling abroad exlensively at the moment it's rather inconvenient to get physical mail or packages. Many thanks for your reply. Andrew Garison Announcing the 1Oth Annual Ensberg Film Festival! June 2017 marks the retum of the popular Ensberg Film Festival. Buy your month-long pass now and receive access to every showing for the entirety of the festival, with a total of eight films each weekend for the entire month. This year, the theme of the festival is family. As usual, every film must involve the annual theme in some way in order to be eligible for screening. However, just because the theme is family doesn't mean that every film shown will be famity friendly. See below for additional details. Festival Time: Every Saturday and Sunday of June 2017, from 2:00 p.m. to 11:00 p.m. Price per Pass: CS200 Location: The Grace Dougherty Theater 112Oxford Road,Ensberg British Columbia, Canada If you wish to submit a film for consideratlon,please send a physical copy to: 145UniblabStreet,Ensberg British Columbla, Canada T5466E Or, upload your digltal copy to our Dropbox folder Folder name:\"Ensbergfilm\" Accessible through the following -mail address: enserbergfilm@cinephlle.com We hope to see you alltherel",
          "options": {
            "A": "gamson@mail.com"
          },
          "answer": "A",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：From: penny@pennyanecom To. Subject: Looking for the digital version of A Story of Sirings Dear Ms. Lane. I recentty read your wondertul book A Story ol Strings and thoroughly enjoyed the way you wove so much historical maleral inlo an enjoyable personal narrative. I leamed so much aboul the hlstory of string instruments through your interviews with musidans and nistorians. I see thal you aiso made a documentary film of the same name: nowever. I can only find it on Dvo Is il possible to buy and download it as a digital file? As I am traveling abroad exlensively at the moment it's rather inconvenient to get physical mail or packages. Many thanks for your reply. Andrew Garison Announcing the 1Oth Annual Ensberg Film Festival! June 2017 marks the retum of the popular Ensberg Film Festival. Buy your month-long pass now and receive access to every showing for the entirety of the festival, with a total of eight films each weekend for the entire month. This year, the theme of the festival is family. As usual, every film must involve the annual theme in some way in order to be eligible for screening. However, just because the theme is family doesn't mean that every film shown will be famity friendly. See below for additional details. Festival Time: Every Saturday and Sunday of June 2017, from 2:00 p.m. to 11:00 p.m. Price per Pass: CS200 Location: The Grace Dougherty Theater 112Oxford Road,Ensberg British Columbia, Canada If you wish to submit a film for consideratlon,please send a physical copy to: 145UniblabStreet,Ensberg British Columbla, Canada T5466E Or, upload your digltal copy to our Dropbox folder Folder name:\"Ensbergfilm\" Accessible through the following -mail address: enserbergfilm@cinephlle.com We hope to see you alltherel",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "gamson@mail.com",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 54,
          "range": "53",
          "page": 6,
          "question": "Where does the film festival take place?",
          "options": {
            "A": "At the Ensberg Theater",
            "B": "At a theater on Oxford Road",
            "C": "At theBritishColumbiaTheater",
            "D": "At a theateron Uniblab Street"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Where does the film festival take place?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "At the Ensberg Theater",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "At a theater on Oxford Road",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "At theBritishColumbiaTheater",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "At a theateron Uniblab Street",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 59,
          "range": "58",
          "page": 7,
          "question": "How long will this promotion last?",
          "options": {
            "A": "1 month",
            "B": "2 months",
            "C": "3 months",
            "D": "Indefinitely"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：How long will this promotion last?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "1 month",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2 months",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "3 months",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "Indefinitely",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 60,
          "range": "58.60",
          "page": 7,
          "question": "Based on their titles,whlch of the following books would NOT be subject to the promotion? Wizards Kinkade",
          "options": {
            "A": "TheDragonKing'sJoumeyAscenson",
            "B": "CyborgFuture 22?t:TheAge oithe Singulant)",
            "C": "The Savago Crystal ChroniclesThe Quest rorAtore",
            "D": "APainterof LightABlographyottheArtis!movnas"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Based on their titles,whlch of the following books would NOT be subject to the promotion? Wizards Kinkade",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "TheDragonKing'sJoumeyAscenson",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "CyborgFuture 22?t:TheAge oithe Singulant)",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The Savago Crystal ChroniclesThe Quest rorAtore",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "APainterof LightABlographyottheArtis!movnas",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 61,
          "range": "61 ",
          "page": 8,
          "question": "What are the speakers mainly talking about?",
          "options": {
            "A": "The employeehandbook",
            "B": "A problem with unpaid overtime",
            "C": "An issue withapaycheck",
            "D": "The status of a project"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：What are the speakers mainly talking about?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The employeehandbook",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "A problem with unpaid overtime",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "An issue withapaycheck",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The status of a project",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 63,
          "range": "61",
          "page": 8,
          "question": "What does Miranda imply when she says, \"We did a good job managing our resources this time around\"?",
          "options": {
            "A": "The team needs a new manager.",
            "B": "The team didn't have enough resources.",
            "C": "The team learned from previous mistakes.",
            "D": "She wants to take credit for the team's success."
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What does Miranda imply when she says, \"We did a good job managing our resources this time around\"?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The team needs a new manager.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The team didn't have enough resources.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The team learned from previous mistakes.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She wants to take credit for the team's success.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 65,
          "range": "65",
          "page": 9,
          "question": "What is the purpose of this letter?",
          "options": {
            "A": "To accompany a payment for a purchase",
            "B": "To complain about a delay in shipping",
            "C": "To inquire into a possible overcharge",
            "D": "To request action on a complaint"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is the purpose of this letter?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "To accompany a payment for a purchase",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "To complain about a delay in shipping",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "To inquire into a possible overcharge",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "To request action on a complaint",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 72,
          "range": "72.75",
          "page": 11,
          "question": "How does the text describe handwritten messages?",
          "options": {
            "A": "Earnest",
            "B": "Hurried",
            "C": "Outdated",
            "D": "Commonplace"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：How does the text describe handwritten messages?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Earnest",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "Hurried",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "Outdated",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Commonplace",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 73,
          "range": "72",
          "page": 11,
          "question": "Whatcanone learnfromGenevieve?",
          "options": {
            "A": "How to plan weddings",
            "B": "How to throw a dinnerparty",
            "C": "How to make stationery",
            "D": "Howto producecalligraphy"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Whatcanone learnfromGenevieve?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How to plan weddings",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How to throw a dinnerparty",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How to make stationery",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Howto producecalligraphy",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 74,
          "range": "72",
          "page": 11,
          "question": "Which is most likely to be one of Genevieve's products?",
          "options": {
            "A": "A legal letter",
            "B": "Agrantproposal",
            "C": "Aparty invitation",
            "D": "An application form"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Which is most likely to be one of Genevieve's products?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "A legal letter",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "Agrantproposal",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "Aparty invitation",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "An application form",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 78,
          "range": "76",
          "page": 12,
          "question": "What do we know about Miranda?",
          "options": {
            "A": "She is still in Taiwan.",
            "B": "She likely did not receive her jacket.",
            "C": "She can receive her item through the mail",
            "D": "She will spend Christmas with her friend in Taipei"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What do we know about Miranda?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She is still in Taiwan.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She likely did not receive her jacket.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She can receive her item through the mail",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She will spend Christmas with her friend in Taipei",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 79,
          "range": "76",
          "page": 12,
          "question": "How can Miranda reclaim her jacket?",
          "options": {
            "A": "Call and leave herfriend's number",
            "B": "Fill out a form and fax or bring it in",
            "C": "Go to the office before 6:00 p.m. any day",
            "D": "Go to the office on a weekday morning"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：How can Miranda reclaim her jacket?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "Call and leave herfriend's number",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Fill out a form and fax or bring it in",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Go to the office before 6:00 p.m. any day",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "Go to the office on a weekday morning",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 80,
          "range": "76",
          "page": 12,
          "question": "Who most likely is Adele Wang?",
          "options": {
            "A": "A train driver on the MRT",
            "B": "Miranda Smithers's friend in Taipei",
            "C": "Miranda Smithers's friend in Hong Kong",
            "D": "An employee at the Lost and Found office"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Who most likely is Adele Wang?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "A train driver on the MRT",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Miranda Smithers's friend in Taipei",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Miranda Smithers's friend in Hong Kong",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "An employee at the Lost and Found office",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 81,
          "range": "81",
          "page": 13,
          "question": "Which is the closest in meaning to \"in nature\" in the first e-mail?",
          "options": {
            "A": "Outdoors",
            "B": "Inessence",
            "C": "Instead of",
            "D": "As of now"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Which is the closest in meaning to \"in nature\" in the first e-mail?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Outdoors",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "Inessence",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Instead of",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "As of now",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 82,
          "range": "81",
          "page": 13,
          "question": "What kind of work will the position most likely require?",
          "options": {
            "A": "Writing resumes",
            "B": "Managing projects",
            "C": "Lifting heavy objects",
            "D": "Finding Jackie's replacement"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What kind of work will the position most likely require?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Writing resumes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Managing projects",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Lifting heavy objects",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Finding Jackie's replacement",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 88,
          "range": "86.90",
          "page": 14,
          "question": "What is true about Mr. Pinkman?",
          "options": {
            "A": "His device malfunctioned",
            "B": "He used the scale incorrectly.",
            "C": "He didn't actually use the scale",
            "D": "He ordered the scale beforeFebruary 1."
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is true about Mr. Pinkman?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "His device malfunctioned",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He used the scale incorrectly.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He didn't actually use the scale",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He ordered the scale beforeFebruary 1.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        }
      ]
    },
    {
      "test_id": "多益3",
      "title": "多益模擬測驗三 (Test 3)",
      "total_questions": 37,
      "questions": [
        {
          "id": 1,
          "range": "",
          "page": 1,
          "question": "We're the first line of defense when it comes to ______ cybercrimes.",
          "options": {
            "A": "preventing",
            "B": "prevent",
            "C": "prevention",
            "D": "preventive"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：We're the first line of defense when it comes to preventing cybercrimes.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "preventing",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "prevent",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "prevention",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "preventive",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 2,
          "range": "",
          "page": 1,
          "question": "You may not see it when you first meet him, but Bill has a(n) ______ temper.",
          "options": {
            "A": "fiery",
            "B": "windy",
            "C": "earthy",
            "D": "watery"
          },
          "answer": "A",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：You may not see it when you first meet him, but Bill has a(n) fiery temper.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "fiery",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "windy",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "earthy",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "watery",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 3,
          "range": "",
          "page": 1,
          "question": "One can only fail so many times before ______ by the higher-ups.",
          "options": {
            "A": "reprimanding",
            "B": "reprimand",
            "C": "reprimanded",
            "D": "being reprimanded"
          },
          "answer": "D",
          "explanation": {
            "focus": "介系詞後接動名詞被動態",
            "type": "before being + p.p.",
            "translation": "一個人在被上司正式訓誡懲處之前，能犯錯的次數是有限的。",
            "grammar": "介系詞 before 後必須接動名詞 V-ing 作受詞；又因為主詞 One（一個人）與 reprimand（訓斥）之間為被動關係（被上級長官訓斥），後方又有 by the higher-ups 引導動作執行者，必須採用動名詞被動態 being reprimanded。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 動名詞主動態",
                "meaning": "正在訓斥他人",
                "correct": false,
                "reason": "主動態語意錯誤，員工並非主動去訓斥上級長官。"
              },
              "B": {
                "pos": "v. 動詞原形",
                "meaning": "訓斥",
                "correct": false,
                "reason": "介系詞 before 後面絕不可接原形動詞。"
              },
              "C": {
                "pos": "v. 過去分詞",
                "meaning": "被訓斥了",
                "correct": false,
                "reason": "缺少動名詞 being，不可直接用過去分詞當介系詞受詞。"
              },
              "D": {
                "pos": "V-ing + p.p. 動名詞被動態",
                "meaning": "被訓斥、受到懲處",
                "correct": true,
                "reason": "being reprimanded 完全符合介系詞後接動名詞要求，且正確表達被動語態。",
                "example": "He was nervous about being interviewed by the press."
              }
            }
          }
        },
        {
          "id": 4,
          "range": "",
          "page": 1,
          "question": "I guess we'll just have to wait and see ______ the new project is approved or not.",
          "options": {
            "A": "unless",
            "B": "if",
            "C": "that",
            "D": "when"
          },
          "answer": "B",
          "explanation": {
            "focus": "名詞子句與是否選擇 (if... or not)",
            "type": "從屬連接詞 (if/whether... or not)",
            "translation": "我想我們只能靜觀其變，看看新專案究竟是否會獲得核准。",
            "grammar": "動詞 see 後接名詞子句作受詞。句尾有 or not（或者沒有），在表示「是否」的名詞子句中，可使用 if 或 whether 與 or not 呼應。",
            "options_analysis": {
              "A": {
                "pos": "conj. 從屬連接詞",
                "meaning": "除非...",
                "correct": false,
                "reason": "unless 引導條件子句，不能作 see 的賓語，且與 or not 衝突。"
              },
              "B": {
                "pos": "conj. 名詞子句連接詞",
                "meaning": "是否...",
                "correct": true,
                "reason": "see if... or not 為標準句型，表達「查驗是否...」之未知結果。",
                "example": "I will call the office to see if the manager has arrived."
              },
              "C": {
                "pos": "conj. 名詞子句連接詞",
                "meaning": "那個/表確知事實",
                "correct": false,
                "reason": "that 引導確定事實的陳述句，不可與 or not 搭配表示未知疑問。"
              },
              "D": {
                "pos": "adv./conj. 疑問副詞",
                "meaning": "何時",
                "correct": false,
                "reason": "when 表示時間點，不能與 or not 連用。"
              }
            }
          }
        },
        {
          "id": 5,
          "range": "",
          "page": 1,
          "question": "Jeff is ______ charismatic and fun that he is always the life of the party.",
          "options": {
            "A": "very",
            "B": "much",
            "C": "such",
            "D": "so"
          },
          "answer": "D",
          "explanation": {
            "focus": "so... that 程度結果句型",
            "type": "so + adj. + that 子句",
            "translation": "傑夫是如此富有魅力又風趣，以至於他總是全場派對的靈魂焦點。",
            "grammar": "句型結構為 ______ + 形容詞 (charismatic and fun) + that 子句。修飾形容詞並與 that 呼應表達「如此...以致於...」必須使用副詞 so。",
            "options_analysis": {
              "A": {
                "pos": "adv. 程度副詞",
                "meaning": "非常",
                "correct": false,
                "reason": "very 僅作純粹程度強調，不與 that 子句構成關聯結構。"
              },
              "B": {
                "pos": "adv. 程度副詞",
                "meaning": "很、非常",
                "correct": false,
                "reason": "much 通常修飾比較級或動詞，不直接修飾原級形容詞 charismatic。"
              },
              "C": {
                "pos": "adj. 指示詞",
                "meaning": "如此的",
                "correct": false,
                "reason": "such 後面必須接名詞（such a charismatic guy that...），不可直接接形容詞。"
              },
              "D": {
                "pos": "adv. 程度副詞",
                "meaning": "如此地",
                "correct": true,
                "reason": "so + adj. + that... 是核心多益句型，完美銜接形容詞與後方結果子句。",
                "example": "The weather was so cold that the lake froze over."
              }
            }
          }
        },
        {
          "id": 6,
          "range": "",
          "page": 1,
          "question": "Can you tell me ______ you've been acting so strangely of late?",
          "options": {
            "A": "why",
            "B": "who",
            "C": "what",
            "D": "when"
          },
          "answer": "A",
          "explanation": {
            "focus": "連接詞與主從子句邏輯",
            "type": "副詞/對等連接詞 (Conjunctions)",
            "translation": "完整句子意指：Can you tell me why you've been acting so strangely of late?",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "why",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "who",
                "correct": false,
                "reason": "【錯誤】pron./conj. 關係詞/代名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "what",
                "correct": false,
                "reason": "【錯誤】pron./conj. 關係詞/代名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "conj. 連接詞",
                "meaning": "when",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 7,
          "range": "",
          "page": 1,
          "question": "Jason is looking for a new job because he feels he is overworked and ______ here.",
          "options": {
            "A": "underpaid",
            "B": "underpays",
            "C": "underpay",
            "D": "underpaying"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Jason is looking for a new job because he feels he is overworked and underpaid here.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "underpaid",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "underpays",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "underpay",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "underpaying",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 8,
          "range": "",
          "page": 1,
          "question": "Once I get some time ______ from work, I'll finally be able to run a few errands and clean my house.",
          "options": {
            "A": "in",
            "B": "by",
            "C": "off",
            "D": "with"
          },
          "answer": "C",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：Once I get some time off from work, I'll finally be able to run a few errands and clean my house.",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "in",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "by",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "off",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "with",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              }
            }
          }
        },
        {
          "id": 9,
          "range": "",
          "page": 1,
          "question": "It is important to stay on top of current events if you want to have ______ conversations about contemporary international politics.",
          "options": {
            "A": "informant",
            "B": "informed",
            "C": "information",
            "D": "inform"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：It is important to stay on top of current events if you want to have informed conversations about contemporary international politics.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "informant",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "informed",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "information",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "inform",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 10,
          "range": "",
          "page": 1,
          "question": "Courtney believes that the payment didn't go through ______ a processing error.",
          "options": {
            "A": "apart from",
            "B": "due to",
            "C": "in terms of",
            "D": "with regard to"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Courtney believes that the payment didn't go through due to a processing error.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "apart from",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "due to",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "in terms of",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "with regard to",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 12,
          "range": "",
          "page": 1,
          "question": "I don't like to ______ , so I devote all my thought and energy to tackling one major project at a time.",
          "options": {
            "A": "think",
            "B": "direct",
            "C": "complete",
            "D": "multitask"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：I don't like to multitask , so I devote all my thought and energy to tackling one major project at a time.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "think",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "direct",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "complete",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "multitask",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 13,
          "range": "",
          "page": 1,
          "question": "Don't you think that finishing this workload within such a short time frame is too heavy a ______ for most employees to bear?",
          "options": {
            "A": "burden",
            "B": "resource",
            "C": "preference",
            "D": "performance"
          },
          "answer": "A",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Don't you think that finishing this workload within such a short time frame is too heavy a burden for most employees to bear?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "burden",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "resource",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "preference",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "performance",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 17,
          "range": "",
          "page": 2,
          "question": "My goodness! What a horrible accident. It's a miracle that ______ is completely uninjured!",
          "options": {
            "A": "no one",
            "B": "myself",
            "C": "everything",
            "D": "everyone"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：My goodness! What a horrible accident. It's a miracle that everyone is completely uninjured!",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "no one",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "myself",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "everything",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "everyone",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 31,
          "range": "31  34",
          "page": 3,
          "question": "Surprisingly, Tesla has ______ to turn a profit as of 2016.",
          "options": {
            "A": "already",
            "B": "then",
            "C": "yet",
            "D": "far"
          },
          "answer": "C",
          "explanation": {
            "focus": "連接詞與主從子句邏輯",
            "type": "副詞/對等連接詞 (Conjunctions)",
            "translation": "完整句子意指：Surprisingly, Tesla has yet to turn a profit as of 2016.",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "already",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "then",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "conj. 連接詞",
                "meaning": "yet",
                "correct": true,
                "reason": "【正確】conj. 連接詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "far",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 32,
          "range": "31 . 34",
          "page": 3,
          "question": "Chinese researchers demonstrated that the car could be hacked when they opened the car's doors without a key and controlled its brakes ______ .",
          "options": {
            "A": "remote",
            "B": "remotely",
            "C": "remoteness",
            "D": "remotes"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Chinese researchers demonstrated that the car could be hacked when they opened the car's doors without a key and controlled its brakes remotely .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "remote",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "remotely",
                "correct": true,
                "reason": "【正確】adv. 副詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "remoteness",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "remotes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 33,
          "range": "31 ",
          "page": 3,
          "question": "Despite these setbacks, Tesla has seen a(n) ______ in deliveries during its third sales quarter of 2016, shipping 24,500 cars.",
          "options": {
            "A": "echo",
            "B": "spike",
            "C": "decay",
            "D": "reflection"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Despite these setbacks, Tesla has seen a(n) spike in deliveries during its third sales quarter of 2016, shipping 24,500 cars.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "echo",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "spike",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "decay",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "reflection",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 34,
          "range": "31 ",
          "page": 3,
          "question": "[Context ending] ______",
          "options": {
            "A": "This is more than double the amount delivered in the same quarter the year prior.",
            "B": "The company blames this decline on bad press it has received over the years.",
            "C": "This number is expected to rise dramatically in 2015, when new laws take effect.",
            "D": "These numbers have led some analysts to believe that this year could be their last."
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Context ending] This is more than double the amount delivered in the same quarter the year prior.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "This is more than double the amount delivered in the same quarter the year prior.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The company blames this decline on bad press it has received over the years.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "This number is expected to rise dramatically in 2015, when new laws take effect.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "These numbers have led some analysts to believe that this year could be their last.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 37,
          "range": "35.38",
          "page": 3,
          "question": "Butcher asserts that women are also more likely to be perfectionists, and though this is ______ , it can prevent things from getting done.",
          "options": {
            "A": "helpful",
            "B": "assisting",
            "C": "convenient",
            "D": "cooperative"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Butcher asserts that women are also more likely to be perfectionists, and though this is helpful , it can prevent things from getting done.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "helpful",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "assisting",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "convenient",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "cooperative",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 38,
          "range": "35",
          "page": 3,
          "question": "[Conclusion] ______",
          "options": {
            "A": "She now practices her current approach to business: talking, getting one's ideas out there, and making progress.",
            "B": "With this knowledge in hand, Butcher is focused on making people more aware of this little-known disease.",
            "C": "Butcher is now refining her skills in the hopes of someday landing the job of her dreams.",
            "D": "Butcher believes that women--not men--will be the driving forces in agriculture now."
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Conclusion] She now practices her current approach to business: talking, getting one's ideas out there, and making progress.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She now practices her current approach to business: talking, getting one's ideas out there, and making progress.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "With this knowledge in hand, Butcher is focused on making people more aware of this little-known disease.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Butcher is now refining her skills in the hopes of someday landing the job of her dreams.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Butcher believes that women--not men--will be the driving forces in agriculture now.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 39,
          "range": "39.2",
          "page": 4,
          "question": "[HR memo ending] ______",
          "options": {
            "A": "One-on-one interviews have proven to be the most effective style.",
            "B": "It's best for the prospective employee to feel at ease during the interview.",
            "C": "We'll go over the several intended purposes of this format.",
            "D": "The following outlines why this style will benefit our company."
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[HR memo ending] The following outlines why this style will benefit our company.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "One-on-one interviews have proven to be the most effective style.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It's best for the prospective employee to feel at ease during the interview.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "We'll go over the several intended purposes of this format.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The following outlines why this style will benefit our company.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 40,
          "range": "39.42",
          "page": 4,
          "question": "______ the structure of a panel interview may be more intimidating to a candidate than a one-on-one interview, this can be a useful way of determining how candidates fare under pressure.",
          "options": {
            "A": "Since",
            "B": "Until",
            "C": "Whenever",
            "D": "Only if"
          },
          "answer": "A",
          "explanation": {
            "focus": "連接詞與主從子句邏輯",
            "type": "副詞/對等連接詞 (Conjunctions)",
            "translation": "完整句子意指：Since the structure of a panel interview may be more intimidating to a candidate than a one-on-one interview, this can be a useful way of determining how candidates fare under pressure.",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "conj. 連接詞",
                "meaning": "Since",
                "correct": true,
                "reason": "【正確】conj. 連接詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Until",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "Whenever",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Only if",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 42,
          "range": "39.42",
          "page": 4,
          "question": "",
          "options": {
            "A": "identified",
            "B": "identification",
            "C": "identifies",
            "D": "identitying"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "identified",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "identification",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "identifies",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "identitying",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 45,
          "range": "43.46",
          "page": 4,
          "question": "",
          "options": {
            "A": "back up",
            "B": "having backed up",
            "C": "backing up",
            "D": "backed up"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "back up",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "having backed up",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "backing up",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "backed up",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 58,
          "range": "58.60",
          "page": 8,
          "question": "Who or what is Bower?",
          "options": {
            "A": "The speakers'client",
            "B": "Ashippingcompany",
            "C": "The speakers'colleague",
            "D": "Asportinggoods manutacturer"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Who or what is Bower?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "The speakers'client",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Ashippingcompany",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The speakers'colleague",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Asportinggoods manutacturer",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 62,
          "range": "61",
          "page": 9,
          "question": "ated According to the article, why might more Americans be buying Singaporean luxury real estate? an buyers.",
          "options": {
            "A": "They are exempl from paying certain taxes.",
            "B": "New York luxury real estate prices are now too low.",
            "C": "Most American businesses are based in Singapore",
            "D": "They wish to own more real estate than Chinese"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：ated According to the article, why might more Americans be buying Singaporean luxury real estate? an buyers.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "They are exempl from paying certain taxes.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "New York luxury real estate prices are now too low.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Most American businesses are based in Singapore",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "They wish to own more real estate than Chinese",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 65,
          "range": "65",
          "page": 9,
          "question": "Which of the following is NOT an asset the passage men describes as a potential source of income once you are retired? long as",
          "options": {
            "A": "Property",
            "B": "Pensions",
            "C": "Investments",
            "D": "State assistance"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Which of the following is NOT an asset the passage men describes as a potential source of income once you are retired? long as",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Property",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Pensions",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Investments",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "State assistance",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 67,
          "range": "65 ",
          "page": 9,
          "question": "When should one stop making high-risk Investments?",
          "options": {
            "A": "ln one's early 40s",
            "B": "In the middle of one's career",
            "C": "Inone's senioryears",
            "D": "Early in one's career"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：When should one stop making high-risk Investments?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "ln one's early 40s",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "In the middle of one's career",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Inone's senioryears",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Early in one's career",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 69,
          "range": "68",
          "page": 10,
          "question": "What is at the core of America's lumber dispute with nt. Canada? act American lumber. capitalist trade ally. tumberbusinesses. price than America pays for Canadian lumber.",
          "options": {
            "A": "Canadian lumber is of an inferior quality to",
            "B": "Canada refuses to admit its socialist traits to its",
            "C": "Importing Canadian lumberis hurtingAmerca's",
            "D": "Canada is buying American lumber at a cheaper"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is at the core of America's lumber dispute with nt. Canada? act American lumber. capitalist trade ally. tumberbusinesses. price than America pays for Canadian lumber.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Canadian lumber is of an inferior quality to",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Canada refuses to admit its socialist traits to its",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Importing Canadian lumberis hurtingAmerca's",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Canada is buying American lumber at a cheaper",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 70,
          "range": "68",
          "page": 10,
          "question": "What happened in 2015? Canadian lumber.",
          "options": {
            "A": "Canada entered NAFTA.",
            "B": "The soft lumberagreement ended.",
            "C": "Canada won the soft lumber dispute.",
            "D": "America employed countervailing duties on"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：What happened in 2015? Canadian lumber.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Canada entered NAFTA.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The soft lumberagreement ended.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Canada won the soft lumber dispute.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "America employed countervailing duties on",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 71,
          "range": "68 ",
          "page": 10,
          "question": "Which of the following thematic statements is most closely expressed by this article? have long disputes. partner,even to its allies economic edge internationally allies,they are secretly enemies",
          "options": {
            "A": "Evenallied nationsand close trading partners can",
            "B": "America is always an unfair international trading",
            "C": "Canada's socialist tendencies grant it an unfair",
            "D": "Though two countriesappear tobe international"
          },
          "answer": "A",
          "explanation": {
            "focus": "被動語態與時態判斷",
            "type": "動詞語態 (Passive Voice)",
            "translation": "完整句子意指：Which of the following thematic statements is most closely expressed by this article? have long disputes. partner,even to its allies economic edge internationally allies,they are secretly enemies",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Evenallied nationsand close trading partners can",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "America is always an unfair international trading",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Canada's socialist tendencies grant it an unfair",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "Though two countriesappear tobe international",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 72,
          "range": "",
          "page": 11,
          "question": "Liberty Air 450 Main Street NewYork,NY10024 DearLibertyAircustomers. 1]- I'd like to take this time to say to all our valued customers th we at Libery Air are deeply somy and embarassed for our pertormance overthe Christmas season. Last week was the worst operational week in Liberty Air's eleven-ye nistory. -2— The fact is we let you down. Nothing is more important than regainin your trust. 3]-- All of us here hope you will give us the opportunit to once again welcome you on board and provide you with the positi Liberty Air experience you have come to expect.-4]- Sincerely. David Cannon Chief ExecutiveOfficer",
          "options": {
            "A": "800-565-6000"
          },
          "answer": "A",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：Liberty Air 450 Main Street NewYork,NY10024 DearLibertyAircustomers. 1]- I'd like to take this time to say to all our valued customers th we at Libery Air are deeply somy and embarassed for our pertormance overthe Christmas season. Last week was the worst operational week in Liberty Air's eleven-ye nistory. -2— The fact is we let you down. Nothing is more important than regainin your trust. 3]-- All of us here hope you will give us the opportunit to once again welcome you on board and provide you with the positi Liberty Air experience you have come to expect.-4]- Sincerely. David Cannon Chief ExecutiveOfficer",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "800-565-6000",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 73,
          "range": "72 ",
          "page": 11,
          "question": "How long has Liberty Air been in operation? ar ve",
          "options": {
            "A": "One season",
            "B": "One year",
            "C": "Over a decade",
            "D": "Twenty years"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：How long has Liberty Air been in operation? ar ve",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "One season",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "One year",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Over a decade",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Twenty years",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 75,
          "range": "72 ",
          "page": 11,
          "question": "In which of the positions marked [1], [2]. [3], and [4] does the following sentence best belong? \"Many of you were either stranded, delayed or had flights canceled following the severe winter storm in the Southwest.\"",
          "options": {
            "A": "[1]",
            "B": "[2]",
            "C": "[3]",
            "D": "[4]"
          },
          "answer": "B",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：In which of the positions marked [1], [2]. [3], and [4] does the following sentence best belong? \"Many of you were either stranded, delayed or had flights canceled following the severe winter storm in the Southwest.\"",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[1]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[2]",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[3]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "[4]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              }
            }
          }
        },
        {
          "id": 77,
          "range": "76",
          "page": 12,
          "question": "Which of the following shares the closest meaning with \"pet-friendly\" in this context?",
          "options": {
            "A": "The landlord likes pets.",
            "B": "All of the neighbors love pets.",
            "C": "Pets are allowed in this apartment.",
            "D": "This apartment is completely pet-proof."
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Which of the following shares the closest meaning with \"pet-friendly\" in this context?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The landlord likes pets.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "All of the neighbors love pets.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Pets are allowed in this apartment.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "This apartment is completely pet-proof.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 78,
          "range": "76 ",
          "page": 12,
          "question": "Which response might satisfactorily answer Steven's fourth question?",
          "options": {
            "A": "\"I don't know my neighbors.\"",
            "B": "\"No one in the building is allergic.\"",
            "C": "\"The apartment is completely soundproot.\"",
            "D": "\"The furniture is completely indestructible.\""
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Which response might satisfactorily answer Steven's fourth question?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "\"I don't know my neighbors.\"",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "\"No one in the building is allergic.\"",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "\"The apartment is completely soundproot.\"",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "\"The furniture is completely indestructible.\"",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 84,
          "range": "81",
          "page": 13,
          "question": "What can be most safely assumed about the survey? ur",
          "options": {
            "A": "It only exists online.",
            "B": "It was designed by Mildred Pierce.",
            "C": "It will take at least 40 minutes to compiete",
            "D": "It contains both written and multiple choice elements"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What can be most safely assumed about the survey? ur",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It only exists online.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It was designed by Mildred Pierce.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It will take at least 40 minutes to compiete",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It contains both written and multiple choice elements",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 100,
          "range": "96",
          "page": 16,
          "question": "What will Paula talk about during her follow-up telephone call? MountainViewmarket Mountain View",
          "options": {
            "A": "Advice on designing newspaperads",
            "B": "How Barnycan best pronote his business in the",
            "C": "Whether Barry should expandhis businessto",
            "D": "The cost of expanding to Mountain View"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What will Paula talk about during her follow-up telephone call? MountainViewmarket Mountain View",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Advice on designing newspaperads",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How Barnycan best pronote his business in the",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Whether Barry should expandhis businessto",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The cost of expanding to Mountain View",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        }
      ]
    },
    {
      "test_id": "多益4",
      "title": "多益模擬測驗四 (Test 4)",
      "total_questions": 50,
      "questions": [
        {
          "id": 1,
          "range": "",
          "page": 1,
          "question": "The product will be successful; I stake my reputation as an ______ on it.",
          "options": {
            "A": "analyst",
            "B": "analyze",
            "C": "analysis",
            "D": "analyses"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：The product will be successful; I stake my reputation as an analyst on it.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "analyst",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "analyze",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "analysis",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "analyses",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 2,
          "range": "",
          "page": 1,
          "question": "Bethany found ______ via e-mail that she had been accepted for the position.",
          "options": {
            "A": "out",
            "B": "with",
            "C": "about",
            "D": "through"
          },
          "answer": "A",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Bethany found out via e-mail that she had been accepted for the position.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "out",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "with",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "prep. 介系詞",
                "meaning": "about",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "through",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 3,
          "range": "",
          "page": 1,
          "question": "I get chills of excitement ______ I hear that particular piece of music.",
          "options": {
            "A": "whoever",
            "B": "however",
            "C": "whatever",
            "D": "whenever"
          },
          "answer": "D",
          "explanation": {
            "focus": "複合關係副詞（時間副詞子句）",
            "type": "whenever（每當...的時候）",
            "translation": "每當我聽到那首特定的樂曲時，我都會興奮得起雞皮疙瘩。",
            "grammar": "空格連接主要子句 I get chills of excitement 與時間副詞子句 I hear that particular piece of music。表示「每次...、每當...的時候」需使用副詞子句連接詞 whenever。",
            "options_analysis": {
              "A": {
                "pos": "pron. 代名詞",
                "meaning": "無論誰",
                "correct": false,
                "reason": "指代人，不能引導時間副詞子句。"
              },
              "B": {
                "pos": "adv. 連接詞",
                "meaning": "無論如何/然而",
                "correct": false,
                "reason": "表轉折或程度（however hard），不能連接時間動作。"
              },
              "C": {
                "pos": "pron. 代名詞",
                "meaning": "無論什麼",
                "correct": false,
                "reason": "指代事物，在此處缺少受詞位置，文意不通。"
              },
              "D": {
                "pos": "conj. 複合關係副詞",
                "meaning": "每當、無論何時",
                "correct": true,
                "reason": "whenever 引導時間副詞子句，相當於 every time that...，語法語意皆契合。",
                "example": "Whenever I visit Kyoto, I stay at the same hotel."
              }
            }
          }
        },
        {
          "id": 4,
          "range": "",
          "page": 1,
          "question": "I know he made a mistake, but ______ you think you're being a little hard on Bertrand?",
          "options": {
            "A": "not",
            "B": "don't",
            "C": "didn't",
            "D": "haven't"
          },
          "answer": "B",
          "explanation": {
            "focus": "助動詞否定反詰問句",
            "type": "Don't you think...?",
            "translation": "我知道他犯了錯，但難道你不覺得自己對伯特蘭有點太嚴格了嗎？",
            "grammar": "句尾有問號，此為疑問句。主詞為 you，動詞為一般動詞 think。詢問對方現在的看法並帶有委婉勸誡之反詰語氣，使用助動詞現在式否定形 Don't。",
            "options_analysis": {
              "A": {
                "pos": "adv. 否定副詞",
                "meaning": "不",
                "correct": false,
                "reason": "一般動詞疑問句不能直接將 not 放句首，必須借助助動詞 do。"
              },
              "B": {
                "pos": "aux. 助動詞現在式否定",
                "meaning": "難道不...",
                "correct": true,
                "reason": "Don't you think...? 是英語最常見的委婉徵詢與建議反詰句型。",
                "example": "Don't you think it's time we made a decision?"
              },
              "C": {
                "pos": "aux. 助動詞過去式否定",
                "meaning": "難道當初不...",
                "correct": false,
                "reason": "didn't 表示過去時態，但後方 you're being 是現在進行式，時態矛盾。"
              },
              "D": {
                "pos": "aux. 現在完成式助動詞",
                "meaning": "尚未...",
                "correct": false,
                "reason": "haven't 後面必須接過去分詞 thought，不能接原形動詞 think。"
              }
            }
          }
        },
        {
          "id": 5,
          "range": "",
          "page": 1,
          "question": "The popularity of eco-friendly products is ______ environmental consciousness amongst consumers.",
          "options": {
            "A": "indicate",
            "B": "indicative of",
            "C": "indication",
            "D": "indicates"
          },
          "answer": "B",
          "explanation": {
            "focus": "形容詞片語固定搭配 (be indicative of)",
            "type": "be indicative of...",
            "translation": "環保產品的廣受歡迎，反映出消費者之間環保意識的顯著提升。",
            "grammar": "空格位於 is 與名詞片語 environmental consciousness 之間。需填入與 of 搭配並在 be 動詞後作表語的形容詞片語 be indicative of（表明、預示、反映出）。",
            "options_analysis": {
              "A": {
                "pos": "v. 動詞原形",
                "meaning": "表明、指示",
                "correct": false,
                "reason": "動詞原形不能直接接在 is 後面。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "顯示...的、表明...的",
                "correct": true,
                "reason": "be indicative of 為多益正式商務與學術高頻片語，表示「反映出/象徵著...」。",
                "example": "Rising sales are indicative of growing consumer confidence."
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "指示、跡象",
                "correct": false,
                "reason": "indication 前面若要作表語通常需加冠詞 an indication of。"
              },
              "D": {
                "pos": "v. 動詞第三人稱單數",
                "meaning": "表明",
                "correct": false,
                "reason": "前面已有謂語動詞 is，不可再出現第二個謂語動詞 indicates。"
              }
            }
          }
        },
        {
          "id": 6,
          "range": "",
          "page": 1,
          "question": "I was horrified to discover that my sweater ______ several sizes after being washed.",
          "options": {
            "A": "shrink",
            "B": "shrank",
            "C": "shrunken",
            "D": "shrinking"
          },
          "answer": "B",
          "explanation": {
            "focus": "不規則動詞之過去式變化",
            "type": "動詞過去式 (shrink -> shrank)",
            "translation": "我驚恐地發現我的毛衣洗完之後縮水了好幾個尺寸。",
            "grammar": "主要子句動詞為過去式 was horrified。名詞子句描述過去發生的動作（毛衣縮水），需使用動詞過去式。shrink 的不規則三態變化為 shrink - shrank - shrunken。",
            "options_analysis": {
              "A": {
                "pos": "v. 動詞原形",
                "meaning": "縮水",
                "correct": false,
                "reason": "主詞 my sweater 為單數且時態為過去，不可用原形動詞。"
              },
              "B": {
                "pos": "v. 動詞過去式",
                "meaning": "縮水了",
                "correct": true,
                "reason": "shrank 為 shrink 的過去式，符合主從子句時態一致原則（was horrified that... shrank）。",
                "example": "My wool sweater shrank in the hot water."
              },
              "C": {
                "pos": "p.p./adj. 過去分詞/形容詞",
                "meaning": "已經縮小的",
                "correct": false,
                "reason": "shrunken 是過去分詞作形容詞用，前面缺少 be 動詞不能單獨作謂語動詞。"
              },
              "D": {
                "pos": "v.-ing 現在分詞",
                "meaning": "正在縮水",
                "correct": false,
                "reason": "分詞前面缺少 be 動詞，不能構成謂語。"
              }
            }
          }
        },
        {
          "id": 7,
          "range": "",
          "page": 1,
          "question": "Small businesses have been popping ______ all over the country.",
          "options": {
            "A": "up",
            "B": "on",
            "C": "down",
            "D": "across"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Small businesses have been popping up all over the country.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "up",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "on",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "down",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "across",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 8,
          "range": "",
          "page": 1,
          "question": "Due to a lack of concrete data, Catalina was only able to offer a series of ______ estimates at the end of her presentation.",
          "options": {
            "A": "rocky",
            "B": "rough",
            "C": "rampant",
            "D": "resurgent"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Due to a lack of concrete data, Catalina was only able to offer a series of rough estimates at the end of her presentation.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "rocky",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "rough",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "rampant",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "resurgent",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 9,
          "range": "",
          "page": 1,
          "question": "The company's New York branch, which has been the most profitable, ______ entirely of experienced personnel.",
          "options": {
            "A": "is composed",
            "B": "composed",
            "C": "composes",
            "D": "is composing"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：The company's New York branch, which has been the most profitable, is composed entirely of experienced personnel.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "is composed",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "composed",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "composes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "is composing",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 10,
          "range": "",
          "page": 1,
          "question": "I just want to say that yesterday, you ______ that troublesome situation admirably. Great job!",
          "options": {
            "A": "handle",
            "B": "handled",
            "C": "have handled",
            "D": "have been handling"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：I just want to say that yesterday, you handled that troublesome situation admirably. Great job!",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "handle",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "handled",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "have handled",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "have been handling",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 12,
          "range": "",
          "page": 1,
          "question": "Inspired by influential entrepreneurs, Mark decided to invest in the tech industry, and he made a ______ .",
          "options": {
            "A": "fortune",
            "B": "richness",
            "C": "opulence",
            "D": "extravagance"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Inspired by influential entrepreneurs, Mark decided to invest in the tech industry, and he made a fortune .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "fortune",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "richness",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "opulence",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "extravagance",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 14,
          "range": "",
          "page": 1,
          "question": "It is a commonly believed myth that the Great Wall of China ______ from space.",
          "options": {
            "A": "saw",
            "B": "sees",
            "C": "can see",
            "D": "can be seen"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：It is a commonly believed myth that the Great Wall of China can be seen from space.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "saw",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "sees",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "can see",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "can be seen",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 15,
          "range": "",
          "page": 1,
          "question": "Feel free to ______ your opinions during the Q&A session after the presentation.",
          "options": {
            "A": "veto",
            "B": "voice",
            "C": "view",
            "D": "vacate"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Feel free to voice your opinions during the Q&A session after the presentation.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "veto",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "voice",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "view",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "vacate",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 17,
          "range": "",
          "page": 2,
          "question": "______ we subcontract a few of these projects, we will be able to stay on schedule.",
          "options": {
            "A": "If",
            "B": "Whereas",
            "C": "Till",
            "D": "Whether"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：If we subcontract a few of these projects, we will be able to stay on schedule.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "conj. 連接詞",
                "meaning": "If",
                "correct": true,
                "reason": "【正確】conj. 連接詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "conj. 連接詞",
                "meaning": "Whereas",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Till",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Whether",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 19,
          "range": "",
          "page": 2,
          "question": "Though the competition was stiff, I managed ______ the administration position through hard work.",
          "options": {
            "A": "securing",
            "B": "to secure",
            "C": "secured",
            "D": "securest"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Though the competition was stiff, I managed to secure the administration position through hard work.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "securing",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "to secure",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "secured",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "securest",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 20,
          "range": "",
          "page": 2,
          "question": "Considering this is a very important decision, we ______ up our minds yet, so we still need time to think it over.",
          "options": {
            "A": "didn't make",
            "B": "made",
            "C": "haven't made",
            "D": "hadn't been making"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Considering this is a very important decision, we haven't made up our minds yet, so we still need time to think it over.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "didn't make",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "made",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "haven't made",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "hadn't been making",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 21,
          "range": "",
          "page": 2,
          "question": "At this job, you'll need to cope with multiple projects simultaneously, so ______ is a necessary skill if you want to be successful.",
          "options": {
            "A": "multitasks",
            "B": "multitasked",
            "C": "multitask",
            "D": "multitasking"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：At this job, you'll need to cope with multiple projects simultaneously, so multitasking is a necessary skill if you want to be successful.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "multitasks",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "multitasked",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "multitask",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "multitasking",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 22,
          "range": "",
          "page": 2,
          "question": "We have two dogs and a cat, as we are really ______ animals in our household.",
          "options": {
            "A": "keen to",
            "B": "fond of",
            "C": "far from",
            "D": "passed by"
          },
          "answer": "B",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：We have two dogs and a cat, as we are really fond of animals in our household.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "keen to",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "fond of",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "far from",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "passed by",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 27,
          "range": "",
          "page": 2,
          "question": "Have we ______ the warehouse about the problem with the recent shipments?",
          "options": {
            "A": "contacted",
            "B": "contented",
            "C": "connected",
            "D": "contracted"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Have we contacted the warehouse about the problem with the recent shipments?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "contacted",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "contented",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "connected",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "contracted",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 32,
          "range": "31 ",
          "page": 3,
          "question": "Thus, these investors have rushed to fortify their wealth by ______ their assets via international investments.",
          "options": {
            "A": "divesting",
            "B": "diverging",
            "C": "dispelling",
            "D": "diversifying"
          },
          "answer": "D",
          "explanation": {
            "focus": "被動語態與時態判斷",
            "type": "動詞語態 (Passive Voice)",
            "translation": "完整句子意指：Thus, these investors have rushed to fortify their wealth by diversifying their assets via international investments.",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "divesting",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "diverging",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "dispelling",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "diversifying",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 33,
          "range": "31",
          "page": 3,
          "question": "[Context paragraph] ______ Despite these recent efforts on the government's part, many analysts predict that the flood of international Chinese investments will only ebb temporarily...",
          "options": {
            "A": "These rising commodity prices have led to more than a few countries instituting strict limits on foreign investment.",
            "B": "However, the Chinese government has recently implemented additional capital controls in an attempt to encourage domestic investments.",
            "C": "Fortunately, the predicted prosperity China will enjoy as the currency gains strength will fuel a bright future for the economic giant.",
            "D": "Despite losing everything, many investors say they remain undeterred in their pursuit of building their wealth in the real estate market."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Context paragraph] However, the Chinese government has recently implemented additional capital controls in an attempt to encourage domestic investments. Despite these recent efforts on the government's part, many analysts predict that the flood of international Chinese investments will only ebb temporarily...",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "These rising commodity prices have led to more than a few countries instituting strict limits on foreign investment.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "However, the Chinese government has recently implemented additional capital controls in an attempt to encourage domestic investments.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Fortunately, the predicted prosperity China will enjoy as the currency gains strength will fuel a bright future for the economic giant.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Despite losing everything, many investors say they remain undeterred in their pursuit of building their wealth in the real estate market.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 34,
          "range": "31 ",
          "page": 3,
          "question": "...many analysts ______ that the flood of international Chinese investments will only ebb temporarily, meaning a more effective long-term solution is needed.",
          "options": {
            "A": "predict",
            "B": "prediction",
            "C": "predictable",
            "D": "predictably"
          },
          "answer": "A",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：...many analysts predict that the flood of international Chinese investments will only ebb temporarily, meaning a more effective long-term solution is needed.",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "predict",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "prediction",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "predictable",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "predictably",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 35,
          "range": "35",
          "page": 3,
          "question": "Although it may seem counterproductive, an hour of exercise a day may allow you to ______ more than if you had simply sat for that hour and continued trying to get work done.",
          "options": {
            "A": "assess",
            "B": "oversee",
            "C": "sustain",
            "D": "accomplish"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Although it may seem counterproductive, an hour of exercise a day may allow you to accomplish more than if you had simply sat for that hour and continued trying to get work done.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "assess",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "oversee",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "sustain",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "accomplish",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 36,
          "range": "35",
          "page": 3,
          "question": "[Paragraph opening] ______ For one, exercise reduces stress and causes your brain to release endorphins and dopamine.",
          "options": {
            "A": "If you have a large amount of work to do, portioning it off into smaller groups of tasks may help you get it done sooner and better.",
            "B": "According to many medical and psychological studies, the effects of exercise on one's mental capacity are beneficial and numerous.",
            "C": "Flexing your wrists, hands, and fingers is key to preventing repetitive stress injuries.",
            "D": "One strategy is to alternate between a standing and squatting position at your desk until your muscles warm up."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：[Paragraph opening] According to many medical and psychological studies, the effects of exercise on one's mental capacity are beneficial and numerous. For one, exercise reduces stress and causes your brain to release endorphins and dopamine.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "If you have a large amount of work to do, portioning it off into smaller groups of tasks may help you get it done sooner and better.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "According to many medical and psychological studies, the effects of exercise on one's mental capacity are beneficial and numerous.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Flexing your wrists, hands, and fingers is key to preventing repetitive stress injuries.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "One strategy is to alternate between a standing and squatting position at your desk until your muscles warm up.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 37,
          "range": "35.38",
          "page": 3,
          "question": "Additionally, working ______ has been proven to increase creativity, focus, and memory capacity.",
          "options": {
            "A": "in",
            "B": "out",
            "C": "down",
            "D": "up"
          },
          "answer": "B",
          "explanation": {
            "focus": "同源詞詞性辨析",
            "type": "詞性選擇 (Parts of Speech)",
            "translation": "完整句子意指：Additionally, working out has been proven to increase creativity, focus, and memory capacity.",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "in",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "out",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "down",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "up",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。詞性不符此處空格之句法功能要求，無法作正確之修飾或擔任句子主要成分。"
              }
            }
          }
        },
        {
          "id": 38,
          "range": "35.38",
          "page": 3,
          "question": "So the next time you're feeling uninspired or ______ down, take some time (an hour or so) to run, do some push-ups, or tone that stomach.",
          "options": {
            "A": "grinding",
            "B": "grinds",
            "C": "grind",
            "D": "ground"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：So the next time you're feeling uninspired or ground down, take some time (an hour or so) to run, do some push-ups, or tone that stomach.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "grinding",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "grinds",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "grind",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "ground",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 40,
          "range": "39",
          "page": 4,
          "question": "A degree in mass communications, media, or a similar field is ______ .",
          "options": {
            "A": "preferring",
            "B": "prefers",
            "C": "preferable",
            "D": "preference"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：A degree in mass communications, media, or a similar field is preferable .",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "preferring",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "prefers",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "preferable",
                "correct": true,
                "reason": "【正確】adj. 形容詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "preference",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 41,
          "range": "39 ",
          "page": 4,
          "question": "",
          "options": {
            "A": "at all times",
            "B": "in good time",
            "C": "ahead of time",
            "D": "in real time"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "at all times",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "in good time",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "ahead of time",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "in real time",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 44,
          "range": "43.46",
          "page": 4,
          "question": "ghly",
          "options": {
            "A": "included",
            "B": "inclusion",
            "C": "including",
            "D": "to include"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：ghly",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "included",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "inclusion",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "including",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "to include",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 45,
          "range": "43",
          "page": 4,
          "question": "dare",
          "options": {
            "A": "discretion",
            "B": "deduction",
            "C": "transaction",
            "D": "complelion"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：dare",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "discretion",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "deduction",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "transaction",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "complelion",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 46,
          "range": "43.46",
          "page": 4,
          "question": "revisions.",
          "options": {
            "A": "Fixes will be made on the day of recording.",
            "B": "Fixes will not require additional performance.",
            "C": "All fixes do not warrant additional payment.",
            "D": "The freelancer may choose lo forgo any and all"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：revisions.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Fixes will be made on the day of recording.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Fixes will not require additional performance.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "All fixes do not warrant additional payment.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The freelancer may choose lo forgo any and all",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 47,
          "range": "47.48",
          "page": 5,
          "question": "What is the reason for the recall?",
          "options": {
            "A": "It is too expensive.",
            "B": "It is dangerous.",
            "C": "They are out of stock.",
            "D": "They want to upgrade the products."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is the reason for the recall?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is too expensive.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is dangerous.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "They are out of stock.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "They want to upgrade the products.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 48,
          "range": "4748",
          "page": 5,
          "question": "What does Jesse V.mean when he writes,\"Let me make sure I get it\"? possible. announcement.",
          "options": {
            "A": "He wants to receive the replacement as soon as",
            "B": "He wants to clarify something about the",
            "C": "He wants to be sure the company refunds the model",
            "D": "He wants to order a new product from the company."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What does Jesse V.mean when he writes,\"Let me make sure I get it\"? possible. announcement.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He wants to receive the replacement as soon as",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He wants to clarify something about the",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He wants to be sure the company refunds the model",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He wants to order a new product from the company.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 50,
          "range": "49 ",
          "page": 5,
          "question": "Based on his reimbursementclaims above,how could Edgar Newbower's company most effectively cut costs in the future? airport",
          "options": {
            "A": "Only send him to local conferences",
            "B": "Restrict him to only the cheapest hotels",
            "C": "Stop sending him on corporate luncheons",
            "D": "Have him use his own vehicle to meet clients at the"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Based on his reimbursementclaims above,how could Edgar Newbower's company most effectively cut costs in the future? airport",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Only send him to local conferences",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Restrict him to only the cheapest hotels",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Stop sending him on corporate luncheons",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Have him use his own vehicle to meet clients at the",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 58,
          "range": "58",
          "page": 7,
          "question": "What service is NOT provided by HostBoard? al te",
          "options": {
            "A": "Automated payment",
            "B": "Customer support",
            "C": "Web site domain registration",
            "D": "Domain monetization"
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：What service is NOT provided by HostBoard? al te",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "Automated payment",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Customer support",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "Web site domain registration",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "Domain monetization",
                "correct": true,
                "reason": "【正確】n. 名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 62,
          "range": "61 ",
          "page": 8,
          "question": "What is NOT a change put forth by the city?",
          "options": {
            "A": "Garbage collection days",
            "B": "Bin collection time",
            "C": "Recycling collection routes",
            "D": "Cart collection time"
          },
          "answer": "A",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is NOT a change put forth by the city?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Garbage collection days",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Bin collection time",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Recycling collection routes",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Cart collection time",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 63,
          "range": "61",
          "page": 8,
          "question": "What does Hamid imply when he writes, \"Hopefully they don't burn down the whole city\"?",
          "options": {
            "A": "The fire department will be needed.",
            "B": "There is an issue with fire prevention.",
            "C": "The new employees might get themselves hurt.",
            "D": "The new employees have little to no experience."
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What does Hamid imply when he writes, \"Hopefully they don't burn down the whole city\"?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The fire department will be needed.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "There is an issue with fire prevention.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The new employees might get themselves hurt.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The new employees have little to no experience.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 64,
          "range": "61 ",
          "page": 8,
          "question": "Where must carts be located under the new guidelines?",
          "options": {
            "A": "1.5 meters from other objects",
            "B": "One meter from other objects",
            "C": "2.5 meters fromother objects",
            "D": "Two meters from other objects"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Where must carts be located under the new guidelines?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "1.5 meters from other objects",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "One meter from other objects",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2.5 meters fromother objects",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Two meters from other objects",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 66,
          "range": "65",
          "page": 9,
          "question": "What can be inferred to have happened? country. supplier.",
          "options": {
            "A": "Frank's company needs an advance on a loan.",
            "B": "Frank's cornpany haseiperignced an accident.",
            "C": "Frank's company has fost stock in the south of the",
            "D": "Frank's company is now purchasing from a different"
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What can be inferred to have happened? country. supplier.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Frank's company needs an advance on a loan.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Frank's cornpany haseiperignced an accident.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Frank's company has fost stock in the south of the",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "Frank's company is now purchasing from a different",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 67,
          "range": "65",
          "page": 9,
          "question": "What is going to happen at the end of the next quarter? discount. company. from Frank's company.",
          "options": {
            "A": "Harriet's company will move to Montana.",
            "B": "Harriet's company will offer Frank's company a",
            "C": "Harriet's company will stop working with Frank's",
            "D": "Harriet's company will stop purchasing dental floss"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What is going to happen at the end of the next quarter? discount. company. from Frank's company.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Harriet's company will move to Montana.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Harriet's company will offer Frank's company a",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Harriet's company will stop working with Frank's",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Harriet's company will stop purchasing dental floss",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 68,
          "range": "68",
          "page": 9,
          "question": "What does the reviewer imply about this movie? sic",
          "options": {
            "A": "It is very well acted",
            "B": "It won several awards",
            "C": "It should not be on television.",
            "D": "It is so bad that it is enjoyable."
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What does the reviewer imply about this movie? sic",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "It is very well acted",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It won several awards",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It should not be on television.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "It is so bad that it is enjoyable.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 70,
          "range": "68.71",
          "page": 9,
          "question": "go, What best describes the reviewor's opinion of the e, plot of this movie?",
          "options": {
            "A": "Complex",
            "B": "Saddening",
            "C": "Unbolievabte",
            "D": "Disrespecttul"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：go, What best describes the reviewor's opinion of the e, plot of this movie?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Complex",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "Saddening",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Unbolievabte",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Disrespecttul",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 71,
          "range": "68.71",
          "page": 9,
          "question": "Why does tha revlewer think Victoria Rule's situation Is 6ad?",
          "options": {
            "A": "She has never been successtut",
            "B": "Shnused tobearespected nctiess",
            "C": "She was once the wite of a president",
            "D": "She contintues to play similar characters."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Why does tha revlewer think Victoria Rule's situation Is 6ad?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She has never been successtut",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Shnused tobearespected nctiess",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "She was once the wite of a president",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She contintues to play similar characters.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 78,
          "range": "76 ",
          "page": 11,
          "question": "What seems to be Sue Doenim's scheme?",
          "options": {
            "A": "Getting people to pay her rent for her",
            "B": "Overcharging people to stay in a bad apartment",
            "C": "Luring people into her apartment and robbing them",
            "D": "Tricking people into sending her money for nothing"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What seems to be Sue Doenim's scheme?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "Getting people to pay her rent for her",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "Overcharging people to stay in a bad apartment",
                "correct": false,
                "reason": "【錯誤】n. 名詞。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Luring people into her apartment and robbing them",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "Tricking people into sending her money for nothing",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 80,
          "range": "76",
          "page": 11,
          "question": "Who did Michelle contact before responding to Sue Doenim?",
          "options": {
            "A": "A lawyer",
            "B": "Her bank",
            "C": "The police",
            "D": "Her current landlord"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Who did Michelle contact before responding to Sue Doenim?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "A lawyer",
                "correct": false,
                "reason": "【錯誤】n. 名詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Her bank",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "The police",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Her current landlord",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 82,
          "range": "81",
          "page": 12,
          "question": "Why did Glen lose his wedding ring?",
          "options": {
            "A": "He dropped it while playing with it.",
            "B": "He lost it while reeling in a big fish.",
            "C": "He threw it into the lake while angry.",
            "D": "He lost it while practicing a martial art."
          },
          "answer": "D",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：Why did Glen lose his wedding ring?",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He dropped it while playing with it.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He lost it while reeling in a big fish.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He threw it into the lake while angry.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "He lost it while practicing a martial art.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 86,
          "range": "86",
          "page": 13,
          "question": "In the advertisement, the word \"demo\" in paragraph 1 is closest in meaning to",
          "options": {
            "A": "best",
            "B": "first",
            "C": "example",
            "D": "only"
          },
          "answer": "C",
          "explanation": {
            "focus": "商務情境核心字彙與語意辨析",
            "type": "詞彙與商務語境 (Business Vocabulary & Collocation)",
            "translation": "完整句子意指：In the advertisement, the word \"demo\" in paragraph 1 is closest in meaning to",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "best",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "first",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "example",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "only",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。放入句中語意不合邏輯，或與前後文字不構成標準慣用搭配。"
              }
            }
          }
        },
        {
          "id": 90,
          "range": "86",
          "page": 13,
          "question": "What really surprised Janice about the estimate? ck ate t is,",
          "options": {
            "A": "How expensive the retaining wall will be",
            "B": "How cheap the fence will be",
            "C": "How long it took to get the estimate",
            "D": "How few people wll be needed"
          },
          "answer": "D",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What really surprised Janice about the estimate? ck ate t is,",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How expensive the retaining wall will be",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How cheap the fence will be",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "How long it took to get the estimate",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "How few people wll be needed",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              }
            }
          }
        },
        {
          "id": 91,
          "range": "91",
          "page": 14,
          "question": "Who might this product be aimed at?",
          "options": {
            "A": "An artist with a heavy workload",
            "B": "A traveler who has a lot of luggage",
            "C": "Aperson who engages in fighting sports",
            "D": "A jewelry designer facing challenging conditions"
          },
          "answer": "C",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：Who might this product be aimed at?",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "An artist with a heavy workload",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "A traveler who has a lot of luggage",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Aperson who engages in fighting sports",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "A jewelry designer facing challenging conditions",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        },
        {
          "id": 93,
          "range": "91 ",
          "page": 14,
          "question": "What do we know about Wilma? SS.",
          "options": {
            "A": "Her e-mail was accompanied by an attachment.",
            "B": "She contacted the wrong department.",
            "C": "She e-mailed Keith directly.",
            "D": "Her message was ignored by Fighting Spirit."
          },
          "answer": "B",
          "explanation": {
            "focus": "動詞時態與主詞一致性",
            "type": "動詞時態與變化 (Verb Tense & Agreement)",
            "translation": "完整句子意指：What do we know about Wilma? SS.",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Her e-mail was accompanied by an attachment.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She contacted the wrong department.",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。語意完全吻合題目上下文商務脈絡，在文法結構、詞性要求與時態搭配上均完全符合規範。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "She e-mailed Keith directly.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Her message was ignored by Fighting Spirit.",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。時態或動詞形態與前後句不一致，產生時態矛盾或主謂不一致。"
              }
            }
          }
        }
      ]
    }
  ]
};
