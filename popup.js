document.getElementById("add").addEventListener("click", () => {
  const key = document.getElementById("keyword").value.trim();
  const res = document.getElementById("response").value.trim();
  if (!key || !res) return;

  chrome.storage.local.get("rules", (data) => {
    const rules = data.rules || [];
    rules.push({ key, res });
    chrome.storage.local.set({ rules }, () => {
      window.location.reload();
    });
  });
});


chrome.storage.local.get("rules", (data) => {
  const rules = data.rules || [];
  const ul = document.getElementById("rules");
  rules.forEach(({ key, res }) => {
    const li = document.createElement("li");
    li.textContent = `"${key}" → "${res}"`;
    ul.appendChild(li);
  });
});

