
class wikipedia{

  constructor() {}

  callbackWiki (call1, call2,xmlHttp,word){
   
    console.log("d");
    let parser = new DOMParser()
    let divElements = parser.parseFromString(xmlHttp.responseText, "text/html");
    let nodeHTML = divElements.getElementsByClassName("mw-search-result-heading");
    if(nodeHTML.length > 0){
      return call1(nodeHTML);
    } else if (divElements.getElementsByClassName("mw-search-nonefound").length == 0) {
      return call2(word);
    }
  }

  static moreThanOneAnswerd(nodeHTML) {
    let i = 0;
    let wikiSearchList = [];
    while (i < nodeHTML.length && i < 5) {
      wikiSearchList.push({"title": nodeHTML[i].firstChild.title, "pathname":nodeHTML[i].firstChild.pathname});
      i++;
    }
    return wikiSearchList;
  }

  static oneAnswerd(word){
    let path = "/wiki/".concat(word);
    let wikiSearchList = [
      {"title": word, "pathname":path}];
    return wikiSearchList;
  }

  searchWikipediaWord(word){
    return fetch('https://es.wikipedia.org/w/index.php?search='.concat(word))
    .then(function(response) {
      return (response.text());
    })
    .then(function(htmlText) {
      let parser = new DOMParser()
      let divElements = parser.parseFromString(htmlText, "text/html");
      let nodeHTML = divElements.getElementsByClassName("mw-search-result-heading");
      if(nodeHTML.length > 0){
        return wikipedia.moreThanOneAnswerd(nodeHTML);
      } else if (divElements.getElementsByClassName("mw-search-nonefound").length == 0) {
        return wikipedia.oneAnswerd(word);
      }
    });
  }

}
