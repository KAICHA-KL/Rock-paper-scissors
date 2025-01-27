// Step 1 //
// Create new function called getComputerChoice
// get computer choice needs to select a randome number
// random number will be assigned to rock paper and scissors
// therefore computer selects a random move to make

// Step 2 //
// Create new function called getHumanChoice
// get user to input their choice by number of text
// player selection is made

// Step 3 //
// Create new function called compare
// Pass both player and computer choice to that function
// Establish the 3 conditions
// 1. Rock & scissors - rock wins
// 2. Scissors & paper - Scissors wins
// 3. paper & rock - paper wins
// Based on user options and these conditions return the winner value
// Increment the humanscore or computerscore in the global scope

//Step 4//
// Create a new function called playgame
// this function iterates 5 times
// Taking the user input 5 times and calling compare for the same
// Winner is declared based on final score after 5 games

//Code below//

//DECLARING GLOBAL VARIABLES

let humanChoice = "none";
let computerChoice = "none";
let computerPoint = 0;
let humanPoint = 0;
let decision = 0;

//FUNCTION TO GET THE USERS CHOICE AND CONVERT IT TO UPPER CASE

function getHumanChoice() 
{
    while (decision == 0)
    {
     humanChoice = prompt( "What do you choose Rock,Paper or Scissors? Type below", "none");
    humanChoice = humanChoice.toUpperCase();
    if ( humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS" )
       {
      alert("Choice is valid");
      decision = 1;
    }

   }
}

// FUNCTION TO GET THE COMPUTER CHOICE BY CREATING A RANDOM NUMBER FUNCTION AND CONVERTING IT TO
// 3 POSSIBLE OPTION AND ASSIGNING IT TO EITHER ROCK PAPER OR SCISSOR

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    computerChoice = "ROCK";
  } else if (choice == 2) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }

}

//FUNTION TO COMPARE WHO WINS AND INCREASE THE SCORE COUNT

function compare(computerChoice, humanChoice) {
  if (computerChoice == "ROCK" && humanChoice == "PAPER") {
    humanPoint = humanPoint + 1;
    alert("you win!!!!");

  } else if (computerChoice == "PAPER" && humanChoice == "SCISSORS") {
    humanPoint = humanPoint + 1;
    alert("you win!!!!");

  } else if (computerChoice == "SCISSORS" && humanChoice == "ROCK") {
    humanPoint = humanPoint + 1;
    alert("you win!!!!");

  } else {
    computerPoint = computerPoint + 1;
    alert("Computer wins!");
  }
   
}

// FUNCTION TO MAKE IT A TOURNAMENT STYLE GAME 

function playgame() {
  for (let i = 0; i <= 4; i++) {
    getHumanChoice();
    getComputerChoice();
    compare(computerChoice, humanChoice);
    alert("you score is = "+humanPoint+"computer score is =" + computerPoint);
    decision = 0;
  }
}

//playgame();
