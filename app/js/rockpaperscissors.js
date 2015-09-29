////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
console.log(move);
    if (move === undefined) {
        move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    if (move === undefined) {
        move = randomPlay();
    } 
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    console.log("computer chose " + move);
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if(playerMove === computerMove) {
        return "The result is a tie!";
    }
    
    if(playerMove === "rock") {
        if(computerMove === "scissors") {
            return "player";
        } else if (computerMove === "paper") {
            return "computer";
        }
    }
    if(playerMove === "paper") {
        if(computerMove === "rock") {
            return "player";
        } else if (computerMove === "scissors") {
            return "computer";
        }
    }
    if(playerMove === "scissors") {
        if(computerMove === "paper") {
            return "player";
        } else if (computerMove === "rock") {
            return "computer";
        }
    }
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
     if(playerWins < 5 && computerWins < 5){
       winner = getWinner(getPlayerMove(), getComputerMove());
       console.log(winner);
        if(winner == 'player'){
            console.log('You win this round');
            playerWins += 1;
        }
        else if(winner == 'computer'){
            console.log('The computer wins this round');
            computerWins += 1;

        }
        console.log([playerWins, computerWins]);
    }

   return [playerWins, computerWins];
    
}




console.log(playToFive());