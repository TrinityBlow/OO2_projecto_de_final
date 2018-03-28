

function wikiList(){
  chrome.tabs.executeScript({
    file: "content_scripts/createWikiInfo.js"
  });
}

chrome.browserAction.onClicked.addListener(wikiList);

