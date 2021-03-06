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
  displayWeapon();
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
  playerScoreContain.textContent = playerWins;
  computerScoreContain.textContent = computerWins;
  tiedRounds.textContent = ties;
  if (playerWins + computerWins + ties == 5) {
    const scoreBox = document.querySelector('.score');
    if (playerWins > computerWins) {
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
    // calls 2 function . ! to turn off rock paper scissor buttons and 2. to show a button that refreshes page to restart game
     disableButtons();
     newGame();
  }
  container.appendChild(announcer);
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
  // adds chosen classlist - adds some effects when click on rock,paper,scissors buttons
  button.classList.add('chosen');
  playGame(playerChoice, computerChoice);
  });
});

//following function shows player weapon on left side of screen and cpu weapon on right side so it is obvious what is chosen to the user
function displayWeapon() {
  if (playerChoice === 'Rock') {
    playerChoiceImg.src = "./img/rock.jpg";
    playerChoiceDesc.textContent = `You chose ${playerChoice}!`;
  } else if (playerChoice === 'Paper') {
    playerChoiceImg.src = './img/paper.jpg';
    playerChoiceDesc.textContent = `You chose ${playerChoice}!`;
  } else if (playerChoice === 'Scissors') {
    playerChoiceImg.src = './img/scissors.jpg';
    playerChoiceDesc.textContent = `You chose ${playerChoice}!`;
  }
  if (computerChoice === 'Rock') {
    cpuChoiceImg.src = "./img/rock.jpg";
    cpuChoiceDesc.textContent = `Your opponent chose ${computerChoice}.`;
  } else if (computerChoice === 'Paper') {
    cpuChoiceImg.src = './img/paper.jpg';
    cpuChoiceDesc.textContent = `Your opponent chose ${computerChoice}.`;
  } else if (computerChoice === 'Scissors') {
    cpuChoiceImg.src = './img/scissors.jpg';
    cpuChoiceDesc.textContent = `Your opponent chose ${computerChoice}.`;
  }
  playerChoiceImg.width = '250';
  cpuChoiceImg.width = '250';
  playerWeaponBox.appendChild(playerChoiceDesc);
  playerWeaponBox.appendChild(playerChoiceImg);
  cpuWeaponBox.appendChild(cpuChoiceDesc);
  cpuWeaponBox.appendChild(cpuChoiceImg);

  //hides choices on left/right of screen after 1.5 seconds
  setTimeout(() => {
    playerWeaponBox.removeChild(playerChoiceImg);
    cpuWeaponBox.removeChild(cpuChoiceImg);
    playerWeaponBox.removeChild(playerChoiceDesc);
    cpuWeaponBox.removeChild(cpuChoiceDesc);
    
  }, 1500);
}

const playerScoreContain = document.querySelector('#playerScore');
const computerScoreContain = document.querySelector('#computerScore');
const tiedRounds = document.querySelector('#ties');
const retryBtn = document.createElement('button');
const announcer = document.querySelector('#announcer');
const body = document.querySelector('body');
const container = document.querySelector('#container');
const btns = document.querySelectorAll('button');
const playerWeaponBox = document.querySelector('.playerWeapon');
const cpuWeaponBox = document.querySelector('.cpuWeapon');
const playerChoiceImg = document.createElement('img');
const cpuChoiceImg = document.createElement('img');
const playerChoiceDesc = document.createElement('div');
const cpuChoiceDesc = document.createElement('div');


playerScoreContain.textContent = playerWins;
computerScoreContain.textContent = computerWins;
tiedRounds.textContent = ties;

//this function resets the page when the user clicks the 'would you like to play again?' button after 5 rounds
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


//this is function and removeTransition(e) function is required to remove animation from weapon select (the yellow highlight)
btns.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('chosen');
}




  