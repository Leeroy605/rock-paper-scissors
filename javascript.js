
let randomNumber = Math.floor(Math.random()*100)



function getComputerChoice () {
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "paper";
    } else if (randomNumber > 67) {
        return "scissors";
    }
}

function getPlayerChoice () {
    const playerChoice = prompt("Please enter either rock, paper or scissors: ").toLowerCase();
    return playerChoice;
}

console.log(playGame());

function playGame() {
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++);
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    let computerScore = 0;
    let playerScore = 0;
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "Both chose the same. Round is a tie.";
        } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
            playerScore++
            return "Paper beats rock, you win!";
        } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
            computerScore++
            return "Paper beats rock, you lose.";
        } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
            computerScore++
            return "Scissors beats paper, you lose.";
        } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
            playerScore++
            return "Scissors beats paper, you win!";
        } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
            playerScore++
            return "Rock beats scissors, you win!";
        } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
            computerScore++
            return "Rock beats scissors, you lose.";
        }
    }
let roundResult = playRound(playerChoice, computerChoice);
console.log(computerChoice);
console.log(playerChoice);
console.log(roundResult);
console.log(playerScore);
console.log(computerScore);
}

