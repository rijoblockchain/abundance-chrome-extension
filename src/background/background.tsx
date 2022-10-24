

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details)
  },
  {urls: ["<all_urls>"]}
);

// chrome.action.onClicked.addListener((tab) => {
//   console.log("CLicked")
//   chrome.tabs.create({url: "https://www.youtube.com"});
// });
