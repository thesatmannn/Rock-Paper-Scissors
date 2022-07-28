//randomly return rock, paper and scissors

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
      return "Rock";
    }
    else if (randomChoice === 2) {
      return "Paper";
    }
    else {
      return "Scissors";
    }
  }
  // use computerchoice and user input to determine winner of game

  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      return "It's a tie!"
    }
      else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".")
        playerScore++;
      }
      else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + ".")
        computerScore++;
      }
  }
  //keep track of rounds and tally score 

  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Rock, Paper or Scissors?");
      console.log(playRound(playerSelection, getComputerChoice()));
      }
       if ( i = 5 && playerScore > computerScore) {
        console.log("You won the game!");
      }
      else if ( i = 5 && computerScore > playerScore) {
        console.log("You lose!");
      }
      else {
        console.log("it's a draw!");
      }
    }
  let playerScore = 0;
  let computerScore = 0;
  let computerSelection = getComputerChoice();
  console.log(game());
  