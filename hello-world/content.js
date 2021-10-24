console.log("starting content.js ");
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log("test");
});
