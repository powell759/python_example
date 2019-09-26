var btnClickMe = document.getElementById("clickMe")
var divTextHolder = document.getElementById("textHolder")
btnClickMe.addEventListener("click", addTextToDiv);

function addTextToDiv() {
    divTextHolder.innerHTML = divTextHolder.innerHTML + "\nWe've added text."
}
