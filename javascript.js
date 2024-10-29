function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return"Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}


function playRound(playersChoice) {
    const computerChoice = getComputerChoice();
    console.log('player chooses', playersChoice)
    console.log('computer chooses', computerChoice)

    if (playersChoice === computerChoice) {
        console.log("It's a tie");
        return "tie";
    }
    else if (
        (playersChoice === 'rock' && computerChoice === 'scissors') ||
        (playersChoice === ' scissors' && computerChoice === 'paper') ||
        (playersChoice === 'paper' && computerChoice === 'Scissors')
    ) {
        console.log('player wins this round');
        return "player";
    } else {
        console.log("computer wins this round");
        return "computer"
    }
}
console.log(playRound());

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++ ) {
        const playersChoice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        const result = playRound(playersChoice);

        if (result === "player") {
            playerScore++;
        } else if (result == "computer")
            computerScore++;
        
        
        console.log(`Score after round ${i + 1}: Player ${playerScore} - Computer ${computerScore}`);
    }

    

    if (playerScore > computerScore) {
        console.log("YOU WIN")
    }
    else {
        console.log("YOU LOSE")
    }


}
game();


