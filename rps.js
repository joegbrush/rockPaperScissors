const choices = ["rock", "paper", "scissors"];
let winnerOfRound;
let winTotal = [];
let playerScore = [];
let compScore = [];
let tieScore = [];

function gamePlay(){
    for(let i = 1; i < 6; i++){
        playRound();
    }    
    console.log(`Player score: ${playerScore.length}`);
    console.log(`Computer score: ${compScore.length}`);
    console.log(`Tie: ${tieScore.length}`);
    let totalGames = tieScore.length + playerScore.length + compScore.length;
    console.log(`Total games: ${totalGames}`);
}


function playRound() {
    const playerSelection = getPlayerChoice();
    const compSelection = getComputerChoice();
    console.log(compSelection);
    getWinnerOfRound(playerSelection, compSelection);
    console.log(winnerOfRound);
    getGameResults(winnerOfRound);

}

function getPlayerChoice() {
    let input = prompt("Type rock, paper, or scissors.");
    while(input == null){
        input = prompt("Type rock, paper, or scissors.");
    };
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt("Type rock, paper, or scissors. Exact spelling required.");
        while(input == null){
            input = prompt("Type rock, paper, or scissors.");
        };
        input = input.toLowerCase();
        check = validateInput(input);
    };
    console.log(input);
    return input;
}

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(userInput) {
    if(choices.includes(userInput)){
        return true;
    }else{
        return false;
    }    
}

function getWinnerOfRound(choiceP, choiceC ){
    if(choiceP == choiceC){
        winnerOfRound = "Tie"
    }else if(choiceP == "rock" && choiceC == "scissors" ||
            choiceP == "paper" && choiceC == "rock" ||
            choiceP == "scissors" && choiceC == "paper"){
            winnerOfRound = "Player"
    }else{
        winnerOfRound = "Computer";
    }
    return winnerOfRound;
}

function getGameResults(resultFromRound){
    if(resultFromRound == "Tie"){
        tieScore.push(resultFromRound)
    }else if(resultFromRound == "Player"){
        playerScore.push(resultFromRound);
    }else{
        compScore.push(resultFromRound);
    }
}