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

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.tabs.get(details.tabId, (details) => {
        console.log(details);
        if (
            details.index === 0 &&
            details.pendingUrl.indexOf("https://learning.multicampus.com/lrnhm/body/common/lrnhmGetMethod_L") === 0
        ) {
            chrome.tabs.create({
                url: details.pendingUrl,
            });
        }
    });
    // if (
    //     details.url &&
    //     details.url.indexOf("https://lcb.multicampus.com/em/cusStudy") === 0 &&
    //     !PAGE_NAVIGATION[details.tabId]
    // ) {
    //     PAGE_NAVIGATION[details.tabId] = details.url;
    //     const timeoutId = setTimeout(() => {
    //         delete PAGE_NAVIGATION[details.tabId];
    //     }, 5000);
    // }
});
