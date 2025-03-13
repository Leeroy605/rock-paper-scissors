console.log("Hello World");

let randomNumber = Math.floor(Math.random()*100)
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let roundResult = playRound();
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
    const playerChoice = prompt("Please choose from either rock, paper or scissors: ").toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Both chose the same hand. Game is a tie."
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "Paper beats rock. You lose this round.";
    } 
}

console.log(randomNumber);
console.log(computerChoice);
console.log(playerChoice);
console.log(roundResult);