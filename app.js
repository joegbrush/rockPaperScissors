let cpuChoice;
let playerChoice;

function startGame() {
  getPlayerChoice();
  getCPUChoice();
  determineWinner(cpuChoice, playerChoice);
}

startGame();

function getCPUChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    cpuChoice = "rock";
  } else if (randomNum == 2) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }
  //   console.log(`Computer chose ${cpuChoice}.`);
  return cpuChoice;
}

function getPlayerChoice() {
  document.querySelector(".rock").addEventListener("click");
}

function determineWinner(cChoice, pChoice) {
  if (cChoice == pChoice) {
    console.log(
      `Computer chose ${cChoice}, you chose ${pChoice}. This round is a tie.`
    );
  } else if (
    (cChoice == "rock" && pChoice == "scissors") ||
    (cChoice == "paper" && pChoice == "rock") ||
    (cChoice == "scissors" && pChoice == "paper")
  ) {
    console.log(`Computer chose ${cChoice}, you chose ${pChoice}. You lose.`);
  } else {
    console.log(`Computer chose ${cChoice}, you chose ${pChoice}. You WIN!`);
  }
}
