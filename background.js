chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getRules") {
    chrome.storage.local.get("rules", (data) => {
      sendResponse(data.rules || []);
    });
    return true; // keeps the message channel open for async response
  }
});
