let playerWins = 0;
let computerWins = 0;
let ties = 0;
let count = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", e => {
        playRound(button.getAttribute("id"), computerPlay());
        count++;
        if (count == 5) {
            gameOver();
        }
    })
})

const game = document.querySelector("#game");
const roundResult = document.createElement("h2");
const matchResult = document.createElement("h3");
const matchWins = document.createElement("p");
const matchLoses = document.createElement("p");
const matchTies = document.createElement("p");


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" & computerSelection == "Scissors") {
        roundResult.textContent = "You Win the Round! " + playerSelection +
            " Beats " + computerSelection;
        playerWins++
    }
    else if (playerSelection == "Paper" & computerSelection == "Rock") {
        roundResult.textContent = ("You Win the Round! " + playerSelection +
            " Beats " + computerSelection);

        playerWins++
    }

    else if (playerSelection == "Scissors" & computerSelection == "Paper") {
        roundResult.textContent = ("You Win the Round! " + playerSelection +
            " Beats " + computerSelection);

        playerWins++
    }

    else if (playerSelection == computerSelection) {
        roundResult.textContent = ("You Tied the Round! You Both Chose " + playerSelection)
        ties++;
    }
    else {
        roundResult.textContent = ("You Lost the Round! " + computerSelection +
            " Beats " + playerSelection);

        computerWins++
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
        matchWins.textContent = 
        ("Wins: " + playerWins);
        matchLoses.textContent = 
        ("Loses: " + computerWins);
        matchTies.textContent = 
        ("Ties: " + ties); 
    }
    else {
        matchResult.textContent = 
        ("\nYou Lost the Game!")
        matchWins.textContent = 
        ("Wins: " + playerWins);
        matchLoses.textContent = 
        ("Loses: " + computerWins);
        matchTies.textContent = 
        ("Ties: " + ties);
    }

    game.appendChild(matchResult);
    matchResult.appendChild(matchWins);
    matchResult.appendChild(matchTies);
    matchResult.appendChild(matchLoses);

    playerWins = 0;
    computerWins = 0;
    ties = 0;
    count = 0;
}


