# TOEIC Pro 多益全真互動測驗與刷題系統 🚀

> 專為新制多益 (TOEIC) 閱讀測驗打造的現代化線上刷題與模考平台。零依賴、純前端、雙擊即開，支援 GitHub Pages 免費一鍵上線！

---

## ✨ 核心特色與功能亮點

1. **4 回完整全真模擬試卷 (Test 1 ~ Test 4)**：
   - 收錄 Part 5 句子填空、Part 6 段落填空、Part 7 閱讀理解。
   - 所有閱讀題組（商務書信、公告、即時通訊聊天室、報價單、食譜等）**完整共享原文文章**。
2. **同文章題目同頁連貫閱讀 (Reading Group Mode)**：
   - 左側固定呈現閱讀文章，右側一次排開所有關聯子題。
   - 作答時畫面零跳躍、零閃爍，支援順暢下滑作答。
3. **手機直立版極致適配 (Mobile Portrait Optimized)**：
   - 針對智慧型手機直向螢幕進行空間黃金分配（文章固定於上方、子題順暢滑動）。
   - **嚴格選取控制**：所有按鈕、選項方塊、題號盤等**全面禁止反藍誤選**；所有題目、選項內容、文章正文與解析文字**100% 自由長按選取與查字典**。
4. **三大測驗學習模式**：
   - 📖 **隨身刷題模式**：即時查看正解，展開「💡秒懂核心」、「導師生活化譬喻」與「避坑防雷指南」。
   - ⏱️ **75 分鐘全真模考**：全真倒數計時、畫卡標記、交卷後自動計算多益等化量尺分數 (5-495分)。
   - ❌ **智能錯題本**：作答失誤自動儲存至 LocalStorage，方便考前集中衝刺。

---

## 📂 專案檔案架構

上傳至 GitHub 時，只需將以下核心檔案放至 Repository 根目錄：

```text
toeic-website/
├── index.html        # 系統主骨架與測驗介面
├── style.css         # 現代 EduTech 玻璃態深色主題樣式與直立手機適配
├── script.js         # 核心互動邏輯、計時器、即時算分與錯題本
├── questions.js      # 完整 4 回多益閱讀題庫資料庫 (約 590 KB)
├── README.md         # 專案介紹與部署說明
└── .gitignore        # Git 忽略檔案設定
```

---

## 🚀 30 秒 GitHub Pages 一鍵部署教學

1. **建立 GitHub Repository**：
   - 登入 GitHub，點擊右上角 `+` ➔ `New repository`。
   - 設定 Repository 名稱為 `toeic-exam`，設為 `Public`。
2. **上傳檔案**：
   - 將本資料夾內的 `index.html`、`style.css`、`script.js`、`questions.js` 直接上傳（或使用 `git push`）至該倉庫的根目錄。
3. **啟用免費網站託管 (GitHub Pages)**：
   - 進入該 Repository 的 **Settings**。
   - 點擊左側選單的 **Pages**。
   - 在 **Build and deployment** 下方的 **Branch** 選擇 `main`（或 `master`），資料夾保持 `/ (root)`，點擊 **Save**。
4. **立即開始刷題**：
   - 等候 1 分鐘，GitHub 將生成你的專屬網址（例如：`https://你的使用者名稱.github.io/toeic-exam/`），無論手機、平板或電腦打開即可直接使用！
