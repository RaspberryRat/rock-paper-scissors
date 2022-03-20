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
      announcer.textContent = `${playerChoice} beats ${computerChoiceFixed}! You win!`;
  //losing scenarios
  } else if ((playerChoiceFixed == 'rock' && computerChoiceFixed == 'paper') ||
      (playerChoiceFixed == 'paper' && computerChoiceFixed == 'scissors') ||
      (playerChoiceFixed == 'scissors' && computerChoiceFixed == 'rock')) {
    computerWins ++;
    announcer.textContent = `${computerChoice} beats ${playerChoiceFixed}. You lose this round.`;
  } else if (playerChoiceFixed == computerChoiceFixed) {
    announcer.textContent = `You both chose ${playerChoiceFixed}, and tied! Try again?`;
    ties ++;
  } else {
    announcer.textContent = "You must enter 'rock', 'paper', or 'scissors'.";
  }
  body.appendChild(announcer);
  playerScoreContain.textContent = playerWins;
  computerScoreContain.textContent = computerWins;
  tiedRounds.textContent = ties;
  if (playerWins + computerWins + ties == 5) {
    const scoreBox = document.querySelector('.score');
    if (playerWins > computerWins) {
      //create a div
      //add text content to declare winner
      //turn off buttons
      const winner = document.createElement('div');
      winner.textContent = 'You won the game! Congratulations!';
      winner.setAttribute('style', 'marginTop: 50px');
      scoreBox.appendChild(winner);    
    } else if (computerWins > playerWins) {
      const loser = document.createElement('div');
      loser.textContent = 'You lost the game. Such disappointment.';
      scoreBox.appendChild(loser); 
      loser.setAttribute('style', 'marginTop: 50px');
    } else {
      const tieGame = document.createElement('div');
      tieGame.textContent = 'The game was a tie!';
      scoreBox.appendChild(tieGame); 
      tieGame.setAttribute('style', 'marginTop: 50px');
    }

     disableButtons();
     newGame();
  }

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
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
const retryBtn = document.createElement('button');
const announcer = document.querySelector('#announcer');
const body = document.querySelector('body');

playerScoreContain.textContent = playerWins;
computerScoreContain.textContent = computerWins;
tiedRounds.textContent = ties;

retryBtn.onclick = () => history.go(0);



function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function newGame() {
  retryBtn.textContent = 'Would you like to play again?';
  retryBtn.setAttribute('id','retry');
  announcer.appendChild(retryBtn);  
  retryBtn.setAttribute('style', 'color: black; padding: 10px; margin: 10px');
}