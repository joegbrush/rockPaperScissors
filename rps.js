function computerPlay() {
    let x = Math.random();
    if(x < .33){
        return "Rock";
    } else if(x < .66){
        return "Paper";
    }else{
        return "Scissors";
    }
};

// Play a round

let playerSelection;
let computerSelection;

function gamePlay(playerSelection, computerSelection) { 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase(); 
   
    if(playerSelection == 'rock' && computerSelection == 'paper'){
       return "You lose, paper beats rock.";
    }
};


