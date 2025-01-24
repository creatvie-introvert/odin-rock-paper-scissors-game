function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        return `You lose! ${computerChoice} beate ${humanChoice}.`;
    } else if (humanChoice === computerChoice) {
        return `It's a tie! You both chode ${humanChoice}`;
    } else {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

function updateResults(message) {
    const messageDiv = document.getElementById("message");
    const scoreDiv = document.getElementById("score");

    messageDiv.textContent = message;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
}

function checkWinner() {
    if (humanScore === 5) {
        updateResults("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        updateResults("Game over! You lose.");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        updateResults("Game reset! Play Again.");
    }, 3000);
}

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const message = playRound("rock", computerChoice);
    updateResults(message);
    checkWinner();
});

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const message = playRound("paper", computerChoice);
    updateResults(message);
    checkWinner();
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const message = playRound("scissors", computerChoice);
    updateResults(message);
    checkWinner();
});


