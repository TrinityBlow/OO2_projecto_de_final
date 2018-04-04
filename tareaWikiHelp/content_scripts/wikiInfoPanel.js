
class wikiInfoPanel{
    
      constructor() {
        if (document.getElementById("wikiList") != null){
            document.getElementById("wikiList").remove();
        }

        this.wikiPanel = document.createElement("div");
        document.body.insertBefore(this.wikiPanel, document.body.childNodes[0]);
        this.wikiPanel.setAttribute("id", "wikiList");
      }

    addWikiSeachToPanel(wikiSearch){
        if(wikiSearch != undefined){
            let wikiPanelTemp = this.wikiPanel; //buscar una mejor manera de pasar la variable al callback
            wikiSearch.forEach(function(wikiWord) 
            {
                let wikiLink = document.createElement("a");
                wikiLink.innerHTML = wikiWord.title;
                wikiLink.href = "https://es.wikipedia.org".concat(wikiWord.pathname);
                wikiPanelTemp.appendChild(wikiLink);
                wikiPanelTemp.appendChild(document.createElement("br"));
            });
            wikiPanelTemp.appendChild(document.createElement("br"));
        }
    }
}