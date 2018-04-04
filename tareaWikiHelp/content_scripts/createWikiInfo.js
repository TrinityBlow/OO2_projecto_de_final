

class createWikiInfo{
    
    constructor() {   
    }

    static createWikiPanel (message, sender, sendResponse){
        if (document.getElementById("wikiList") != null){
            document.getElementById("wikiList").remove();
        }
        
        let wikiTalk = new wikipedia();

        let newItem = document.createElement("div");
        document.body.insertBefore(newItem, document.body.childNodes[0]);
        newItem.setAttribute("id", "wikiList"); 

        let wordsToFetch = Array.prototype.slice.call(document.getElementsByTagName("h1"));
        let wikiSearchListPromises = [];
        let wikiSearchList = [];
        let wikiSearchPromise;


        wordsToFetch.forEach(function(value)
        { 
            value.innerHTML.trim().split(" ").forEach(function(word)
            {
                if(word.length > 4){
                    wikiSearchPromise = wikiTalk.searchWikipediaWord(word);
                    wikiSearchListPromises.push(wikiSearchPromise);    
                }
            });
        });
        Promise.all(wikiSearchListPromises).then(values => {
            const wikiPanelCreator = new wikiInfoPanel();
            values.forEach(function(wikiSearch){
                wikiPanelCreator.addWikiSeachToPanel(wikiSearch);
            });
        });
    }

}

browser.runtime.onMessage.addListener(createWikiInfo.createWikiPanel);
