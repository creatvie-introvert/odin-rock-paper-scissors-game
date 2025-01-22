

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const optionIndex = Math.floor(Math.random() * options.length);
    const computersChoice = options[optionIndex];
    return computersChoice;
}

function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt("Choose - Rock, Paper, or Scissors").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(userInput));
    return userInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock") ) {
            computerScore++;
            return "u lose";
        } else if (humanChoice === computerChoice) {
            return "its a tie";
        } else {
            humanScore++;
            return "u win";
        }
        
    }
        
    for (let round = 1; round <= 5; round++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${round}:`);
        console.log(`You chose ${humanSelection}, Computer chose ${computerSelection}`);
        console.log(result);
        console.log(`HS: ${humanScore} CS: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You are the winner!!!");
    } else if (computerScore > humanScore) {
        console.log("You are a loser!");
    } else {
        console.log("its a tie. your both equally terrible.");
    }
}

playGame();
