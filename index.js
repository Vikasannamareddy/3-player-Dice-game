var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimagedice1="dice"+randomnumber1+".png";
var randomimagesource1="images/"+randomimagedice1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimagedice2="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomimagedice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);
var randomnumber3=Math.floor(Math.random()*6)+1;
var randomimagedice3="dice"+randomnumber3+".png";
var randomimagesource3="images/"+randomimagedice3;
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src",randomimagesource3);
if(randomnumber1>randomnumber2&&randomnumber1>randomnumber3)
{
 document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomnumber2>randomnumber3&&randomnumber2>randomnumber1)
{ 
 document.querySelector("h1").innerHTML="Player2 wins";
}
else if(randomnumber3>randomnumber1&&randomnumber3>randomnumber2)
{
 document.querySelector("h1").innerHTML="Player3 wins";
}
else
{
 if(randomnumber1==randomnumber2&&randomnumber1>randomnumber3)
 {
   document.querySelector("h1").innerHTML="Both player1 and player2 wins";
 }
 else if(randomnumber2==randomnumber3&&randomnumber2>randomnumber1)
 {
   document.querySelector("h1").innerHTML="Both player2 and player3 wins";
 }
 else if(randomnumber1==randomnumber3&&randomnumber3>randomnumber2)
 {
   document.querySelector("h1").innerHTML="Both player1 and player 3 wins";
 }
 else

 {
  document.querySelector("h1").innerHTML="Draw among all";
 }
}