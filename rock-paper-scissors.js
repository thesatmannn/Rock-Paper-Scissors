//get player selection
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
  const playerSelection = (button.id);

  button.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
    
  });
});

  
  


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
    if (playerSelection === computerSelection.toLowerCase()) {
      console.log("It's a tie!");
    }
      else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection === "paper" && computerSelection.toLowerCase() === "rock" ) {
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
  
  