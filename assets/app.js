$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();



$("body").on("click", ".start-button", function(event){
	event.preventDefault(); 
	generateHTML();

	timerWrapper();

});

$("body").on("click", ".answer", function(event){

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {


		clearInterval(theClock);
		generateWin();
	}
	else {

		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.jpg'>";
	$(".mainArea").html(gameHTML);
	
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Goddess of wisdom", "Three-headed hound, gatekeeper of Hades", "Queen of the gods and wife of Zeus", "Trojan champion and war hero", "Greece's greatest warrior, Trojan War hero", "Goddess of the hunt and animals", "Queen of the underworld", "Ferryman on the river Styx"];
var answerArray = [["Athena", "Erebus", "Antiope", "Icarus"], ["Hydra","Cerberus","Chimara","Gorgon"], ["Antigone", "Charon", "Hera", "Ares"], ["Hypnos","Dionysus","Hector","Paris"], ["Ariadne", "Demeter", "Eros", "Achilles"], ["Artemis","Theseus","Chronos","Hippolyta"], ["Chronos", "Persephone", "Andromeda", "Artemis"], ["Ares","Aeneas","Hephaestus","Charon"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Athena.jpg'>", "<img class='center-block img-right' src='assets/images/Cerberus.jpg'>", "<img class='center-block img-right' src='assets/images/Hera.jpg'>", "<img class='center-block img-right' src='assets/images/Hector.jpg'>", "<img class='center-block img-right' src='assets/images/Achilles.jpg'>", "<img class='center-block img-right' src='assets/images/Artemis.jpg'>", "<img class='center-block img-right' src='assets/images/Persephone.jpg'>", "<img class='center-block img-right' src='assets/images/Charon.jpg'>"];
var correctAnswers = ["A. Athena", "B. Cerberus", "C. Hera", "C. Hector", "D. Achilles", "A. Artemis", "B. Persephone", "D. Charon"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
