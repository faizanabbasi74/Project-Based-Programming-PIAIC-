import promptSync from "prompt-sync";
import randomInteger from "random-int";

// The available choices
let choices = ["rock", "paper", "scissors"];

// Message displayed to the user
let dispMessage = "0 for Rock, 1 for Paper or 2 for Scissors ";
let outcome = "Ready to Play";

// Computer random choice
let compChoice = randomInteger(0,2);
compChoice = choices[compChoice];

//User Choice
const prompt = promptSync();
let userInput = prompt(dispMessage);
let userChoice = choices[userInput];

// Condition Checking

if (compChoice === userChoice){
    outcome = "Draw";
} else if (compChoice === "rock" && userChoice === "paper"){
    outcome = "Player Wins";
} else if (compChoice === "rock" && userChoice === "scissors"){
    outcome = "Computer Wins";
} else if (compChoice === "paper" && userChoice === "rock"){
    outcome = "Computer Wins";
} else if (compChoice === "paper" && userChoice === "scissors"){
    outcome = "Player Wins";
} else if (compChoice === "scissors" && userChoice === "rock"){
    outcome = "Player Wins";
} else if (compChoice === "scissors" && userChoice === "paper"){
    outcome = "Computer Wins";
}

console.log("Computer Chooses = "+ compChoice);
console.log("Player Chooses = "+ userChoice);
console.log(outcome);



