var firstPlayerDice;
var secondPlayerDice;
var firstPicturePath
var secondPicturePath
var winnerText;


function playTheRound(){
	generateBothNumbers();
	firstPicturePath = 'images/dice'+firstPlayerDice+'.png';
	secondPicturePath = 'images/dice'+secondPlayerDice+'.png';
	document.getElementById('player1').src=firstPicturePath;
	document.getElementById('player2').src=secondPicturePath;
	if(firstPlayerDice > secondPlayerDice){
		winnerText = "Player 1 wins!";
		document.getElementById('roundtext').innerHTML = winnerText;
	}else if(secondPlayerDice > firstPlayerDice){
		winnerText = "Player 2 wins!";
		document.getElementById('roundtext').innerHTML = winnerText;
	}
	else{
		winnerText = "Draw!"
		document.getElementById('roundtext').innerHTML = winnerText;
	}
	clearPaths();
}

function clearPaths(){
	firstPicturePath = "";
	secondPicturePath = "";
}

function generateBothNumbers(){
	firstPlayerDice = 1 + Math.floor(Math.random() * Math.floor(6));
	secondPlayerDice = 1 + Math.floor(Math.random() * Math.floor(6));
}
