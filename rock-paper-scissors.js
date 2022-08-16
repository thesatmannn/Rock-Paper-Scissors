
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
const roundScore = document.createElement('div');

const container =document.querySelector('#container');
  const score = document.createElement('div');
  score.textContent ="Player Score: " + playerScore + " " + "Computer Score: " + computerScore;
  container.appendChild(score);

//get player selection & computer selection then playround

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
  let playerSelection = (button.id);
  playRound(playerSelection, getComputerChoice());
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
      
      roundScore.textContent = "It's a tie!";
      container.appendChild(roundScore);
      
    }
      else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection === "paper" && computerSelection.toLowerCase() === "rock" ) {

        roundScore.textContent = "You win! " + playerSelection + " beats " + computerSelection + "."
        container.appendChild(roundScore);
        playerScore++;
      }
      else {
        roundScore.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
        container.appendChild(roundScore);
        computerScore++;
      }
  }
  //keep track of rounds and tally score 

  function game() {
    if play
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
  
  
  