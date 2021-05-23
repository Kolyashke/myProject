var randomNumber=0;

function generateRandom(){
	randomNumber=Math.floor(Math.random()*10);
	document.getElementById("numberLabel").innerHTML = randomNumber;
}