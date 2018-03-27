/*xhttp.open("GET", "https://es.wikipedia.org/w/index.php?search=mozart", true);
xhttp.send(); 
*/
/*
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
document.body.insertBefore(para, document.body.childNodes[0]);
*/


function wikiList(){
  chrome.tabs.executeScript({
    file: "wikiSearch.js"
  });
}

chrome.browserAction.onClicked.addListener(wikiList);

