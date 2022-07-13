const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

const selectionButtons = document.querySelectorAll("[data-selection]");
const yourScoreSpan = document.querySelector("[data-yourScore]");
const compScoreSpan = document.querySelector("[data-compScore]");
yourScoreSpan.innerText = 0;
compScoreSpan.innerText = 0;
let computerSelection;

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );

    makeSelection(selection, randomSelection());
    isWinner(selection, computerSelection);
  });
});

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  computerSelection = SELECTIONS[randomIndex];
  return computerSelection;
}

function makeSelection(selection, opponenetSelection) {
  const yourMove = document.querySelector("[data-yourMove]");
  yourMove.innerText = selection.emoji;
  const compMove = document.querySelector("[data-compMove]");
  compMove.innerText = opponenetSelection.emoji;
}

function isWinner(selection, opponenetSelection) {
  const yourScore = selection.beats === opponenetSelection.name;
  const compScore = opponenetSelection.beats === selection.name;
  displayScore(yourScore, compScore);
}

function displayScore(youScore, cpuScore) {
  if (youScore) yourScoreSpan.innerText = parseInt(yourScoreSpan.innerText) + 1;
  if (cpuScore) compScoreSpan.innerText = parseInt(compScoreSpan.innerText) + 1;
}
