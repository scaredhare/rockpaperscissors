document.addEventListener("DOMContentLoaded", () => {
    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
        return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
    }

    function playRound(playersChoice) {
        const computerChoice = getComputerChoice();
        const outcome = document.getElementById("outcome");
        const playerScoreDisplay = document.getElementById("playerScore");
        const computerScoreDisplay = document.getElementById("computerScore");

        if (playersChoice === computerChoice) {
            outcome.textContent = `It's a tie! Both chose ${playersChoice}`;
        } else if (
            (playersChoice === 'rock' && computerChoice === 'scissors') ||
            (playersChoice === 'scissors' && computerChoice === 'paper') ||
            (playersChoice === 'paper' && computerChoice === 'rock')
        ) {
            playerScore++;
            outcome.textContent = `You win this round! ${playersChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            outcome.textContent = `Computer wins this round! ${computerChoice} beats ${playersChoice}`;
        }

        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        checkWinner();
    }

    function checkWinner() {
        const outcome = document.getElementById("outcome");

        if (playerScore === 5) {
            outcome.textContent = "Congrats, you win!";
            resetGame();
        } else if (computerScore === 5) {
            outcome.textContent = "Computer won this game!";
            resetGame();
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }

    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
});