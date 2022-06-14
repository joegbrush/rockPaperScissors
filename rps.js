const choices = ["rock", "paper", "scissors"];
let winner;
let winTotal = [];
let playerScore = [];
let compScore = [];
let tieScore = [];

function game(){
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
    const playerSelection = playerChoice();
    const compSelection = computerChoice();
    console.log(compSelection);
    roundWinner(playerSelection, compSelection);
    console.log(winner);
    results(winner);

}

function playerChoice() {
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

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(x) {
    if(choices.includes(x)){
        return true;
    }else{
        return false;
    }    
}

function roundWinner(choiceP, choiceC ){
    if(choiceP == choiceC){
        winner = "Tie"
    }else if(choiceP == "rock" && choiceC == "scissors" ||
            choiceP == "paper" && choiceC == "rock" ||
            choiceP == "scissors" && choiceC == "paper"){
            winner = "Player"
    }else{
        winner = "Computer";
    }
    return winner;
}

function results(x){
    if(x == "Tie"){
        tieScore.push(x)
    }else if(x == "Player"){
        playerScore.push(x);
    }else{
        compScore.push(x);
    }
}