//randomly return rock, paper and scissors

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
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
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
      return "It's a tie!"
    }
      else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" ) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".")
      }
      else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + ".")

      }
  }
  function game() {
    

  }
  const playerSelection = "RocK";
  const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));