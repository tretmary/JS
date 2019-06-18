/* 	Implement the following game:
	A human and AI players roll two dice three times. 
	In each time,the player's score gets updated with the value of the highest dice.
 	The player with the highest score wins the game.
*/


// Human and AI scores
let SCORES = {};

// Counter for turns. It should count 6 turns, 3 per player.
let TURNS_COUNT = 0;

// Dice value
const MAX_DICE_VALUE = 6;

// Update scores
function updateScore(player, dice) {
  // Update SCORES variable
  if (player in SCORES) {
    SCORES[player] = SCORES[player] + dice;
  } else {
    SCORES[player] = dice;
  }
  // Display score
  $("#" + player + "score").text(SCORES[player]);
}

// Highlight winner and loser
function highlightWinner() {
  // Check TURNS_COUNT should be equal to six
  if (TURNS_COUNT == 6) {
    // Select winner and loser
    let winner = "";
    let loser = "";
    if (SCORES.human >= SCORES.AI) {
      winner = "human";
      loser = "AI";
    } else {
      winner = "AI"
      loser = "human"
    }
    // Highlight winner and loser
    $("#" + winner).addClass("winner");
    $("#" + loser).addClass("loser");
  }
}
console.log(highlightWinner())

// Roll dice for one player
function rollDice(player) {
  // Each player throws the dice only three times (six turns in total for both players)
  if (TURNS_COUNT < 6) {

    // Get a reference to the player's dice container
    let diceContainer = "#" + player + "dice";

    // Remove previous dice
    $(diceContainer).empty();

    // Keep record of the dice values in an array to get maximum later
    let diceValues = [];

    // Each player throw two dice
    for (let index = 0; index < 2; index++) {
      // Generate random number
      let randomDice = Math.floor((Math.random() * MAX_DICE_VALUE) + 1);
	diceValues.push(randomDice);


  // Display dice
  let diceElement = $("<img src='http://roll.diceapi.com/images/poorly-drawn/d6/" + randomDice + ".png' >");
  $(diceContainer).append(diceElement);
}

  // Update score by gettning the greatest dice number
  let greatestDiceValue = Math.max(...diceValues);
  updateScore(player, greatestDiceValue);

  // Update turns count by one
  TURNS_COUNT++;

  // Highlight winner
  highlightWinner();
}
}

// Register event handler for click on event on the roll button
$("#roll").on("click", function() {
  rollDice("human");
  rollDice("AI");
})
