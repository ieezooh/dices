// image1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomNumber1+ ".png";
var randomImage = "images/"+randomDice;
document.querySelectorAll("img")[0].setAttribute("src",randomImage);
// image2
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + randomDice2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Ieezooh won!";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Kim Won!";
}else{
  document.querySelector("h1").innerHTML = "Its a draw!";
 }
