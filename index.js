document.querySelector("h1").textContent="Refresh me";


var k=Math.floor(Math.random()*6+1);


var randomimage1="images/dice"+k+".png";

var image1=document.querySelectorAll("img")[0];



image1.setAttribute("src",randomimage1);


var k1=Math.floor(Math.random()*6+1);

var randomimage2="images/dice"+k1+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
 
if (randomimage1 > randomimage2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomimage2 > randomimage1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }