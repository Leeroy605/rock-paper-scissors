
let randomNumber = Math.floor(Math.random()*100)
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let roundResult = playRound(playerChoice, computerChoice);
let playerScore = 0;
let computerScore = 0;



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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Both chose the same. Round is a tie.";
    } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
        return "Paper beats rock, you win!";
    } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
        return "Paper beats rock, you lose.";
    } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
        return "Scissors beats paper, you lose.";
    } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
        return "Scissors beats paper, you win!";
    } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
        return "Rock beats scissors, you win!";
    } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
        return "Rock beats scissors, you lose.";
    }
}
    
console.log(randomNumber);
console.log(computerChoice);
console.log(playerChoice);
console.log(roundResult);