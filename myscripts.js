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


let humanChoice = 'none';
let computerChoice = 'none' ;
let computerPoint = 0;
let humanPoint = 0;
let decision = 0;

function getHumanChoice() 
{
    while (decision = 0) 
        { 
    let humanChoice = prompt("What do you choose Rock,Paper or Scissors? Type below","none");
    humanChoice = humanChoice.toUpperCase();
          if (humanChoice == 'ROCK'|| humanChoice == 'PAPER'|| humanChoice == 'SCISSORS') {
           alert("Choice is valid")
            decision = 1
            }
}
}

function getComputerChoice() 
{
    let choice = Math.floor(Math.random()*3 + 1);
    if (choice == 1) { 
        computerChoice = "ROCK";
    }
    else if (choice == 2 ) {
        computerChoice = "PAPER";
    }
    else {
        computerChoice ="SCISSORS";
    }
    
    
 }

function compare (computerChoice,humanChoice)
{
    if (computerChoice == "ROCK" && humanChoice == "PAPER")
        { 
            humanPoint++
        }

    else if (computerChoice == "PAPER" && humanChoice == "SCISSORS")

        { 
            humanPoint++
        }

    else if (computerChoice == "SCISSORS" && humanChoice == "ROCK")
        { 
            humanPoint++
        }
    else { computerPoint++ }
    }


function playgame() {
    for(i=0;i<=4;i++) {
        getHumanChoice();
        getComputerChoice();
        compare();
        alert(humanPoint);
    }
}

playgame();