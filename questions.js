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
            "translation": "丹尼爾濫用了新授予的權力，對其他員工非常粗魯，從此失去了老闆的好感。",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "濫權",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「濫權」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "濫用",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「濫用」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "被虐待",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「被虐待」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "正在濫用",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「正在濫用」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "展覽開幕時，賓客們享用了免費香檳。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們自己",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他們自己」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他們的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他們」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他們」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "因為我的教授知道我一直很忙，所以他仁慈地延長了我研究論文的截止日期。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "冷酷無情地",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「冷酷無情地」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "仁慈地",
                "correct": true,
                "reason": "【正確】adv. 副詞。意為「仁慈地」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "adv. 副詞",
                "meaning": "惡意地",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「惡意地」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "瘋狂地",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「瘋狂地」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們正在尋找一位男性演員來扮演我們即將上映的電影中主角的有趣但不有吸引力的最好的朋友。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "新鮮的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「新鮮的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "女性",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「女性」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "吸引人的",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「吸引人的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "幾何的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「幾何的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們想要一個看起來友善但不令人生畏的人。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "令人生畏的",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「令人生畏的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "恐嚇",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「恐嚇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "受到恐嚇",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「受到恐嚇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "恐嚇",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「恐嚇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "通常我不會寫建議專欄，但最近我覺得自己沒有方向。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "服務",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「服務」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "沒有什麼",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「沒有什麼」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "方向",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「方向」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "可能性",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「可能性」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空，依上下文商務語境選出最適當之形容詞「歷史性的 (historical)」。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "幽靈般的",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「幽靈般的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "音樂",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「音樂」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "虛構的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「虛構的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "歷史的",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「歷史的」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "本題為段落填空，依據句子主詞與動詞時態被動語態要求，選出符合句構之動詞型態。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "信仰",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「信仰」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "相信",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「相信」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "相信",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「相信」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "被相信",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「被相信」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "本題為段落填空，依據句中謂語動詞搭配，選出正確之非謂語動詞形態 (to incorporate)。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "合併",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「合併」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "併入",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「併入」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "合併",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「合併」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "合併",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「合併」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "現在是土耳其克勞斯的一部分的地區。基督教文化要求孩子在平安夜表現良好。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "聖尼古拉斯出生於帕拉拉村，",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「聖尼古拉斯出生於帕拉拉村，」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這完全是ovolvod 進入英語化的Sann",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「這完全是ovolvod 進入英語化的Sann」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "聖誕老人是西方傳說中的利古里亞人",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「聖誕老人是西方傳說中的利古里亞人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "按照傳統，聖誕老人會帶給人們禮物",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「按照傳統，聖誕老人會帶給人們禮物」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "Doris May (4 月 6 日星期六 18:56) 我需要一些關於管理我的團隊的建議。無論我給他們什麼項目，他們似乎都很難按時完成。 1能做什麼？ Susan Reynolds (4 月 7 日星期日 10:01) 聽起來你沒有給他們足夠的結構。將項目分成更小的部分。 Mike Hays（4 月 7 日星期日 13:15） 我同意 Susan 的觀點。我還想補充一點，你應該確保避免把更大的任務留到最後。你的團隊將沒有時間了。 Doris May（4 月 7 日星期日 14:07）@Mike 我聽到你的聲音了。如何在不照顧他們的情況下設定硬性限制？ Patricia Wells（4 月 7 日星期日 18:54）@Doris 有些員工無論如何都會表現不佳。我建議表揚/獎勵最有生產力的團隊成員。很快其他人也會跟著做。 Doris May（4 月 7 日星期日 19:17）@Patricia 太棒了，謝謝！寄送 肯德拉·利普尼斯基夫人的香蕉核桃鬆餅 2 個雞蛋 1/2 杯軟化黃油 1 和 1/2 杯紅糖 4 湯匙酪乳 -1 茶匙小蘇打 1 茶匙香草精 1 又 1/2 杯麵粉（最好過篩） .2 根，碎，搗碎 1 杯或碎油脂罐上 1 杯堅果（您喜歡的篩）塊。 4.加入酪乳，攪拌，然後加入雞蛋，然後加入香蕉泥。 5.加入麵粉和小蘇打，攪拌混合。 8.加入核桃塊攪拌。 I 7.將麵糊倒入鬆餅Un中，直到每個模具約213滿。 8. 在 350'F 下烘烤 20-25 分鐘，或直到垂耳肉變成棕色。 9. 另外，可以將牙籤插入鬆餅的中心作為測試。如果出來的乾淨的話。然後鬆餅就做好了。營養資訊（每個鬆餅）：Calorles-238；脂肪-11g：碳水化合物-32g：纖維-1g：蛋白質-3g",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "將烤箱預熱至 350*F (175°C)。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「將烤箱預熱至 350*F (175°C)。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "將奶油和糖打成奶油狀。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「將奶油和糖打成奶油狀。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "4 月 7 日 14:07，多麗絲·梅 (Doris May) 寫道“我聽到你的聲音”是什麼意思？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她收到一封語音郵件",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她收到一封語音郵件」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她明白。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「她明白。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她不同意",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她不同意」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "她希望他們進一步解釋",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「她希望他們進一步解釋」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "食譜中沒有建議的一種方法可以用來檢查鬆餅是否熟了？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "考慮到總的烘烤時間",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「考慮到總的烘烤時間」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "用牙籤戳鬆餅",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「用牙籤戳鬆餅」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "觀察鬆餅頂部的顏色",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「觀察鬆餅頂部的顏色」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "用手觸摸鬆餅，看看鬆餅是否鬆軟",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「用手觸摸鬆餅，看看鬆餅是否鬆軟」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "下列哪一種成分替代不會破壞食譜？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加鹽代替糖",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加鹽代替糖」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "加入橄欖油代替奶油",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「加入橄欖油代替奶油」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加入糖粉代替麵粉",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加入糖粉代替麵粉」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "添加花生代替核桃",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「添加花生代替核桃」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "鲍蒙特市政厅举办的小型企业研讨会最初发布：11/15 11:54:44 PM MDT I 更新：5 小时前 明天是鲍蒙特市商业协会持续举办的一系列免费小型企业研讨会一周年纪念日。該市很高興地宣布，針對中小企業主或任何希望在鮑蒙特創辦自己公司的人的系列研討會將重新舉辦。研討會將於每月的第三個斷奶日舉行。 Tme First 将于明天 11 月 21 日在市政厅举办，据当地企业的创始人、经理介绍，预计将展出大量有关当地企业的成功宝石。和創新員工。每場免費課程將於晚上 7 點開始，一直持續到晚上 9 點。這些會議是與 Bowmonte Financial Expansion Partnership 和位於 Bowmonte 的網路組織「Business Besties」合作舉辦的。不能親自去嗎？今年。我們也很高興提供網路研討會選項。我們將透過整合的聊天功能對研討會進行直播，觀眾可以在研討會的問答部分即時發布他們的問題。要加入，只需访问：bowmonteaityall.com/ive 与去年不同的是，这波研讨会将被记录下来，因此您可以查看我们的在线数据库并回顾以前的研讨会：bowmontecityhau.com/seminars/archives 不需要注册。卡門紙杯蛋糕訂單表 MDC - 2085 訂單號 Wright！ Fielder 全名： 姓 名 1992 16 11 出生日期： 日 年 月 电子邮件：*f.wnight@crestwalkfoundation.com 手机/电话号码.01-555-222-5258 纸杯蛋糕口味（至少 2 打） 香草 10 巧克力 椰子胡萝卜蛋糕 花生酱糖霜（可选）： 12 花生酱 奶油奶酪 黑巧克力 牛奶巧克力Strawbey Mint 2016 30 取貨日期/月：10 年 日 月 30 11 分鐘 JNOH 特別說明：雖然花生很好。請確保紙杯蛋糕中沒有添加杏仁或腰果 注意：提貨後 48 小時內取消訂單仍將導致客戶被全額扣款。",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "上午 / 下午（時間標記）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「M.I.P.M.」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "在滿足他的訂單之前，菲爾德可能需要做什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他得買更多的紙杯蛋糕。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他得買更多的紙杯蛋糕。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他必須改變糖衣類型。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他必須改變糖衣類型。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他必須更改接機時間。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他必須更改接機時間。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他必須提供更多個人資訊。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他必須提供更多個人資訊。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "章魚（任何形式的亞種）是一種令人著迷的生物。眾所周知，它有 elghtentacles，因此它的名字中有 octo' 前綴，但它也有 3 個 heans。喙、毒液、可以排出用於防禦的墨水，但沒有骨頭。由於沒有骨頭，章魚可以擠進極度狹小的空間。 2)--章魚也可以透過吸收和排出體內的水來推動自己。甚至可以使失去的肢體再生。但也許最令人印象深刻。章魚擁有世界上任何動物中最快速的物理偽裝能力。 -f3j 章魚也被認為是所有無脊椎動物中最聰明的。展現短期和長期記憶以及複雜的定向和解決問題的能力。許多研究章魚的人聲稱它們也會玩耍、使用工具。從經驗中學習。並且能夠區分人與人。章魚甚至會表現出偏好，游向它們喜歡的人，並且 ★,-th',uop Kon aidoad e jajem soniur Buninbs 日期（月/日/年）：2016 年 6 月 16 日 Cass：Entrepreneurship101 [11213 為什麼？雖然我學到了很多東西，但我覺得我可以在給定的時間內學習更多的內容，或者在更少的時間內學習相同的內容。 2.您如何評價您的教授？第1234章 為什麼？他雖然知識淵博，但說話太小聲，有時甚至遲到。我們在現場解決問題的實踐工作提供了非常豐富的資訊。 4、您認為哪些方面需要改進？有些講座僅基於理論，因此似乎與真正的奇蹟無關。結果，我很難記住所教的內容。 5.還有其他意見或建議嗎？我真的更喜歡更少的講座和更少基於理論的閱讀。如果課程能有更多實作的項目，那就太好了。",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "您如何評價這門課？",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「您如何評價這門課？」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "你最喜歡這門課的什麼？",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「你最喜歡這門課的什麼？」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "學生最有可能的學習方式是什麼？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "視覺的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「視覺的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "動覺",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「動覺」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "聽覺",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「聽覺」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "消極的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「消極的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "學生對基於理論的學習有何感受？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它的實際應用很少。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「它的實際應用很少。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "因為抽象，所以很容易記住。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「因為抽象，所以很容易記住。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "學習現實世界技能是必要的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「學習現實世界技能是必要的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "以上都不是",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「以上都不是」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "什麼最能概括學生對班級的感受？有時晚了 Wasto ot tirne",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "基本滿意，但仍持批評態度",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「基本滿意，但仍持批評態度」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "大部分不滿意，但仍充滿希望",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「大部分不滿意，但仍充滿希望」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "非常生氣，因為老師是",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「非常生氣，因為老師是」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "完全不滿意，因為這門課是",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「完全不滿意，因為這門課是」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "根據這篇文章，庫尼亞的反對者指責他什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "成為沙文主義者",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「成為沙文主義者」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "不道德地利用某種情況",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「不道德地利用某種情況」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "轉移資金填補赤字",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「轉移資金填補赤字」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "非法贏得總統職位",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「非法贏得總統職位」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "根據這篇文章，我們可以對羅塞夫做出什麼假設？性別。原因。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她目前在自己的國家不受歡迎",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「她目前在自己的國家不受歡迎」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "她確實已被證明犯有腐敗罪",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「她確實已被證明犯有腐敗罪」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "她因為她的行為而被不公正地除名",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「她因為她的行為而被不公正地除名」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "她因政治原因被公眾驅逐",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「她因政治原因被公眾驅逐」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "誰或什麼最有可能是發言者？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "辦公室職員",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「辦公室職員」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "大學生",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「大學生」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "高中生",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「高中生」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "家庭成員",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「家庭成員」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "晚上 10 點 39 分，M.Borton 寫道：「難道你沒看到 Alex 錯過最後期限時他的反應嗎？」他暗示了什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "帕特·戈爾對一名員工感到憤怒。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「帕特·戈爾對一名員工感到憤怒。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "蔣工作時不專心。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「蔣工作時不專心。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "博頓先生想知道彼得的反應",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「博頓先生想知道彼得的反應」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "博頓先生不確定他的同事是否都在工作。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「博頓先生不確定他的同事是否都在工作。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "關於撤退地點可以假設什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "開車即可抵達。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「開車即可抵達。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這是在沙漠中。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「這是在沙漠中。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它在一個島上。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「它在一個島上。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它在山裡。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它在山裡。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "布萊恩在哪裡留下了他的便條？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在他的辦公室裡",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「在他的辦公室裡」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在回收箱上",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「在回收箱上」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "在人家門口",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「在人家門口」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在垃圾上面",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「在垃圾上面」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "如果布萊恩不知道誰在垃圾桶裡丟垃圾，他打算如何找出他們是誰？個人資訊。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他會在垃圾桶旁邊等著",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他會在垃圾桶旁邊等著」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他會詢問大樓的業主。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他會詢問大樓的業主。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他會查閱他隱藏的攝影機。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他會查閱他隱藏的攝影機。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他會翻遍垃圾來發現他們的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他會翻遍垃圾來發現他們的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "布萊恩認為這種情況最惱人的細節是什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他必須寫粗魯的筆記",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他必須寫粗魯的筆記」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他必須對垃圾進行分類",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他必須對垃圾進行分類」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "他可能不得不驅逐某人",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「他可能不得不驅逐某人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "這個人不關心環境",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「這個人不關心環境」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "以下句子最適合標記為 [1]、[2]、[3] 和 [4] 的位置中的哪一個？ “每次這樣做時，我都有責任進行回收並分類。”",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [1]",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「[1] 的含義」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [2]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[2] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [3]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[3] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [4]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[4] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "卡爾麥凱對這部電影的整體印像如何？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "做得很好，儘管有缺陷",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「做得很好，儘管有缺陷」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "不如同一類型的其他人",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「不如同一類型的其他人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "對故事來說太諷刺了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「對故事來說太諷刺了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "對於超級英雄電影來說太嚴肅",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「對於超級英雄電影來說太嚴肅」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "從段落我們可以推論出什麼？蝙蝠俠的人物",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "評論家都討厭漫畫書",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「評論家都討厭漫畫書」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "審稿人為不同的媒體撰寫文章",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「審稿人為不同的媒體撰寫文章」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "審稿者可能會為新聞部分撰寫文章",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「審稿者可能會為新聞部分撰寫文章」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "審稿者的觀點一致",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「審稿者的觀點一致」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "為什麼凱特琳想要布魯姆斯伯里教授擔任第二顧問？她的論文。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "教授將帶來不同的觀點",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「教授將帶來不同的觀點」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "教授的聲譽會增加人們的興趣",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「教授的聲譽會增加人們的興趣」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "教授可以幫她分析數據",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「教授可以幫她分析數據」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "以上所有",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「以上所有」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "在這種情況下，以下哪一個替換最接近“令我滿意”的同義詞？紀律）",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如果你能解釋一下（我很高興）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如果你能解釋一下（我很高興）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如果你能解釋一下（我很受寵若驚）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如果你能解釋一下（我很受寵若驚）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如果你能解釋一下（我確信）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「如果你能解釋一下（我確信）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如果你能解釋一下（使用適合我的修辭",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如果你能解釋一下（使用適合我的修辭」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "哪個使用者可能就讀於巴克利高中？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "我愛貓99",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「我愛貓99」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "吉米星塵29",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「吉米星塵29」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "史蒂文哈斯權力55",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「史蒂文哈斯權力55」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "珍妮愛游泳11",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「珍妮愛游泳11」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "根據「反對它」部分的兩位網友的說法，到底是什麼導致了兒童肥胖呢？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "改變生物學",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「改變生物學」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "糖和反式脂肪",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「糖和反式脂肪」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "不負責任的父母",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「不負責任的父母」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "破碎的教育體系",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「破碎的教育體系」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "下列哪一項敘述最能概括使用者 JennyLovesSwimming11 所提出的論點？更不負責任。習得的責任確實如此。政策可以被操縱",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "肥胖是一個不可阻擋的世代問題。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「肥胖是一個不可阻擋的世代問題。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "美國人不會承認他們正在成為",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「美國人不會承認他們正在成為」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "限制並不能阻止不良行為，",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「限制並不能阻止不良行為，」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "透過改變父母的時代精神，政府",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「透過改變父母的時代精神，政府」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們將在早上聚集在一起，討論接下來幾天的策略。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "從事",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「從事」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "收集",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「收集」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "解釋",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「解釋」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "等待",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「等待」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "該男子太專注於電視節目，以至於沒有聽到有人叫他的名字。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "輕鬆",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「輕鬆」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "已訂婚的",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「已訂婚的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "吸引人的",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「吸引人的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "訂婚",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「訂婚」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我需要一個信譽良好的承包商來修理我們後院漏水的游泳池。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "有爭議的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「有爭議的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "有信譽的",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「有信譽的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "對立的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「對立的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "可感知的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「可感知的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "商店將在 15 分鐘後關門。請選擇您要購買的商品並前往收銀台。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "選擇",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「選擇」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "被選擇",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「被選擇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "選擇",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「選擇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "將要選擇",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「將要選擇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "Letitia 的收件匣中收到了大量垃圾郵件，以至於她錯過了重要的電子郵件。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "垃圾郵件",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「垃圾郵件」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "補習班",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「補習班」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "線索",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「線索」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一時興起",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一時興起」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "從 1 月 1 日開始，百思達航空將開通從東京飛往新加坡、吉隆坡、奧克蘭和雪梨的航班。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "已經飛了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「已經飛了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "將會飛翔",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「將會飛翔」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "飛了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「飛了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "會飛",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「會飛」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "整個 1 月份，所有經濟艙乘客都將享有 50% 折扣的優質服務套餐。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "票",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「票」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "金融的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「金融的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "經濟",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「經濟」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "估計的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「估計的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "【促銷詳情】只需在入住時輸入折扣碼BEST50JAL16即可。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "只需在辦理入住時輸入折扣代碼 BEST50JAL16 即可。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「只需在辦理入住時輸入折扣代碼 BEST50JAL16 即可。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "價格上漲將根據購買日期而定。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「價格上漲將根據購買日期而定。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在聖誕假期期間充分利用這項特別優惠。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「在聖誕假期期間充分利用這項特別優惠。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "新公車路線的座位有限，所以請立即購買。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「新公車路線的座位有限，所以請立即購買。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "注意：該區域有扒手活動。請保管好您的貴重物品，不要讓您的物品無人看管。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "通常在給錢之前先詢問他們。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「通常在給錢之前先詢問他們。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "早起的鳥兒可以先體驗它。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「早起的鳥兒可以先體驗它。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "該地區有扒手活動。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「該地區有扒手活動。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "旅行者可能有機會拍下這一罕見景象的照片。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「旅行者可能有機會拍下這一罕見景象的照片。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "請保管好您的貴重物品，不要讓您的物品無人看管。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "服務生",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「服務生」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "不專心",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「不專心」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "出席",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「出席」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "無人看管的",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「無人看管的」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "當日超過600名持票人滯留，影響24條國內及國際航線。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "持有者",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「持有者」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "規劃者",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「規劃者」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "旅行者",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「旅行者」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "消費者",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「消費者」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "【航空公司歷史】第一次是在2014年，第二次是兩個月後和一年後。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "該航空公司此前從未經歷過此類事件。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「該航空公司此前從未經歷過此類事件。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "人們不禁想知道四起事故是如何發生的。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「人們不禁想知道四起事故是如何發生的。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "第一次是在2014年，另一次是兩個月後和一年後。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「第一次是在2014年，另一次是兩個月後和一年後。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這在三年的時間裡被認為是不可接受的。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「這在三年的時間裡被認為是不可接受的。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空，依前後文句意之轉折與補充邏輯，選出最貼切之副詞連接詞。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adv. 副詞",
                "meaning": "實際上",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「實際上」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "相似地",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「相似地」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adv. 副詞",
                "meaning": "另外",
                "correct": true,
                "reason": "【正確】adv. 副詞。意為「另外」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "最後",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「最後」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空，依引導名詞子句或比較句型之結構選出正確連接詞。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "那",
                "correct": true,
                "reason": "【正確】pron./conj. 關係詞/代名詞。意為「那」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "比",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「比」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "conj. 連接詞",
                "meaning": "儘管",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。意為「儘管」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "因此",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「因此」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們對埃文·布萊克莫爾了解多少？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他是一個罪犯。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他是一個罪犯。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他在圖書館工作。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他在圖書館工作。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "他的借書證已過期",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「他的借書證已過期」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他忘記歸還圖書館資料",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他忘記歸還圖書館資料」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "逾期圖書的歸還日期是什麼時候？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "12月2日",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「12月2日」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "12月13日",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「12月13日」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2月28日",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「2月28日」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2月18日",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「2月18日」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "來自：penny@pennyanecom 至。主題：尋找《親愛的萊恩女士》的數位版《賽林斯的故事》。我最近讀了你的精彩著作《弦樂故事》，我非常喜歡你將如此多的歷史男性故事編織成令人愉快的個人敘述的方式。透過您對音樂家和歷史學家的採訪，我了解了很多弦樂器的歷史。我看到你也製作了一部同名紀錄片：永遠。我只能在 Dvo 上找到它 可以購買並下載它的數位檔案嗎？由於我目前經常出國旅行，因此取得實體郵件或包裹相當不方便。非常感謝您的回覆。安德魯加里森宣布舉辦第一屆恩斯伯格年度電影節！ 2017 年 6 月標誌著廣受歡迎的恩斯伯格影展的回歸。立即購買一個月的通行證，即可觀看整個電影節的每場放映，整個月每個週末總共有八部電影。今年節日的主題是家庭。像往常一樣，每部電影都必須以某種方式涉及年度主題才能獲得放映資格。然而，僅僅因為主題是家庭並不意味著每部電影都適合家庭觀看。請參閱下文以了解更多詳細資訊。節慶時間：2017年6月每週六、日下午2:00開始至晚上 11:00每張通票價格：CS200 地點：The Grace Dougherty Theatre 112Oxford Road,Ensberg British Columbia, Canada 如果您希望提交電影供考慮，請將實體副本發送至：14556E或者，將您的數位副本上傳到我們的 Dropbox 資料夾資料夾名稱：「Ensbergfilm」可透過以下郵件地址存取： enserbergfilm@cinephlle.com 我們希望見到您",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "gamson@mail.com 的含義",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「gamson@mail.com 的含義」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "電影節在哪裡舉行？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "在恩斯伯格劇院",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「在恩斯伯格劇院」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在牛津路的一家劇院",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「在牛津路的一家劇院」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "在不列顛哥倫比亞劇院",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「在不列顛哥倫比亞劇院」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在 Uniblab 街的一家劇院",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「在 Uniblab 街的一家劇院」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "此次促銷活動將持續多久？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "1個月",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「1個月」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2個月",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「2個月」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "3個月",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「3個月」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "無限期",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「無限期」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "根據書名，以下哪一本書不屬於促銷範圍？奇才金凱德",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "龍王之旅提升",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「龍王之旅提升」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "CyborgFuture 22?t:TheAge oithe Singulant) 的含義",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「CyborgFuture 22?t:TheAge oithe Singulant) 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "薩瓦戈水晶編年史The Quest rorAtore",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「薩瓦戈水晶編年史The Quest rorAtore」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "光之畫家ABlographyottheArtis! movnas",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「光之畫家ABlographyottheArtis! movnas」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "演講者主要講什麼？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "員工手冊",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「員工手冊」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "無薪加班問題",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「無薪加班問題」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "薪資問題",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「薪資問題」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "專案狀態",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「專案狀態」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "米蘭達說“這次我們在資源管理方面做得很好”，這意味著什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "球隊需要一位新的經理。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「球隊需要一位新的經理。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "團隊沒有足夠的資源。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「團隊沒有足夠的資源。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "團隊從先前的錯誤中吸取了教訓。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「團隊從先前的錯誤中吸取了教訓。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她希望將團隊的成功歸功於自己。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她希望將團隊的成功歸功於自己。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "這封信的目的是什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "伴隨購買付款",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「伴隨購買付款」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "投訴運送延誤",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「投訴運送延誤」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "查詢可能的多收費用",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「查詢可能的多收費用」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "請求對投訴採取行動",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「請求對投訴採取行動」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "文字如何描述手寫訊息？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "認真",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「認真」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "慌忙",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「慌忙」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "過時的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「過時的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "平凡",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「平凡」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "從吉納維芙身上可以學到什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如何策劃婚禮",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如何策劃婚禮」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如何舉辦晚宴",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如何舉辦晚宴」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "文具的製作方法",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「文具的製作方法」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如何創作書法",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「如何創作書法」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "哪一個最有可能是 Genevieve 的產品之一？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "一封法律信函",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「一封法律信函」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "資助提案",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「資助提案」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "派對邀請函",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「派對邀請函」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "申請表",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「申請表」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們對米蘭達了解多少？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她還在台灣。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她還在台灣。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她很可能沒有收到她的夾克。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「她很可能沒有收到她的夾克。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她可以透過郵件收到她的物品",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她可以透過郵件收到她的物品」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她將和她的朋友在台北過聖誕節",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她將和她的朋友在台北過聖誕節」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "米蘭達怎麼才能拿回她的夾克呢？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "打電話並留下她朋友的電話號碼",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「打電話並留下她朋友的電話號碼」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "填寫表格並傳真或攜帶",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「填寫表格並傳真或攜帶」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "下午 6:00 前到辦公室任何一天",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「下午 6:00 前到辦公室任何一天」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "平日早上去辦公室",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「平日早上去辦公室」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "阿黛爾·王最有可能是誰？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "地鐵上的火車司機",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「地鐵上的火車司機」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "米蘭達史密瑟斯在台北的朋友",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「米蘭達史密瑟斯在台北的朋友」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "米蘭達史密瑟斯在香港的朋友",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「米蘭達史密瑟斯在香港的朋友」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "失物招領處的一名員工",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「失物招領處的一名員工」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "第一封電子郵件中哪一個與「本質上」的意思最接近？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "戶外活動",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「戶外活動」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "本質",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「本質」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "而不是",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「而不是」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "截至目前",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「截至目前」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "該職位最有可能需要什麼樣的工作？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "撰寫履歷",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「撰寫履歷」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "管理專案",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「管理專案」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "舉起重物",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「舉起重物」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "尋找傑基的替代者",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「尋找傑基的替代者」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "平克曼先生的真實情況是什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "他的設備故障",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「他的設備故障」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他錯誤地使用了秤。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他錯誤地使用了秤。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他其實並沒有使用秤",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他其實並沒有使用秤」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他在 2 月 1 日之前訂購了秤。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他在 2 月 1 日之前訂購了秤。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "我們是預防網路犯罪的第一道防線。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "預防",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「預防」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "adj. 形容詞",
                "meaning": "防止",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「防止」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "預防",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「預防」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "預防性的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「預防性的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "當你第一次見到他時你可能看不到這一點，但比爾脾氣暴躁。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "火熱",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「火熱」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "有風的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「有風的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "土質的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「土質的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "水汪汪的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「水汪汪的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "你能告訴我為什麼你最近表現得這麼奇怪嗎？",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "為什麼",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「為什麼」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "世界衛生組織",
                "correct": false,
                "reason": "【錯誤】pron./conj. 關係詞/代名詞。意為「世界衛生組織」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "pron./conj. 關係詞/代名詞",
                "meaning": "什麼",
                "correct": false,
                "reason": "【錯誤】pron./conj. 關係詞/代名詞。意為「什麼」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "conj. 連接詞",
                "meaning": "什麼時候",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。意為「什麼時候」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "傑森正在尋找新工作，因為他覺得自己在這裡工作過度且工資過低。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "工資過低",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「工資過低」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "少付薪資",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「少付薪資」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "少付薪資",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「少付薪資」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "少付錢",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「少付錢」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "一旦我下班休息一段時間，我終於可以做一些事情並打掃我的房子了。",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "在",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「在」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "經過",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「經過」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "離開",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「離開」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "和",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「和」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "如果您想就當代國際政治進行有見地的對話，那麼了解時事就很重要。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "線人",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「線人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "知情的",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「知情的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "資訊",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「資訊」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "通知",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「通知」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "考特尼認為，由於處理錯誤，付款未能完成。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "除了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「除了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "由於",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「由於」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "按照",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「按照」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "關於",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「關於」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我不喜歡同時處理多項任務，所以我每次都會投入所有的心思和精力來處理一個重大專案。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "思考",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「思考」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "直接的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「直接的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "完全的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「完全的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "多工處理",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「多工處理」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "您不認為在這麼短的時間內完成這項工作對大多數員工來說是一個難以承受的負擔嗎？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "負擔",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「負擔」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "資源",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「資源」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "偏好、優先權",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「偏好、優先權」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "表現",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「表現」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "天啊！多麼可怕的事故。大家竟然毫髮無傷，簡直就是奇蹟！",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "沒有人",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「沒有人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "我",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「我」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "一切",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「一切」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "每個人",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「每個人」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "令人驚訝的是，截至 2016 年，特斯拉尚未獲利。",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "已經",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「已經」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "然後",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「然後」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "conj. 連接詞",
                "meaning": "然而",
                "correct": true,
                "reason": "【正確】conj. 連接詞。意為「然而」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "遠的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「遠的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "中國研究人員證明，當他們在沒有鑰匙的情況下打開車門並遠端控制煞車時，汽車可能會被駭客入侵。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "偏僻的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「偏僻的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "adv. 副詞",
                "meaning": "遠端",
                "correct": true,
                "reason": "【正確】adv. 副詞。意為「遠端」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "偏遠",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「偏遠」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "遙控器",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「遙控器」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "儘管遭遇這些挫折，特斯拉在 2016 年第三銷售季度的交付量仍大幅成長，交付了 24,500 輛汽車。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "迴音",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「迴音」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "長釘",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「長釘」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "衰變",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「衰變」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "反射",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「反射」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "[上下文結尾] 這是去年同季交付量的兩倍以上。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這是去年同期交貨量的兩倍多。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「這是去年同期交貨量的兩倍多。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "該公司將這種下滑歸咎於多年來受到的負面報導。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「該公司將這種下滑歸咎於多年來受到的負面報導。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "2015 年新法生效後，這一數字預計將大幅上升。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「2015 年新法生效後，這一數字預計將大幅上升。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這些數字讓一些分析師相信今年可能是他們的最後一年。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「這些數字讓一些分析師相信今年可能是他們的最後一年。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "布徹斷言，女性也更有可能成為完美主義者，儘管這很有幫助，但它可能會阻礙事情的完成。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "有幫助的",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「有幫助的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "協助",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「協助」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "方便的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「方便的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "合作社",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「合作社」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "[結論] 她現在正在實踐她目前的經商之道：交談、提出想法、取得進展。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她現在正在實踐她目前的商業方法：交談、提出想法並取得進展。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「她現在正在實踐她目前的商業方法：交談、提出想法並取得進展。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "在掌握了這些知識後，布徹致力於讓人們更了解這種鮮為人知的疾病。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「在掌握了這些知識後，布徹致力於讓人們更了解這種鮮為人知的疾病。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "布徹現在正在提升自己的技能，希望有一天能找到她夢想的工作。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「布徹現在正在提升自己的技能，希望有一天能找到她夢想的工作。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "布徹相信女性——而不是男性——現在將成為農業的驅動力。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「布徹相信女性——而不是男性——現在將成為農業的驅動力。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "[HR備忘錄結尾] 以下概述了為什麼這種風格將使我們公司受益。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "事實證明，一對一訪談是最有效的方式。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「事實證明，一對一訪談是最有效的方式。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "未來的員工最好在面試過程中感到輕鬆。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「未來的員工最好在面試過程中感到輕鬆。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "我們將討論這種格式的幾個預期目的。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「我們將討論這種格式的幾個預期目的。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "以下概述了為什麼這種風格將使我們公司受益。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「以下概述了為什麼這種風格將使我們公司受益。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "由於小組面試的結構可能比一對一面試對候選人來說更令人生畏，因此這可能是確定候選人在壓力下表現如何的有用方法。",
            "grammar": "需依據前後兩子句間之語意邏輯（因果、讓步轉折、條件或時間）挑選正確連接詞。",
            "options_analysis": {
              "A": {
                "pos": "conj. 連接詞",
                "meaning": "自從",
                "correct": true,
                "reason": "【正確】conj. 連接詞。意為「自從」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "直到",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「直到」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "每當",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「每當」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "僅當",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「僅當」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空詞性選擇題，依空格所在之句法功能位置選出相應詞性。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "已確定",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「已確定」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "鑑別",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「鑑別」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "識別",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「識別」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "識別",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「識別」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "本題為段落填空動詞片語題，依前後文時態與主被動語態選出符合規範之動詞形式。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "備份",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「備份」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "已備份",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「已備份」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "備份",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「備份」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "備份",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「備份」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "鮑爾是誰或什麼？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "adj. 形容詞",
                "meaning": "演講者的客戶",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「演講者的客戶」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "阿航運公司",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「阿航運公司」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "演講者的同事",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「演講者的同事」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "運動用品製造商",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「運動用品製造商」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "根據這篇文章，為什麼更多的美國人會購買新加坡的豪華房地產？一個買家。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它們就是繳納某些稅金的例子。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「它們就是繳納某些稅金的例子。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "紐約豪華房地產價格現在太低了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「紐約豪華房地產價格現在太低了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "大多數美國企業都位於新加坡",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「大多數美國企業都位於新加坡」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們希望擁有比中國人更多的房地產",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他們希望擁有比中國人更多的房地產」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "下列哪一項不是過道人士所描述的退休後潛在收入來源的資產？只要",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "財產",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「財產」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "退休金",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「退休金」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "投資",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「投資」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "國家援助",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「國家援助」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "什麼時候該停止進行高風險投資？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "40歲出頭",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「40歲出頭」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "在一個人的職業生涯中期",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「在一個人的職業生涯中期」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "Inone的晚年",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「Inone的晚年」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "在職業生涯的早期",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「在職業生涯的早期」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "美國與NT的木材爭端的核心是什麼？加拿大？代理美國木材。資本主義貿易盟友。木材企業。比美國購買加拿大木材的價格還要高。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加拿大木材的品質較差",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加拿大木材的品質較差」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加拿大拒絕承認其社會主義特徵",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加拿大拒絕承認其社會主義特徵」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "進口加拿大木材損害美國木材",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「進口加拿大木材損害美國木材」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "加拿大正在以更便宜的價格購買美國木材",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「加拿大正在以更便宜的價格購買美國木材」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "2015年發生了什麼事？加拿大木材。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加拿大加入北美自由貿易協定。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加拿大加入北美自由貿易協定。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "軟木材協議結束。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「軟木材協議結束。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加拿大贏得了軟木材糾紛。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加拿大贏得了軟木材糾紛。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "美國徵收反補貼稅",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「美國徵收反補貼稅」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本文最貼切地表達了下列哪一項主題陳述？長期有爭執。夥伴，即使是對其盟友有經濟優勢的國際盟友，他們也是暗地裡的敵人",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "均衡的國家和密切的貿易夥伴可以",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「均衡的國家和密切的貿易夥伴可以」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "美國始終是不公平的國際貿易",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「美國始終是不公平的國際貿易」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "加拿大的社會主義傾向賦予它不公平的待遇",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「加拿大的社會主義傾向賦予它不公平的待遇」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "儘管兩個國家看似國際化",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「儘管兩個國家看似國際化」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "自由航空 450 Main Street NewYork,NY10024 尊敬的自由航空客戶。 1]- 我想藉此機會向我們所有尊貴的客戶表示，我們 Libery Air 對聖誕節期間的表現深感遺憾和尷尬。上週是自由航空十一年來營運最糟的一周。 -2－事實是我們讓您失望了。沒有什麼比重新獲得您的信任更重要的了。 3]-- 我們所有人都希望您能給我們機會，再次歡迎您登機，並為您提供您所期望的積極的自由航空體驗。 -4]- 此致。大衛坎農 首席執行官",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "800-565-6000 的含義",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「800-565-6000 的含義」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "自由航空營運多久了？到達",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一季",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一季」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一年",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一年」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "十多年來",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「十多年來」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "二十年",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「二十年」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "其中哪個位置標示為[1]、[2]。 [3]、[4]下面的句子最適合嗎？ 「在西南地區遭遇嚴重的冬季風暴後，你們中的許多人要么滯留、延誤，要么航班取消。”",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [1]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[1] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [2]",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「[2] 的含義」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [3]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[3] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "位置標記 [4]",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「[4] 的含義」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "在這種情況下，下列哪一項與「寵物友善」的含義最接近？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "樓主喜歡養寵物。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「樓主喜歡養寵物。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "所有的鄰居都喜歡養寵物。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「所有的鄰居都喜歡養寵物。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這間公寓允許攜帶寵物入住。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「這間公寓允許攜帶寵物入住。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這間公寓完全禁止攜帶寵物。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「這間公寓完全禁止攜帶寵物。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "哪一個回答可以滿意地回答史蒂文的第四個問題？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "“我不認識我的鄰居。”",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「“我不認識我的鄰居。”」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "“大樓裡沒有人過敏。”",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「“大樓裡沒有人過敏。”」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "“公寓完全隔音。”",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「“公寓完全隔音。”」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "“家具是完全堅不可摧的。”",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「“家具是完全堅不可摧的。”」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "關於調查可以最安全地假設什麼？你的",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它只存在於網路上。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「它只存在於網路上。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它是由米爾德里德·皮爾斯設計的。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它是由米爾德里德·皮爾斯設計的。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "至少需要 40 分鐘才能完成",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「至少需要 40 分鐘才能完成」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它包含書面和多項選擇元素",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它包含書面和多項選擇元素」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "寶拉在後續電話中會談論什麼？山景市集山景城",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "報紙廣告設計的建議",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「報紙廣告設計的建議」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "巴尼如何最好地在這個領域推廣他的業務",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「巴尼如何最好地在這個領域推廣他的業務」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "巴里是否應該將他的業務擴展到",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「巴里是否應該將他的業務擴展到」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "擴展到山景城的成本",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「擴展到山景城的成本」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "產品一定會成功；我把自己作為分析師的聲譽押在了上面。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "分析師",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「分析師」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "分析、研析",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「分析、研析」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "分析、分析報告",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「分析、分析報告」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "分析（複數）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「分析（複數）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "貝瑟尼透過電子郵件得知她已被接受該職位。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "出來、得知（found out）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「出來、得知（found out）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "和",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「和」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "prep. 介系詞",
                "meaning": "關於",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「關於」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "prep. 介系詞",
                "meaning": "透過",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「透過」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "小型企業在全國各地湧現。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "向上、冒出（popping up）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「向上、冒出（popping up）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "prep. 介系詞",
                "meaning": "在",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「在」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "向下",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「向下」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "穿過",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「穿過」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "由於缺乏具體數據，卡塔琳娜只能在演講的最後提供一系列粗略的估計。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "搖擺不定的、困難的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「搖擺不定的、困難的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "粗略的、概括的",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「粗略的、概括的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "猖獗的、蔓延的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「猖獗的、蔓延的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "復甦的、重新抬頭的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「復甦的、重新抬頭的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "該公司利潤最高的紐約分公司全部由經驗豐富的人員組成。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "由...組成",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「由...組成」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "組成、沈著的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「組成、沈著的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "組成、創作",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「組成、創作」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "正在創作/組成",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「正在創作/組成」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我只想說，昨天你把那個麻煩事處理得很好。幹得好！",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "處理",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「處理」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "妥善處理了",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「妥善處理了」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "已經處理了",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「已經處理了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "一直在處理",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「一直在處理」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "受到有影響力的企業家的啟發，馬克決定投資科技業，並因此發了財。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "巨款、大筆財富",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「巨款、大筆財富」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "豐富、富饒",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「豐富、富饒」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "奢華、富麗",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「奢華、富麗」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "鋪張、揮霍",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「鋪張、揮霍」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "人們普遍相信，從太空可以看到中國的長城。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "鋸",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「鋸」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "看到",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「看到」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "可以看見（主動）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「可以看見（主動）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "可以被看見",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「可以被看見」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "歡迎在演講結束後的問答環節中表達您的意見。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "否決、反對",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「否決、反對」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "表達、陳述",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「表達、陳述」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "看待、檢視",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「看待、檢視」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "空出、騰出（職位/空間）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「空出、騰出（職位/空間）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "如果我們分包其中一些項目，我們將能夠按計劃進行。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "conj. 連接詞",
                "meaning": "如果",
                "correct": true,
                "reason": "【正確】conj. 連接詞。意為「如果」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "conj. 連接詞",
                "meaning": "然而",
                "correct": false,
                "reason": "【錯誤】conj. 連接詞。意為「然而」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "直到",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「直到」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "無論",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「無論」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "儘管競爭很激烈，但我透過努力還是保住了行政職位。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "爭取、獲得",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「爭取、獲得」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "爭取、獲得（不定詞）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「爭取、獲得（不定詞）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "已獲得、有保障的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「已獲得、有保障的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "最牢固的、最安全的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「最牢固的、最安全的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "考慮到這是一個非常重要的決定，我們還沒有下定決心，所以我們還需要時間來考慮。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "過去沒有做出",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「過去沒有做出」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "做出了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「做出了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "尚未做出（決定）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「尚未做出（決定）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "過去一直未做",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「過去一直未做」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "在這份工作中，您需要同時處理多個項目，因此如果您想取得成功，同時處理多項任務是一項必要技能。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "多工處理（第三人稱）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「多工處理（第三人稱）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "多工處理（過去式）",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「多工處理（過去式）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "多工處理",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「多工處理」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "多工處理能力",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「多工處理能力」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "我們有兩隻狗和一隻貓，因為我們非常喜歡家裡的動物。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "熱切於、渴望",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「熱切於、渴望」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "喜愛、偏好",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「喜愛、偏好」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "遠非、絕非",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「遠非、絕非」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "經過、路過",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「經過、路過」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們是否就最近出貨的問題聯絡過倉庫？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "已聯繫、已聯絡",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「已聯繫、已聯絡」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "使滿意、滿足的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「使滿意、滿足的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "連接的、相關的",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「連接的、相關的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "簽約、收縮",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「簽約、收縮」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "因此，這些投資者紛紛透過國際投資實現資產多元化，以鞏固自己的財富。",
            "grammar": "主詞與動作執行者具有被動承受關係，需根據主詞人稱與時間提示選出符合之被動態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "撤資、處分資產",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「撤資、處分資產」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "分歧、偏離",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「分歧、偏離」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "消除、驅散",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「消除、驅散」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "多角化經營、分散投資",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「多角化經營、分散投資」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "然而，中國政府最近實施了額外的資本管制，以鼓勵國內投資。儘管政府最近做出了這些努力，但許多分析人士預測，中國的國際投資洪流只會暫時消退...",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "大宗商品價格上漲導致不少國家對外國投資實施嚴格限制。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「大宗商品價格上漲導致不少國家對外國投資實施嚴格限制。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "然而，中國政府最近實施了額外的資本管制，以鼓勵國內投資。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「然而，中國政府最近實施了額外的資本管制，以鼓勵國內投資。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "幸運的是，隨著人民幣走強，中國預計將迎來繁榮，這將為這個經濟巨人帶來光明的未來。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「幸運的是，隨著人民幣走強，中國預計將迎來繁榮，這將為這個經濟巨人帶來光明的未來。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "儘管失去了一切，許多投資者表示，他們仍然毫不猶豫地追求在房地產市場累積財富。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「儘管失去了一切，許多投資者表示，他們仍然毫不猶豫地追求在房地產市場累積財富。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "許多分析師預測，中國的國際投資潮只會暫時消退，這意味著需要更有效的長期解決方案。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "預測、預告",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「預測、預告」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "預測（名詞）",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「預測（名詞）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "可預測的",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「可預測的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "不出所料地",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「不出所料地」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "儘管這看起來可能適得其反，但每天運動一小時可能比僅僅坐著一小時並繼續努力完成工作能讓你完成更多的事情。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "評估、核定",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「評估、核定」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "監督、指導",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「監督、指導」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "維持、承受",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「維持、承受」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "達成、完成",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「達成、完成」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "根據許多醫學和心理學研究，運動對人的心智能力的影響是有益且眾多的。其一，運動可以減輕壓力，使大腦釋放內啡肽和多巴胺。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "如果您有大量工作要做，將其分成較小的任務組可能會幫助您更快更好地完成工作。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「如果您有大量工作要做，將其分成較小的任務組可能會幫助您更快更好地完成工作。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "根據許多醫學和心理學研究，運動對人的心智能力的影響是有益且眾多的。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「根據許多醫學和心理學研究，運動對人的心智能力的影響是有益且眾多的。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "彎曲手腕、手和手指是防止重複性壓力傷害的關鍵。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「彎曲手腕、手和手指是防止重複性壓力傷害的關鍵。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一種策略是在辦公桌前交替站立和蹲下，直到肌肉變暖。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一種策略是在辦公桌前交替站立和蹲下，直到肌肉變暖。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "此外，運動已被證明可以提高創造力、注意力和記憶力。",
            "grammar": "空格在句子中所屬成分（主詞、動詞、受詞或修飾語）決定所需正確詞性。",
            "options_analysis": {
              "A": {
                "pos": "prep. 介系詞",
                "meaning": "在",
                "correct": false,
                "reason": "【錯誤】prep. 介系詞。意為「在」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "出來、得知（found out）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「出來、得知（found out）」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "向下",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「向下」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "向上、冒出（popping up）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「向上、冒出（popping up）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "因此，下次當您感到沒有靈感或沮喪時，請花一些時間（一個小時左右）跑步，做一些俯臥撐，或調理腹部。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "磨損、研磨",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「磨損、研磨」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "研磨（單數）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「研磨（單數）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "研磨、苦工",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「研磨、苦工」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "磨損、壓垮（ground down）",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「磨損、壓垮（ground down）」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "擁有大眾傳播、媒體或類似領域的學位者優先。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "偏好（分詞）",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「偏好（分詞）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "偏好（第三人稱）",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「偏好（第三人稱）」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "較合適的、更可取的",
                "correct": true,
                "reason": "【正確】adj. 形容詞。意為「較合適的、更可取的」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "偏好、優先權",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「偏好、優先權」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空時間副詞片語，依語境要求選出「隨時、始終 (at all times)」。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "隨時、始終",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「隨時、始終」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "及時、儘早",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「及時、提早」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "提前、預先",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「提前、預先」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "即時、實時",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「即時、實時」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "本題為段落填空介系詞片語，依列舉說明之語境選出「包含 (including)」。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "包括",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「包括」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "包容性",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「包容性」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "包括",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「包括」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "包括",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「包括」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "本題為段落填空商務字彙題，依合約授權語意選出「自由裁量權 (discretion)」。",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "裁量權、謹慎",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「裁量權、謹慎」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "扣除、推論",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「扣除、推論」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "交易、業務",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「交易、業務」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "完成",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「完成」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "本題為段落填空完整句插入題，正確選項為「所有修改均不保證額外付款 (All fixes do not warrant additional payment)」。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "修復將在錄製當天進行。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「修復將在錄製當天進行。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "修復不需要額外的性能。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「修復不需要額外的性能。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "所有修復均不保證額外付款。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「所有修復均不保證額外付款。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "自由工作者可以選擇放棄任何和全部",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「自由工作者可以選擇放棄任何和全部」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "召回原因是什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "太貴了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「太貴了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "這是危險的。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「這是危險的。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它們缺貨了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它們缺貨了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他們想要升級產品。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他們想要升級產品。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "傑西V.（Jesse V.）寫道「讓我確保我明白了」是什麼意思？可能的。公告。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他希望盡快收到替代品",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他希望盡快收到替代品」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他想澄清一些關於",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他想澄清一些關於」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他希望確保公司退還模型費用",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他希望確保公司退還模型費用」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他想從該公司訂購一種新產品。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他想從該公司訂購一種新產品。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "根據他上述的報銷要求，埃德加·紐鮑爾的公司未來如何最有效地削減成本？飛機場",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "只派他參加當地會議",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「只派他參加當地會議」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "限制他只入住最便宜的飯店",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「限制他只入住最便宜的飯店」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "別再派他參加公司午餐會了",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「別再派他參加公司午餐會了」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "讓他用自己的車輛去見客戶",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「讓他用自己的車輛去見客戶」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "HostBoard 不提供哪些服務？阿爾特",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "自動付款",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「自動付款」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "客戶支援",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「客戶支援」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "n. 名詞",
                "meaning": "網站網域註冊",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「網站網域註冊」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "n. 名詞",
                "meaning": "域名貨幣化",
                "correct": true,
                "reason": "【正確】n. 名詞。意為「域名貨幣化」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "什麼不是城市提出的改變？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "垃圾收集日",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「垃圾收集日」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "垃圾箱收集時間",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「垃圾箱收集時間」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "回收收集路線",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「回收收集路線」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "購物車領取時間",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「購物車領取時間」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "哈米德寫道：“希望他們不要燒毀整座城市”，這意味著什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "將需要消防隊。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「將需要消防隊。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "防火方面存在問題。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「防火方面存在問題。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "新員工可能會受傷。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「新員工可能會受傷。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "新員工幾乎沒有經驗。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「新員工幾乎沒有經驗。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "根據新準則，手推車必須放置在哪裡？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "距離其他物體 1.5 米",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「距離其他物體 1.5 米」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "距離其他物體一公尺",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「距離其他物體一公尺」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "距離其他物體 2.5 米",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「距離其他物體 2.5 米」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "距離其他物體兩米",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「距離其他物體兩米」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "可以推斷發生了什麼事？國家。供應商。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "弗蘭克的公司需要預付貸款。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「弗蘭克的公司需要預付貸款。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "弗蘭克的公司發生了一場事故。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「弗蘭克的公司發生了一場事故。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "弗蘭克的公司在美國南部擁有大量庫存",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「弗蘭克的公司在美國南部擁有大量庫存」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "adj. 形容詞",
                "meaning": "弗蘭克的公司現在正在從另一個地方採購",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「弗蘭克的公司現在正在從另一個地方採購」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "下個季度末會發生什麼事？折扣。公司。來自弗蘭克的公司。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "哈麗特的公司將搬到蒙大拿州。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「哈麗特的公司將搬到蒙大拿州。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "哈麗特的公司將為弗蘭克的公司提供",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「哈麗特的公司將為弗蘭克的公司提供」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "哈里特的公司將停止與法蘭克的合作",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「哈里特的公司將停止與法蘭克的合作」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "哈里特的公司將停止購買牙線",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「哈里特的公司將停止購買牙線」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "評論家對這部電影有何暗示？原文如此",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "演得很好",
                "correct": false,
                "reason": "【錯誤】v.-ed 過去式/過去分詞。意為「演得很好」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它獲得了多個獎項",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它獲得了多個獎項」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它不應該出現在電視上。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「它不應該出現在電視上。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "它是如此糟糕，以至於它是令人愉快的。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「它是如此糟糕，以至於它是令人愉快的。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "去，什麼最能描述評論家對這部電影情節的看法？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "複雜的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「複雜的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "令人悲傷",
                "correct": false,
                "reason": "【錯誤】v.-ing 現在分詞/動名詞。意為「令人悲傷」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "翁博利瓦布特",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「翁博利瓦布特」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "不尊重",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「不尊重」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "為什麼那位網友認為維多利亞·魯爾的情況是6ad？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她從來沒有成功過",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她從來沒有成功過」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "迴避受人尊敬的關係",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「迴避受人尊敬的關係」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "adj. 形容詞",
                "meaning": "她曾經是總統的夫人",
                "correct": false,
                "reason": "【錯誤】adj. 形容詞。意為「她曾經是總統的夫人」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她繼續扮演類似的角色。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她繼續扮演類似的角色。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "蘇·多尼姆的計畫似乎是什麼？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "讓人們替她付房租",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「讓人們替她付房租」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "n. 名詞",
                "meaning": "向人們收取過高的費用讓他們住在糟糕的公寓裡",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「向人們收取過高的費用讓他們住在糟糕的公寓裡」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "引誘人們進入她的公寓並搶劫他們",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「引誘人們進入她的公寓並搶劫他們」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ing 現在分詞/動名詞",
                "meaning": "誘騙人們無償寄錢",
                "correct": true,
                "reason": "【正確】v.-ing 現在分詞/動名詞。意為「誘騙人們無償寄錢」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "米歇爾在回覆蘇·多尼姆之前聯繫了誰？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "n. 名詞",
                "meaning": "律師",
                "correct": false,
                "reason": "【錯誤】n. 名詞。意為「律師」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她的銀行",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她的銀行」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "警察",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「警察」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她現在的房東",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她現在的房東」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "格倫為什麼丟了結婚戒指？",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他在玩的時候把它掉了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他在玩的時候把它掉了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他在釣大魚時把它弄丟了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他在釣大魚時把它弄丟了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他一氣之下把它丟進湖裡了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「他一氣之下把它丟進湖裡了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "他在練習武術時失去了它。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「他在練習武術時失去了它。」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "在廣告中，第 1 段中的「demo」一詞的意思最接近",
            "grammar": "需結合前後文商業溝通脈絡與專業搭配詞，辨析各選項含義並挑選最精準用詞。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "最好的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「最好的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "第一的",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「第一的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "例子",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「例子」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "adv. 副詞",
                "meaning": "僅有的",
                "correct": false,
                "reason": "【錯誤】adv. 副詞。意為「僅有的」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "是什麼讓珍妮絲對這個估算感到驚訝？ ck吃了t，",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "擋土牆要多少錢",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「擋土牆要多少錢」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "護欄有多便宜",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「護欄有多便宜」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "需要多長時間才能得到估價",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「需要多長時間才能得到估價」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v.-ed 過去式/過去分詞",
                "meaning": "需要多少人",
                "correct": true,
                "reason": "【正確】v.-ed 過去式/過去分詞。意為「需要多少人」。符合題幹文法句構，商務語境搭配最為精準通順。"
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
            "translation": "該產品可能針對誰？",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一個工作量很大的藝術家",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一個工作量很大的藝術家」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "一位攜帶大量行李的旅客",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「一位攜帶大量行李的旅客」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "從事格鬥運動的人",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「從事格鬥運動的人」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "面臨嚴峻挑戰的珠寶設計師",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「面臨嚴峻挑戰的珠寶設計師」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
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
            "translation": "我們對威瑪了解多少？ SS。",
            "grammar": "需根據句中時間副詞、前後子句時態或假設定律，選出符合文法時態之正確動詞形態。",
            "options_analysis": {
              "A": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她的電子郵件附有一個附件。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她的電子郵件附有一個附件。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "B": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她聯繫錯了部門。",
                "correct": true,
                "reason": "【正確】v./adj./n. 核心詞彙。意為「她聯繫錯了部門。」。符合題幹文法句構，商務語境搭配最為精準通順。"
              },
              "C": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她直接給基斯發了電子郵件。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她直接給基斯發了電子郵件。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              },
              "D": {
                "pos": "v./adj./n. 核心詞彙",
                "meaning": "她的訊息被鬥魂忽略了。",
                "correct": false,
                "reason": "【錯誤】v./adj./n. 核心詞彙。意為「她的訊息被鬥魂忽略了。」。放入句中與前後文商務語境不符，或無法構成正確慣用搭配。"
              }
            }
          }
        }
      ]
    }
  ]
};
