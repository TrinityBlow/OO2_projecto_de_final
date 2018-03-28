
class wikiInfoPanel{
    
      constructor() {}

      createWikiInfoPanel(wikiSearchList){

        if (document.getElementById("wikiList") != null){
            document.getElementById("wikiList").remove();
          }
        var newItem = document.createElement("div");
        document.body.insertBefore(newItem, document.body.childNodes[0]);
        newItem.setAttribute("id", "wikiList");
        
        wikiSearchList.forEach(function(wikiSearch) 
        {
            wikiSearch.forEach(function(answer){
                var linkText = document.createElement("a");
                linkText.innerHTML = answer.title;
                linkText.href = "https://es.wikipedia.org".concat(answer.pathname);
                newItem.appendChild(linkText);
                newItem.appendChild(document.createElement("br"));
            });
            newItem.appendChild(document.createElement("br"));
        });
      }
}