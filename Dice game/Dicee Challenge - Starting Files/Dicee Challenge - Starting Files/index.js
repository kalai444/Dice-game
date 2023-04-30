
var randomnumber1 = Math.floor(Math.random() * (6)) + 1 ;

var randomDiceimage = "dice"+ randomnumber1 + ".png";

var randomimagesource = "images/"+randomDiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor(Math.random() * (6)) + 1 ;

var randomDiceimage1 = "dice"+ randomnumber2 + ".png";

var randomimagesource1 = "images/"+randomDiceimage1;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomimagesource1);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins "

}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins "

}
else
{
    document.querySelector("h1").innerHTML="Draw!"

}


