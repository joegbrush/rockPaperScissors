//Globals
const choices = ["rock","paper","scissors"];
// Start game
function game() {
    playRound();
}

//Play a round
function playRound() {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
    console.log(compSelection);
    const winner = checkWinner(playerSelection, compSelection);
    console.log(winner);
}

//Get player choice
function playerChoice(){
    let input = prompt("Type rock, paper, or scissors.");
    input = input.toLowerCase();
    while(input == null){
        input = prompt("Type rock, paper, or scissors.");
    };
        let check = validateInput(input);
        while(check == false){
            input = prompt("Type rock, paper, or scissors. Exact spelling is required.")
            input = input.toLowerCase();
            check = validateInput(input);
        }
    console.log(input);
}

//Get computer choice
function compChoice(){
    return choices[Math.floor(Math.random()* choices.length)]

}

//Validate input
function validateInput(choice){
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie"
    }else if((choiceP === "rock" && choiceC === "scissors") || 
            (choiceP === "paper" && choiceC === "rock") || 
            (choiceP === "scissors" && choiceC === "paper")){
            return "Player"
    }else{
        return "Computer"
    }
}

game();