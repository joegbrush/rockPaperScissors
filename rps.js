const choices = ["rock", "paper", "scissors"];
let playerSelection = getplayerChoiceBtn;
let winnerOfRound;
let winTotal = [];
let playerScoreTotal = [];
let compScore = [];
let tieScore = [];

function gamePlay(playerChoiceFromBtn) {
  getplayerChoiceBtn(playerChoiceFromBtn);
  console.log(playerSelection);
  showPlayerChoice();

  // playOneRound();

  // Temporarily removed 5 round limit while developing UI
  // for (let i = 1; i < 6; i++) {
  //   playOneRound();
  // }
  // console.log(`Player score: ${playerScoreTotal.length}`);
  // console.log(`Computer score: ${compScore.length}`);
  // console.log(`Tie: ${tieScore.length}`);
  // let totalGames = tieScore.length + playerScoreTotal.length + compScore.length;
  // console.log(`Total games: ${totalGames}`);
}

function playOneRound() {
  const compSelection = getComputerChoice();
  console.log(compSelection);
  getWinnerOfRound(playerSelection, compSelection);
  console.log(winnerOfRound);
  getGameResults(winnerOfRound);
}
// Get player choice using text input
function getPlayerChoice() {
  let input = prompt("Type rock, paper, or scissors.");
  while (input == null) {
    input = prompt("Type rock, paper, or scissors.");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type rock, paper, or scissors. Exact spelling required.");
    while (input == null) {
      input = prompt("Type rock, paper, or scissors.");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  console.log(input);
  return input;
} //End getPlayerChoice

//Get player choice from button input
function getplayerChoiceBtn(val) {
  if (val == "rock") {
    playerSelection = "rock";
    return playerSelection;
  } else if (val == "paper") {
    playerSelection = "paper";
    return playerSelection;
  } else {
    playerSelection = "scissors";
    return playerSelection;
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(userInput) {
  if (choices.includes(userInput)) {
    return true;
  } else {
    return false;
  }
}

function getWinnerOfRound(choiceP, choiceC) {
  if (choiceP == choiceC) {
    winnerOfRound = "Tie";
  } else if (
    (choiceP == "rock" && choiceC == "scissors") ||
    (choiceP == "paper" && choiceC == "rock") ||
    (choiceP == "scissors" && choiceC == "paper")
  ) {
    winnerOfRound = "Player";
  } else {
    winnerOfRound = "Computer";
  }
  return winnerOfRound;
}

function getGameResults(resultFromRound) {
  if (resultFromRound == "Tie") {
    tieScore.push(resultFromRound);
  } else if (resultFromRound == "Player") {
    playerScoreTotal.push(resultFromRound);
  } else {
    compScore.push(resultFromRound);
  }
}

//Display player selection in DOM
function showPlayerChoice() {
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.textContent = `Player chose ${playerSelection}.`;
}
