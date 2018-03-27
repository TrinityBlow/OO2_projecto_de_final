

if (document.getElementById("wikiList") != null){
  document.getElementById("wikiList").remove();
}

var newItem = document.createElement("div");
document.body.insertBefore(newItem, document.body.childNodes[0]);
newItem.setAttribute("id", "wikiList"); 

var wordsToFetch = Array.prototype.slice.call(document.getElementsByTagName("h1"));

function moreThanOneAnswerd(nodeHTML) {
  
  var i = 0;
  while (i < nodeHTML.length && i < 5) {
    var linkText = document.createElement("a");
    linkText.innerHTML = nodeHTML[i].firstChild.title;
    linkText.href = "https://es.wikipedia.org".concat(nodeHTML[i].firstChild.pathname);
    newItem.appendChild(linkText);
    newItem.appendChild(document.createElement("br"));
    i++;
  }
  newItem.appendChild(document.createElement("br"));
}

function oneAnswerd(word){
  var linkText = document.createElement("a");
  linkText.innerHTML = word;
  linkText.href = "https://es.wikipedia.org/w/index.php?search=".concat(word);
  newItem.appendChild(linkText);
  newItem.appendChild(document.createElement("br"));
  newItem.appendChild(document.createElement("br"));
}



wordsToFetch.forEach(function(value)
{ 
  value.innerHTML.trim().split(" ").forEach(function(word)
  {
    if(word.length > 4){
      fetch('https://es.wikipedia.org/w/index.php?search='.concat(word))
      .then(function(response) {
        return (response.text());
      })
      .then(function(htmlText) {
        var parser = new DOMParser()
        var divElements = parser.parseFromString(htmlText, "text/html");
        var nodeHTML = divElements.getElementsByClassName("mw-search-result-heading");
        if(nodeHTML.length > 0){
          moreThanOneAnswerd(nodeHTML);
        } else if (divElements.getElementsByClassName("mw-search-nonefound").length == 0) {
          oneAnswerd(word);
        }
      });
    }
  });
});

