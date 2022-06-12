//Start game
function gamePlay () {
    getPlayerChoice();
    compChoice();
}


// get computer choice
function compChoice (){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`The computer chose ${computerChoice}.`);
}
//get players choice
    //prompt player for a choice
function getPlayerChoice() {
    let input = prompt("Your move. Choose rock, paper, or scissors.");
    input = input.toLowerCase();
    //validate choice
    while(input === null){
        input = "Enter your choice. Rock, paper, or scissors";
    }
    console.log(`You chose ${input}.`);
}

//compare choice to declare winner

//track number of games played



gamePlay();