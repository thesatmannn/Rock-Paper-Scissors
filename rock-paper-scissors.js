//declare global variables

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
const roundScore = document.createElement('div');
const gameResult = document.createElement('div');

//create div to display round score

const container = document.querySelector('#container');
  const score = document.createElement('div');
  

//get player selection & computer selection then playround until a score of 5 is reached
buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
  let playerSelection = (button.id);
  isGameOver(playRound(playerSelection, getComputerChoice()));
  score.textContent ="Player Score: " + playerScore + " " + "Computer Score: " + computerScore;
  container.appendChild(score);
  });
});

//get computer choice
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

  //ends game when a score of 5 is reached and prompts player to refresh page

  function isGameOver() {
    if (playerScore == 5 && computerScore < 5) {
      gameResult.textContent = "You won the game! Refresh to play again!";
      container.appendChild(gameResult); 
      playRound = false;
      }
    else if (computerScore == 5 && playerScore < 5) {
        gameResult.textContent = "You lose! Refresh to play again!";
        container.appendChild(gameResult);
        playRound = false;
      }
    else if (playerScore == 5 && computerScore == 5) {
        gameResult.textContent = "it's a draw! Refresh to play again!";
        container.appendChild(gameResult);
        playRound = false;
      }
  }
  
  
  