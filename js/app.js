
$(document).ready(function(){
	/*--------------------initiating variables -----------------------*/
	var guessThisNum = Math.ceil(Math.random() * 100);
	var playerGuess = "";
	var numberOfTries = 0;

	/*-----------------Change number to guess for new game. This will be called in the new game function ------------*/
	function numToGuess(){
		guessThisNum = Math.ceil(Math.random() * 100);
		console.log(guessThisNum);
	}
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

/*--------------------Start a new game.  Make sure the page doesn't reload. ------------*/
$("a.new").on("click", function(){
	newGame();
});
//Play the new game. No page reload!!
$("form").on("submit", function(event){
	event.preventDefault();
	playGame();
});
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
		else {
		numberOfTries = numberOfTries + 1;
		playerGuess = +userInput;
		$("#feedback").text(playerGuess);
		$("#count").text(numberOfTries);

		if(playerGuess === guessThisNum){
			$("#guessList").append("<li>You guessed " + playerGuess + "! You win!</li>");
		}
		else {
			$("#guessList").append("<li>" + playerGuess + "</li>");
		}

		var difference = Math.abs(guessThisNum - playerGuess);
		console.log(difference);

		if(playerGuess == guessThisNum) {
			$("#feedback").text("You win!");
			$("#guessButton").prop("disabled", true);
			return;
		}
		/*----------------this feels less than optimal! ------------------------*/
		
		if(playerGuess > guessThisNum){

			if (difference >= 91 && difference <= 100){
				$("#feedback").text("Too high, super-cold");
			}
			else if (difference >= 81 && difference <= 90){
				$("#feedback").text("Too high, really cold");
			}
			else if (difference >= 71 && difference <= 80){
				$("#feedback").text("Too high, cold");
			}
			else if (difference >= 61 && difference <= 70){
				$("#feedback").text("Too high and a little cooler");
			}
			else if (difference >= 51 && difference <= 60){
				$("#feedback").text("Too high but cooler");
			}
			else if (difference >= 41 && difference <= 50){
				$("#feedback").text("Too high, cool");
			}
			else if (difference >= 31 && difference <= 40){
				$("#feedback").text("Too high, but warm");
			}
			else if (difference >= 21 && difference <= 30){
				$("#feedback").text("Too high but warmer");
			}
			else if (difference >= 11 && difference <= 20){
				$("#feedback").text("Too high, getting hot!");
			}
			else if (difference >= 5 && difference <= 10){
				$("#feedback").text("HOT!! A little lower!");
			}
			else if (difference >= 2 && difference <= 4){
				$("#feedback").text("SOOOO HOT, come down!");
			}
			else {
				$("#feedback").text("LITERALLY ON FIRE");
			}
		}
		else {
			if (difference >= 91 && difference <= 100){
				$("#feedback").text("Too low, super cold");
			}
			else if (difference >= 81 && difference <= 90){
				$("#feedback").text("Too low,really cold");
			}
			else if (difference >= 71 && difference <= 80){
				$("#feedback").text("Too low and cold");
			}
			else if (difference >= 61 && difference <= 70){
				$("#feedback").text("Too low and a little less cold");
			}
			else if (difference >= 51 && difference <= 60){
				$("#feedback").text("Too low but cooler");
			}
			else if (difference >= 41 && difference <= 50){
				$("#feedback").text("Too low, cooler");
			}
			else if (difference >= 31 && difference <= 40){
				$("#feedback").text("Too low, getting warm");
			}
			else if (difference >= 21 && difference <= 30){
				$("#feedback").text("warmer, a little higher...");
			}
			else if (difference >= 11 && difference <= 20){
				$("#feedback").text("WARMER, come up!");
			}
			else if (difference >= 5 && difference <= 10){
				$("#feedback").text("HOT, a little higher!");
			}
			else if (difference >= 2 && difference <= 4){
				$("#feedback").text("CRAY CRAY HOT, a little higher!");
			}
			else {
				$("#feedback").text("ON FIRE!!!! OUCH!!");
			}
		}

		$("#userGuess").val("").focus();
		console.log(playerGuess);
		return;

		}

	}
});


