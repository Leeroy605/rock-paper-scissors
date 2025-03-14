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

//this function asks the player for thier choice via browser prompt and
//stores as playerChoice variable
function getPlayerChoice () {
    let playerChoice = prompt("Please enter either rock, paper or scissors: ").toLowerCase();
    return playerChoice;
}

//main function to play the game. Includes logic for determining choice wins, tracks scores, and checks
//how many times the game has been played.
//ends game after 5 rounds and tells you who won.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";

    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        const computerChoice = getComputerChoice ();
        const playerChoice = getPlayerChoice ();

        console.log("Current player score: " + playerScore);
        console.log("Current computer score: " + computerScore);

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
        console.log(playRound(playerChoice, computerChoice));
    }
if (playerScore === computerScore) {
    winner = "Scores are tied. The game is a draw."
} else if (playerScore > computerScore) {
    winner = "Congratulations, you won the game!"
} else if (playerScore < computerScore) {
    winner = "You lost the game. Try again."
}
console.log(winner);
}
//starts the game.
playGame();
