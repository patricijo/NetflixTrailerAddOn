var cururl = "";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url != cururl) {
    if (tab.url.includes("/browse?jbv")) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["script.js"],
      });
    }

    cururl = tab.url;
  }
});
