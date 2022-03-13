let computerChoice = computerPlay();
let playerChoice = 'Rock';


function computerPlay() {
  let weapon = ['Rock', 'Paper', 'Scissors'];
  return weapon[Math.floor(Math.random() * weapon.length)];
  
}

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  //winning scenarios
  playerChoiceFixed = playerChoice.toLowerCase();
  computerChoiceFixed = computerChoice.toLowerCase();
  if ((playerChoiceFixed == 'rock' && computerChoiceFixed == 'scissors') ||
      (playerChoiceFixed == 'scissors' && computerChoiceFixed == 'paper') ||
      (playerChoiceFixed == 'paper' && computerChoiceFixed == 'rock')) {
      playerWins ++;
      console.log(`${playerChoice} beats ${computerChoiceFixed}! You win!`);
  //losing scenarios
  } else if ((playerChoiceFixed == 'rock' && computerChoiceFixed == 'paper') ||
      (playerChoiceFixed == 'paper' && computerChoiceFixed == 'scissors') ||
      (playerChoiceFixed == 'scissors' && computerChoiceFixed == 'rock')) {
    computerWins ++;
    console.log(`${computerChoice} beats ${playerChoiceFixed}. You lose this round.`);
  } else if (playerChoiceFixed == computerChoiceFixed) {
    console.log(`You both chose ${playerChoiceFixed}, and tied! Try again?`);
  } else {
    console.log("You must enter 'rock', 'paper', or 'scissors'.");
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let round = i;
    console.log(`Round # ${round}.`);
    playGame(playerChoice, computerChoice);
    console.log(`The score is ${playerWins} for you and ${computerWins} for your opponent.`);
  }
  if (playerWins > computerWins) {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. You won the game! Great job!`);
  } else if (playerWins < computerWins) {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. You lost. So sad.`);
  } else {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. Whew a tie game! Try again?`);
  }
}

game();
