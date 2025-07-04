# 🚀 SnapReply 🤖💬  
*Your Smart Auto-Responder for WhatsApp Web*

**SnapReply** is a lightweight and intelligent Chrome Extension that **automatically replies** to incoming WhatsApp Web messages based on custom keyword rules. Whether you're in a meeting, gaming, or just taking a break — SnapReply ensures no message goes unanswered.

---

## ✨ Key Features

- ✅ **Real-time detection** of new WhatsApp Web messages  
- ✅ **Smart auto-responses** triggered by keyword → reply pairs  
- ✅ **Intuitive UI** to add, edit, or delete reply rules  
- ✅ **Persistent storage** using `chrome.storage.local`  
- ✅ **Secure & efficient** — activates only on WhatsApp Web  
- ✅ **Simulated typing** for human-like message replies  
- ✅ **Customizable delay** before sending replies  
- ✅ **Enable/disable switch** to quickly turn SnapReply on or off  
- ✅ **Dark mode compatible UI**  
- ✅ **Keyword matching options** (exact match, contains, regex support - coming soon!)

---

## 🧠 How It Works

1. `content.js` is injected into WhatsApp Web on load  
2. It watches the DOM for new incoming messages  
3. If a message matches any of your defined keywords, it triggers the reply logic  
4. SnapReply simulates typing the response into the chat and sends it  

✅ All replies are seamless, fast, and simulate real user interaction.

---

## ⚙️ Tech Stack

| Layer           | Tech Used                 |
|------------------|---------------------------|
| Extension Core   | Chrome Extension (Manifest V3) |
| UI               | HTML, CSS, JavaScript     |
| Logic Engine     | DOM Scanner in `content.js` |
| Data Persistence | `chrome.storage.local`    |
| Scripts          | `popup.js`, `content.js`  |
| Icons            | Custom PNG icon set       |

---

## 📁 Folder Structure

snapreply/
├── manifest.json # Extension config (MV3)
├── popup.html # Main UI popup
├── popup.js # Handles UI logic
├── content.js # Background listener + responder
├── styles.css # Styles for popup
├── icon.png # Extension icon
└── README.md # You're reading it 🙂


---

## 🧪 Future Improvements (Coming Soon)

- 🔄 Regex-based keyword matching  
- ⏰ Scheduled auto-replies (e.g., during work hours only)  
- 👤 Contact-specific reply rules  
- 📊 Reply analytics dashboard  
- 🧩 Multi-platform support (Telegram Web, Messenger Web)

---

## ✅ Ideal For

- Professionals who can't respond instantly  
- Freelancers or developers focused on deep work  
- Anyone avoiding spam or unwanted chats 😉  
- Setting auto-replies during sleep or driving

---

## 📦 Installation

> **Chrome Web Store:** Coming soon!  
> Until then, use Developer Mode to load manually:

1. Clone or download this repository  
2. Open `chrome://extensions/` in your browser  
3. Enable **Developer Mode** (top right)  
4. Click **Load Unpacked**  
5. Select the `snapreply/` folder  
6. ✅ Done! SnapReply is now active

---

## 📬 Feedback & Contributions

Have a feature suggestion or found a bug?  
Feel free to [open an issue](https://github.com/your-username/snapreply/issues) or [submit a pull request](https://github.com/your-username/snapreply/pulls)!

---

**Made with ❤️ to help you stay focused.**
