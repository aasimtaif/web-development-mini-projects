
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    var  hexcolor = "#";
    for (var i = 0; i < 6; i++) {

        hexcolor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexcolor;

    document.querySelector(".color").innerHTML = hexcolor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}