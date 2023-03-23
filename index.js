var randomn1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimg1 = "dice" + randomn1 + ".png";
var randomimgsource = "images/" + randomdiceimg1 ;
var image1 = document.querySelector("img");
image1.setAttribute("src", randomimgsource);


var randomn2 = Math.floor(Math.random() * 6) + 1;
var randomimgsource2 = "images/dice" + randomn2 + ".png";
document.querySelector(".img2").setAttribute("src", randomimgsource2);

if(  randomn1>randomn2 ){
    document.querySelector("h1").innerHTML = ("PLAYER 1 WINS!!! YAYYY");
}

if(  randomn2>randomn1 ){
    document.querySelector("h1").innerHTML = ("PLAYER 2 WINS!!! YAYYY");
}
if(  randomn1===randomn2 ){
    document.querySelector("h1").innerHTML = ("DRAWWWWWW.");
}