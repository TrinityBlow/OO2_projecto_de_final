
if (document.getElementById("wikiList") != null){
    document.getElementById("wikiList").remove();
  }
  
var wikiTalk = new wikipedia();
var wikiPanelCreator = new wikiInfoPanel();

var newItem = document.createElement("div");
document.body.insertBefore(newItem, document.body.childNodes[0]);
newItem.setAttribute("id", "wikiList"); 

var wordsToFetch = Array.prototype.slice.call(document.getElementsByTagName("h1"));
var wikiSearchList = [];
var wikiSearch;

wordsToFetch.forEach(function(value)
{ 
    value.innerHTML.trim().split(" ").forEach(function(word)
    {
        if(word.length > 4){
            wikiSearch = wikiTalk.searchWikipediaWord(word);
            if (wikiSearch != null){
                wikiSearchList.push(wikiSearch);
            }
        }
    });
});

wikiPanelCreator.createWikiInfoPanel(wikiSearchList);
