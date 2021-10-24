/**
 * when click extension button
 */
chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            const video = document.querySelector("video");
            video.currentTime = video.duration - 1;
        },
    });
});

/**
 * when open video page as popup
 */
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
});
