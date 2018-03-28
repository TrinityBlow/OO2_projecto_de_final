
class wikipedia{

  constructor() {}

  moreThanOneAnswerd(nodeHTML) {
    var i = 0;
    var wikiSearchList = [];
    while (i < nodeHTML.length && i < 5) {
      wikiSearchList.push({"title": nodeHTML[i].firstChild.title, "pathname":nodeHTML[i].firstChild.pathname});
      i++;
    }
    return wikiSearchList;
  }

  oneAnswerd(word){
    var path = "/wiki/".concat(word);
    var wikiSearchList = [
      {"title": word, "pathname":path}];
    return wikiSearchList;
  }

  requestHTMLFromWiki(word){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://es.wikipedia.org/w/index.php?search='.concat(word), false ); // false for synchronous request
    xmlHttp.send( null );
    var parser = new DOMParser()
    return parser.parseFromString(xmlHttp.responseText, "text/html");
  }

  searchWikipediaWord(word){
    var divElements = this.requestHTMLFromWiki(word);
    var nodeHTML = divElements.getElementsByClassName("mw-search-result-heading");
    if(nodeHTML.length > 0){
      return this.moreThanOneAnswerd(nodeHTML);
    } else if (divElements.getElementsByClassName("mw-search-nonefound").length == 0) {
      return this.oneAnswerd(word);
    }
  }




}