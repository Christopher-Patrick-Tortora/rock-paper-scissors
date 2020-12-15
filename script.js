let playerWins = 0;
let computerWins = 0;
let ties = 0;
let count = 0;

const scoreBoard = document.querySelector("#scoreBoard");

const matchWins = document.createElement("span");
matchWins.classList.add("score");
matchWins.textContent = ("Wins: " + playerWins);
scoreBoard.appendChild(matchWins);

const matchLoses = document.createElement("span");
matchLoses.classList.add("score");
matchLoses.textContent = ("Loses: " + computerWins);
scoreBoard.appendChild(matchLoses);

const matchTies = document.createElement("span");
matchTies.classList.add("score");
matchTies.textContent = ("Ties: " + ties);
scoreBoard.appendChild(matchTies);


const game = document.querySelector("#gameInfo");
const roundResult = document.createElement("h3");
const matchResult = document.createElement("h2");

//button listner for each button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", e => {
//resets scoreboard
       if(count == 0){
        matchWins.textContent = ("Wins: " + playerWins);
        matchLoses.textContent = ("Loses: " + computerWins);
        matchTies.textContent = ("Ties: " + ties);
       }
        playRound(button.getAttribute("id"), computerPlay());
        count++;
        if (count == 5) {
            gameOver();
        }
    })
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" & computerSelection == "Scissors") {
        roundResult.textContent = "You Win the Round! " + playerSelection +
            " Beats " + computerSelection;
        playerWins++
        matchWins.textContent = ("Wins: " + playerWins);
        
    }
    else if (playerSelection == "Paper" & computerSelection == "Rock") {
        roundResult.textContent = ("You Win the Round! " + playerSelection +
            " Beats " + computerSelection);

        playerWins++
        matchWins.textContent = ("Wins: " + playerWins);
        
    }

    else if (playerSelection == "Scissors" & computerSelection == "Paper") {
        roundResult.textContent = ("You Win the Round! " + playerSelection +
            " Beats " + computerSelection);

        playerWins++
        matchWins.textContent = ("Wins: " + playerWins);
        
    }

    else if (playerSelection == computerSelection) {
        roundResult.textContent = ("You Tied the Round! You Both Chose " + playerSelection)
        ties++;
        matchTies.textContent = ("Ties: " + ties);
        
    }
    else {
        roundResult.textContent = ("You Lost the Round! " + computerSelection +
            " Beats " + playerSelection);

        computerWins++
        matchLoses.textContent = ("Loses: " + computerWins);
        
    }
 //resets results   
  if(game.lastChild == matchResult){
    game.removeChild(matchResult);
  }
    game.appendChild(roundResult);
}

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choice.length);


    return choice[random];
}

function gameOver() {
    count = 0;
    if (playerWins > computerWins) {
        matchResult.textContent = 
        ("You Win the Game!");
        
    }
    else if(playerWins = computerWins || ties == 5){
        matchResult.textContent = 
        ("You Tied the Game!");
    }
    else {
        matchResult.textContent = 
        ("\nYou Lost the Game!")
        
    }

    game.appendChild(matchResult);
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    count = 0;
    
}


