function getLastMessage() {
  const messages = document.querySelectorAll("div.message-in span.selectable-text span");
  return messages.length ? messages[messages.length - 1].innerText : "";
}

function sendMessage(text) {
  const inputBox = document.querySelector('[contenteditable="true"][data-tab]');
  if (!inputBox) return;

  inputBox.focus();
  inputBox.innerHTML = text;

  const inputEvent = new InputEvent("input", { bubbles: true, cancelable: true });
  inputBox.dispatchEvent(inputEvent);

  const enterEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13
  });
  inputBox.dispatchEvent(enterEvent);

  console.log("🚀 Attempted to send:", text);
}

let lastMsg = "";

setInterval(() => {
  const newMsg = getLastMessage();
  if (newMsg && newMsg !== lastMsg) {
    console.log("🟢 New message detected:", newMsg);

    chrome.runtime.sendMessage({ type: "getRules" }, (rules) => {
      (rules || []).forEach(({ key, res }) => {
        if (newMsg.toLowerCase().includes(key.toLowerCase())) {
          console.log(`💬 Matched keyword: "${key}" → Sending: "${res}"`);
          setTimeout(() => sendMessage(res), 1000);
        }
      });
    });

    lastMsg = newMsg;
  }
}, 3000);
