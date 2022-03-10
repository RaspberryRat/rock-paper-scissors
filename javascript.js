let computerChoice = computerPlay();
let playerChoice = 'rock';



function computerPlay() {
  let weapon = ['rock', 'paper', 'scissors'];
  let randomWeapon = Math.floor(Math.random() * weapon.length);
  return weapon[randomWeapon];
}





function playGame(playerChoice, computerChoice) {
  //winning scenarios
  playerChoiceFixed = playerChoice.toLowerCase();
  let choices = `You chose ${playerChoiceFixed} and the computer chose ${computerChoice}.`;
  if (playerChoiceFixed == 'rock' && computerChoice == 'scissors') {
      return (`${choices} Rock beats scissors! You win!`);
  } else if (playerChoiceFixed == 'scissors' && computerChoice == 'paper') {
      return (`${choices} Scissors beats paper! You win!`);
  } else if (playerChoiceFixed == 'paper' && computerChoice == 'rock') {
      return ('${choices} Paper beats rock! You win!');
  //losing scenarios
  } else if (playerChoiceFixed == 'rock' && computerChoice == 'paper') {
    return (`${choices} You lose. Paper beats rock. Try again?`);
  } else if (playerChoiceFixed == 'paper' && computerChoice == 'scissors') {
    return (`${choices} You lose. Scissors beats paper. Try again?`);
  } else if (playerChoiceFixed == 'scissors' && computerChoice == 'rock') {
    return (`${choices} You lose. Rock beats scissors. Try again?`);
  } else if (playerChoiceFixed == computerChoice) {
    return (`${choices} You both chose ${playerChoiceFixed}, and tied! Try again?`);
  } else {
    return ("You must enter 'rock', 'paper', or 'scissors'.");
  }
}