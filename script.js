var btnHighlight = document.getElementById("clickMe");
var inputText = document.getElementById("inputText");
var codeContainer = document.getElementById("codeContainer");
btnHighlight.addEventListener("click", addTextToDiv);

//initialize highlight.js
hljs.initHighlightingOnLoad();

function addTextToDiv() {
    var text = inputText.value;
    codeContainer.innerHTML = text;
    hljs.highlightBlock(codeContainer);
}
