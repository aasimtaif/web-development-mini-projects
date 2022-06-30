const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById("btn");


btn.addEventListener("click", function(){
    
    var randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.querySelector(".color").innerHTML = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}