function computerPlay() {
    let x = Math.random();
    if(x < .33){
        return "Rock";
    } else if(x < .66){
        return "Paper";
    }else{
        return "Scissors";
    }
}
