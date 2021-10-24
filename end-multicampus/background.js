chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            const video = document.querySelector("video");
            video.currentTime = video.duration - 1;
        },
    });
});

// chrome.tabs.onCreated.addListener(async (tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ["content.js"],
//     });
// });
const PAGE_NAVIGATION = {};
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    console.log(details);
    // if (
    //     details.url &&
    //     details.url.indexOf("https://lcb.multicampus.com/em/cusStudy") === 0 &&
    //     !PAGE_NAVIGATION[details.tabId]
    // ) {
    //     PAGE_NAVIGATION[details.tabId] = details.url;
    //     const timeoutId = setTimeout(() => {
    //         delete PAGE_NAVIGATION[details.tabId];
    //     }, 5000);
    //     chrome.tabs.create({
    //         url: details.url,
    //     });
    // }
});
