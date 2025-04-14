//this function uses a random number to generate the computer choice
//to play the game.

let computerChoice = '';
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
let winner = "";

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        computerChoice = "paper";
    } else if (randomNumber > 67) {
        computerChoice = "scissors";
    }
    return computerChoice;
}


function rockPlayerChoice () {
    playerChoice = 'rock'
    return playerChoice;
}

function paperPlayerChoice () {
    playerChoice = 'paper';
    return playerChoice;
}

function scissorPlayerChoice () {
    playerChoice = 'scissors';
    return playerChoice;
}

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

//main function to play the game. Calls playRound function and displays current scores.
//ends game after 5 rounds and tells you who won.
function playGame() {
    console.log(playRound(playerChoice, computerChoice));
    console.log("Current player score: " + playerScore);
    console.log("Current computer score: " + computerScore);
    if (playerScore === computerScore) {
        winner = "Scores are tied. The game is a draw."
}   else if (playerScore > computerScore) {
        winner = "Congratulations, you won the game!"
}   else if (playerScore < computerScore) {
        winner = "You lost the game. Try again."
}
console.log(winner);
}

const body = document.querySelector('body')

const title = document.createElement('h1');
title.textContent = "Let's play rock, paper, scissors!";
body.appendChild(title);

const instructions = document.createElement('div');
instructions.textContent = 'Select one of the buttons below to choose your hand:';
body.appendChild(instructions);

const rock = document.createElement('button');
rock.classList.add('btn')
rock.id = 'rock-button';
rock.textContent = 'Rock';
body.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('btn');
paper.id ='paper-button';
paper.textContent = 'Paper';
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('btn');
scissors.id = 'scissors-button';
scissors.textContent = 'Scissors';
body.appendChild(scissors);










//starts the game.
//playGame();


