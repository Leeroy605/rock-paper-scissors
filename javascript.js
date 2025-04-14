//this function uses a random number to generate the computer choice
//to play the game.

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "paper";
    } else if (randomNumber > 67) {
        return "scissors";
    }
}

function getPlayerChoice () {
    
}

let playerChoice = '';

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


let playerScore = 0;
let computerScore = 0;
let winner = "";

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
// the for loop to play 5 rounds would go here, deleted for now.
        const computerChoice = getComputerChoice ();
        //const playerChoice = getPlayerChoice ();
        console.log(playRound(playerChoice, computerChoice));
        console.log("Current player score: " + playerScore);
        console.log("Current computer score: " + computerScore);
if (playerScore === computerScore) {
    winner = "Scores are tied. The game is a draw."
} else if (playerScore > computerScore) {
    winner = "Congratulations, you won the game!"
} else if (playerScore < computerScore) {
    winner = "You lost the game. Try again."
}
console.log(winner);
}

const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = 'Lets play rock, paper, scissors!';
body.appendChild(title);

const text1 = document.createElement('div');
text1.textContent = 'Please use the buttons below to start the game and pick a hand.'
body.appendChild(text1)

const rock = document.createElement('button');
rock.textContent = 'Rock';
rock.classList.add('rock');
body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'Paper';
paper.classList.add('paper');
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'Scissors';
scissors.classList.add('scissors');
body.appendChild(scissors);




rock.addEventListener('click', rockPlayerChoice);
paper.addEventListener('click', paperPlayerChoice);
scissors.addEventListener('click', scissorPlayerChoice);








//starts the game.
//playGame();


