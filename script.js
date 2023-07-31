let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

//Get player choice
// function playerChoice() {
//   let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
//   return playerSelection.toLowerCase();
// }
//Get computer choice
function computerChoice() {
  let computerSelection = Math.floor(Math.random() * 100);
  if (computerSelection < 33) return "rock";
  if (computerSelection < 66) return "paper";
  return "scissors";
}

//Play a round
function playRound(playerChoice) {
  let player = playerChoice;
  let cpu = computerChoice();
  const resultDiv = document.getElementById("result");

  if (player === cpu) {
    const resultElement = document.createElement("p");
    resultDiv.textContent += "Tie." + "\n";
    resultDiv.appendChild(resultElement);
  }
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    playerScore++;
    const resultElement = document.createElement("p");
    resultDiv.textContent += "Player wins!." + "\n";
    resultDiv.appendChild(resultElement);
  }
  if (
    (cpu === "rock" && player === "scissors") ||
    (cpu === "paper" && player === "rock") ||
    (cpu === "scissors" && player === "paper")
  ) {
    computerScore++;
    const resultElement = document.createElement("p");
    resultDiv.textContent += "Computer wins." + "\n";
    resultDiv.appendChild(resultElement);
  }

  //  if(roundCount === 5){
  //     showFinalResult()
  //  }
  //  if(roundCount < 5){
  //     playRound()
  //  }
}

function showFinalResult() {
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  }
  if (playerScore < computerScore) {
    console.log("Computer wins the game.");
  }
  if (playerScore == computerScore) {
    console.log("This game is a Tie.");
  }
}

playRound();
