let computerChoice = computerPlay();
let playerChoice = 'Rock';


function computerPlay() {
  let weapon = ['rock', 'paper', 'scissors'];
  return weapon[~~(Math.random() * weapon.length)];
  
}

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  //winning scenarios
  playerChoiceFixed = playerChoice.toLowerCase();
  //let choices = `You chose ${playerChoiceFixed} and the computer chose ${computerChoice}.`;
  if ((playerChoiceFixed == 'rock' && computerChoice == 'scissors') ||
      (playerChoiceFixed == 'scissors' && computerChoice == 'paper') ||
      (playerChoiceFixed == 'paper' && computerChoice == 'rock')) {
      playerWins += 1;
      console.log(`${playerChoice} beats ${computerChoice}! You win!`);
  //losing scenarios
  } else if ((playerChoiceFixed == 'rock' && computerChoice == 'paper') ||
  (playerChoiceFixed == 'paper' && computerChoice == 'scissors') ||
  (playerChoiceFixed == 'scissors' && computerChoice == 'rock')) {
    computerWins =+ 1;
    console.log(`${computerChoice} beats ${playerChoiceFixed}. You lose this round.`);
  } else if (playerChoiceFixed == computerChoice) {
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
