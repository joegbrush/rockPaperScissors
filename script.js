let playerSelection = prompt('Enter your choice of rock, paper, or scissors.').toLowerCase()
let computerSelection = getComputerChoice()

//Generate random number from 1 to 100 for computer choice
function getComputerChoice(){
    let cpuChoice = Math.floor(Math.random() * 100)
    if(cpuChoice <= 33){ return "rock"}
    if(cpuChoice < 66){ return "paper"}
    return "scissors"
}

//Play round of game and return winner
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) return "Tie"
    if ( playerSelection == 'rock'){
        if (computerSelection == 'scissors') return "Player wins!"
    } else if ( playerSelection == 'paper'){
        if (computerSelection == 'rock') return "Player wins!"
    }else if( playerSelection == 'scissors'){
        if(computerSelection == 'paper')return 'Player wins!'
    }
    return 'Computer wins.'
}

console.log("Your move was " + playerSelection)
console.log("CPU move was " + computerSelection)
console.log(playRound(playerSelection, computerSelection))