let computerChoice = computerPlay();
let playerChoice;



function computerPlay() {
  let weapon = ['Rock', 'Paper', 'Scissors'];
  return weapon[Math.floor(Math.random() * weapon.length)];
  
}

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  //To keep first letter of player choice uppercase so looks better in console.
  firstLetter = playerChoice.substring(0, 1);
  upperFirstLetter = firstLetter.toUpperCase();
  playerChoice = upperFirstLetter + playerChoice.substring(1);
  //Put choices in lowercase so no issues with comparisons
  playerChoiceFixed = playerChoice.toLowerCase();
  computerChoiceFixed = computerChoice.toLowerCase();
  //winning scenarios
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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
    if (button.id == 1) {
      playerChoice = 'Rock'
    } else if (button.id == 2) {
      playerChoice = 'Paper'
    } else if (button.id == 3) {
      playerChoice = 'Scissors'
  } else {
    console.log('ERROR');
  }
  playGame(playerChoice, computerChoice);

  });
});
