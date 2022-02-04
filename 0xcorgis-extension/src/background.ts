const sendCorgisStatus = (corgis: boolean) => {
  const message = { type: "CORGIS_STATUS", corgis };

  // send message to popup
  chrome.runtime.sendMessage(message);

  // send message to every active tab
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, message);
      }
    });
  });
};

let corgis = false;

// Get locally stored value
chrome.storage.local.get("corgis", (res) => {
  if (res["corgis"]) {
   corgis = true;
  } else {
    corgis = false;
  }
});

chrome.runtime.onMessage.addListener((message: any) => {
  switch (message.type) {
    case "REQ_CORGIS_STATUS":
      sendCorgisStatus(corgis);
      break;
    case "TOGGLE_CORGIS":
      corgis = message.corgis;
      chrome.storage.local.set({ corgis });
      sendCorgisStatus(corgis);
      break;
    default:
      break;
  }
});