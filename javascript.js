let computerChoice = computerPlay();
let playerChoice = 'rock';


function computerPlay() {
  let weapon = ['rock', 'paper', 'scissors'];
  return weapon[~~(Math.random() * weapon.length)];
  
}

let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice, computerChoice) {
  computerChoice = computerPlay();
  playerChoiceFixed = playerChoice.toLowerCase();
  let choices = `You chose ${playerChoiceFixed} and the computer chose ${computerChoice}.`;
  //winning scenarios
  if (playerChoiceFixed == 'rock' && computerChoice == 'scissors') {
      return playerWins += 1;
  } else if (playerChoiceFixed == 'scissors' && computerChoice == 'paper') {
      return playerWins += 1;
  } else if (playerChoiceFixed == 'paper' && computerChoice == 'rock') {
      return playerWins += 1;
  //losing scenarios
  } else if (playerChoiceFixed == 'rock' && computerChoice == 'paper') {
    return computerWins += 1;
  } else if (playerChoiceFixed == 'paper' && computerChoice == 'scissors') {
    return computerWins += 1;
  } else if (playerChoiceFixed == 'scissors' && computerChoice == 'rock') {
    return computerWins += 1;
  } else if (playerChoiceFixed == computerChoice) {
    return (`${choices} You both chose ${playerChoiceFixed}, and tied! Try again?`);
  } else {
    return ("You must enter 'rock', 'paper', or 'scissors'.");
  }
}


function game() {
  for (let i = 1; i <= 5; i++) {
    let round = i;
    console.log(`Round # ${round}.`);
    console.log(playGame(playerChoice, computerChoice));
    console.log(`You chose ${playerChoice} and your opponent chose ${computerChoice}`);
    console.log(`The winner of round # ${round} is `);
  }
  if (playerWins > computerWins) {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. You won the game! Great job!`);
  } else if (playerWins < computerWins) {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. You lost. So sad.`);
  } else {
    console.log(`You won ${playerWins} rounds. Your opponent won ${computerWins} rounds. Whew a tie game! Try again?`)}
}

console.log(game());