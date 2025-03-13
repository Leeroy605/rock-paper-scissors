console.log("Hello World");

let randomNumber = Math.floor(Math.random()*100)
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();



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

console.log(randomNumber);
console.log(computerChoice);
console.log(playerChoice);