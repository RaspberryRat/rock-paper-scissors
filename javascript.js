let computerChoice = computerPlay();
let playerChoice;



function computerPlay() {
  let weapon = ['Rock', 'Paper', 'Scissors'];
  return weapon[Math.floor(Math.random() * weapon.length)];
  
}

let playerWins = 0;
let computerWins = 0;
let ties = 0;

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
    ties ++;
  } else {
    console.log("You must enter 'rock', 'paper', or 'scissors'.");
  }
  playerScoreContain.textContent = playerWins;
  computerScoreContain.textContent = computerWins;
  tiedRounds.textContent = ties;
  if (playerWins + computerWins + ties == 5) {
    const scoreBox = document.querySelector('#score');
    if (playerWins > computerWins) {
      //create a div
      //add text content to declare winner
      //turn off buttons
      const winner = document.createElement('div');
      winner.textContent = 'You won the game! Congratulations!';
      scoreBox.appendChild(winner);    
    } else if (computerWins > playerWins) {
      const loser = document.createElement('div');
      loser.textContent = 'You lost the game. Such disappointment.';
      scoreBox.appendChild(loser); 
    } else {
      const tieGame = document.createElement('div');
      tieGame.textContent = 'The game was a tie!';
      scoreBox.appendChild(tieGame); 
    }
     disableButtons();
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

const playerScoreContain = document.querySelector('#playerScore');
const computerScoreContain = document.querySelector('#computerScore');
const tiedRounds = document.querySelector('#ties');

playerScoreContain.textContent = playerWins;
computerScoreContain.textContent = computerWins;
tiedRounds.textContent = ties;

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}