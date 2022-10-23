/* manifest_version 2 webrequest example, need "webRequest", "webRequestBlocking" and "<all_urls>" in permissions
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url
    const filters = ['googleadservices', 'googlesyndication', 'g.doubleclick']
    for (const filter of filters) {
      if (url.indexOf(filter) != -1) {
        return {
          cancel: true,
        }
      }
    }
    return {
      cancel: false,
    }
  },
  {
    urls: ['<all_urls>'],
  },
  ['blocking']
)
*/

// const dataSet = {};
// chrome.webRequest.onBeforeRequest.addListener(function (details) {
//     console.log(details)
//     // const tabId = details.tabId;
//     // if (details.url && details.type == "image") {
//     //     if (!dataSet[tabId]) {
//     //         dataSet[tabId] = new Set([]);
//     //     }
//     //     // keep all image urls for current tab
//     //     dataSet[tabId].add(details.url);
//     // }
    


// }, {
//     urls: ["<all_urls>"]
// });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details)
  },
  {urls: ["<all_urls>"]}
);

// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.create({url: "https://www.youtube.com"});
// });


// chrome.runtime.onInstalled.addListener(() => {
// chrome.tabs.create({url: 'http://www.facebook.com', active: false});
// })