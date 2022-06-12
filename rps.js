//Globals
const choices = ["rock","paper","scissors"];

function game() {
    playRound();
}
//Play a round
function playRound() {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
    console.log(compSelection);
}

//Get player choice
function playerChoice(){
    let input = prompt("Type rock, paper, or scissors.");
    while(input == null){
        input = prompt("Type rock, paper, or scissors.");
    };
        input = input.toLowerCase();
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

game();