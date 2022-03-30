//text for editing
document.getElementById("userPick").innerHTML = "Rock Paper Scissors! ";
document.getElementById("computerPick").innerHTML = "Computer will pick next! ";
document.getElementById("playerWins").innerHTML = "Player total wins: ";
document.getElementById("pcWins").innerHTML = "Computer total wins: ";

var rockBtn = document.getElementById("rockBtn");
	rockBtn.addEventListener("click", function() {
		console.log(theGame(0, computerChoice()));
		document.getElementById("userPick").innerHTML = "Player chose Rock! ";
	});
var paperBtn = document.getElementById("paperBtn");
	paperBtn.addEventListener("click", function() {
		console.log(theGame(1, computerChoice()));
		document.getElementById("userPick").innerHTML = "Player chose Paper! ";
	});
var scissorBtn = document.getElementById("scissorBtn");
	scissorBtn.addEventListener("click", function() {
		console.log(theGame(2, computerChoice()));
		document.getElementById("userPick").innerHTML = "Player chose Scissors! ";
	});

	
//user choice via clicking button (starts actual game)



//computer choice
function computerChoice() {
	let pcChoice = Math.floor(Math.random() * 3);
	if(pcChoice == 0) {
		document.getElementById("computerPick").innerHTML = "Computer chose Rock!";
		pcChoice = 0;
		
	}
	else if(pcChoice == 1) {
		document.getElementById("computerPick").innerHTML = "Computer chose Paper!";
		pcChoice = 1;
		
	}
	else if(pcChoice == 2) {
		document.getElementById("computerPick").innerHTML = "Computer chose Scissors!";
		pcChoice = 2;
		
	}
	console.log(pcChoice);
	return pcChoice;
}

//the comparison

function theGame(choice1, choice2) {
		if(choice1 === choice2) {
			document.getElementById("winnerText").innerHTML = "It's a draw! ";
		}
		else if(choice1 == 0 && choice2 == 2) {
			document.getElementById("winnerText").innerHTML = "Player wins! ";
		}
		else if(choice1 == 1 && choice2 == 0) {
			document.getElementById("winnerText").innerHTML = "Player wins! ";
		}
		else if(choice1 == 2 && choice2 == 1) {
			document.getElementById("winnerText").innerHTML = "Player wins! ";
		}
		else {
			document.getElementById("winnerText").innerHTML = "Player loses! ";	
		}
	}






