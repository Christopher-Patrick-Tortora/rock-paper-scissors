let wins = 0;
let ties = 0;
let loses = 0;
function computerPlay(){
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);
    console.log();

    return choice[random];
}

function playRound(playerSelection, computerSelection){
    const playerSelectionCheck = playerSelection.toLowerCase();
    const computerSelectionCheck = computerSelection.toLowerCase();
    if(playerSelectionCheck == "rock" & computerSelectionCheck == "scissors"){
        console.log("You Win the Round! " + playerSelection + 
        " beats " + computerSelection)
        wins++;
    }
    else if(playerSelectionCheck == "paper" & computerSelectionCheck == "rock"){
        console.log("You Win the Round! " + playerSelection + 
        " beats " + computerSelection);
        wins++;
    }
    
    else if(playerSelectionCheck == "scissors" & computerSelectionCheck == "paper"){
        console.log("You Win the Round! " + playerSelection + 
        " beats " + computerSelection);
        wins++;
    }
    
    else if(playerSelectionCheck == computerSelectionCheck){
        console.log("You Tied the Round! " + playerSelection + 
        " ties " + computerSelection);
        ties++;
    }
    else{
        console.log("You Lost the Round! " + computerSelection + 
        " beats " + playerSelection)
        loses++
    }
}

function game(){
    for(i = 0; i < 5; i++){
        const playerSelection = prompt("Enter choice: ");
        playRound(playerSelection, computerPlay())
        if(wins == 3){
            console.log("You Win the Game!")
            break;
        }
        else if(loses == 3){
            console.log("You Lost the Game!")
            break;
        }
        else if(ties == 3){
            console.log("You Tied the Games!")
            break;
        }
    }
} 
game();    