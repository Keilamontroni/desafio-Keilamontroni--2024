const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const message = document.getElementById("message");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);
        displayResult(playerChoice, computerChoice, result);
    });
});

resetButton.addEventListener("click", resetGame);

function determineWinner(player, computer) {
    if (player === computer) {
        return "draw";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function updateScore(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    score.textContent = Jogador: ${playerScore} - Computador: ${computerScore};
}

function displayResult(player, computer, result) {
    const choicesInPortuguese = {
        rock: "pedra",
        paper: "papel",
        scissors: "tesoura"
    };

    if (result === "draw") {
        message.textContent = Empate! Ambos escolheram ${choicesInPortuguese[player]}.;
    } else if (result === "player") {
        message.textContent = Você ganhou! ${choicesInPortuguese[player]} vence ${choicesInPortuguese[computer]}.;
    } else {
        message.textContent = Você perdeu! ${choicesInPortuguese[computer]} vence ${choicesInPortuguese[player]}.;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = Jogador: ${playerScore} - Computador: ${computerScore};
    message.textContent = "";
}