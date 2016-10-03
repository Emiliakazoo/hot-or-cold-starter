
$(document).ready(function(){
	/*--------------------initiating variables -----------------------*/
	var guessThisNum = Math.ceil(Math.random() * 100);
	var playerGuess = "";
	var numberOfTries = 0;
	var tooHighOrLow = "";
	var isHigher = true;
	
	
	/*-----------------Change number to guess for new game. This will be called in the new game function ------------*/
	function numToGuess(){
		guessThisNum = Math.ceil(Math.random() * 100);
	}
	/*------------------End Guess number -----------------------------------------------------------------------------*/




	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});



	/*-------------------------Determine if player's number is higher than computer's -----------------*/

	function isGreaterOrLessThan(a, b) {
		if(a > b) {
			return isHigher = true;
		}
		else {
			return isHigher = false;
		}

	}
	/*------------------------End number comparison ----------------------------------------------------*/




	/*---------------- Game Play -----------------------*/


	function playGame() {
		userInput = $("#userGuess").val();
		if (isNaN(userInput)){
			alert("That's not a number!  Give me a number!!");
			$("#userGuess").val("").focus();
			return;
		}

		else if (userInput > 100){
			alert("That's too much.  Pick a number between 1 and 100.");
			$("#userGuess").val("").focus();
			return;
		}

		else if (userInput === 0) {
			alert("That's too low.  Pick a number between 1 and 100.  Did you not read the instructions??");
		}
		
		else {
			numberOfTries = numberOfTries + 1;
			playerGuess = +userInput;
			$("#feedback").text(playerGuess);
			$("#count").text(numberOfTries);


			/*-----------------------------Writing out the win or guess to the page ----------------*/
			if(playerGuess === guessThisNum){
				$("#guessList").append("<li>You guessed " + playerGuess + "! You win!</li>");
				$("#feedback").text("You win!");
				$("#guessButton").prop("disabled", true);
				return;
			}
			else {
				$("#guessList").append("<li>" + playerGuess + "</li>");
			}
			/*-----------------------------End write out of guess or win ---------------------------*/


		var difference = Math.abs(guessThisNum - playerGuess);

		isGreaterOrLessThan(playerGuess, guessThisNum);


		if(isHigher === true) {
			tooHighOrLow = "Too high! ";
		}
		else{
			tooHighOrLow = "Too low! ";
		}



		if (difference >= 91 && difference <= 100){
			$("#feedback").text(tooHighOrLow + "Super-cold");
		}
		else if (difference >= 81 && difference <= 90){
			$("#feedback").text(tooHighOrLow + "Really cold");
		}
		else if (difference >= 71 && difference <= 80){
			$("#feedback").text(tooHighOrLow + "Cold");
		}
		else if (difference >= 61 && difference <= 70){
			$("#feedback").text(tooHighOrLow + "A little cooler");
		}
		else if (difference >= 51 && difference <= 60){
			$("#feedback").text(tooHighOrLow +"Cooler");
		}
		else if (difference >= 41 && difference <= 50){
			$("#feedback").text(tooHighOrLow +"Cool");
		}
		else if (difference >= 31 && difference <= 40){
			$("#feedback").text(tooHighOrLow + "Warm");
		}
		else if (difference >= 21 && difference <= 30){
			$("#feedback").text(tooHighOrLow + "Warmer");
		}
		else if (difference >= 11 && difference <= 20){
			$("#feedback").text(tooHighOrLow + "Getting hot!");
		}
		else if (difference >= 5 && difference <= 10){
			$("#feedback").text(tooHighOrLow + "HOT!");
		}
		else if (difference >= 2 && difference <= 4){
			$("#feedback").text(tooHighOrLow + "SOOOO HOT!!!");
		}
		else {
			$("#feedback").text(tooHighOrLow + "LITERALLY ON FIRE");
		}

		$("#userGuess").val("").focus();
		console.log(playerGuess);
		return;

		}

	}

	/*-----------------End game play---------------------*/





	/*---------------- Start a new Game -----------------*/

	function newGame() {
		numToGuess();
		playerGuess = "";
		numberOfTries = 0;
		$("#userGuess").val("").focus();
		$("#feedback").text("Make your guess!");
		$("#count").text(numberOfTries);
		$("#guessList").html("");
		$("#guessButton").prop("disabled", false);
	}

	/*---------------end start new game ----------------*/






	/*--------------------Start a new game.  Make sure the page doesn't reload. ------------*/
	$("a.new").on("click", function(){
		newGame();
	});
	//Play the new game. No page reload!!
	$("form").on("submit", function(event){
		event.preventDefault();
		playGame();
	});

	/*--------------------End start new game. ----------------------------------------------*/



});


