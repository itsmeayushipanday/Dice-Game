var random1 = Math.floor(Math.random()*6)+1;

var randomDiceImg = "dice" + random1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src",randomImgSrc);


var random2 = Math.floor(Math.random()*6)+1;

var randomimgsrc2 = "images/dice" + random2 + ".png";
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src" , randomimgsrc2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "🙌Player 1 Won"
} 
else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 Won🙌"
}
else{
    document.querySelector("h1").innerHTML = "Draw😁"
}