

//DECLARING GLOBAL VARIABLES

let userChoice = "none";
let computerChoice = "none";
let computerPoint = 0;
let humanPoint = 0;
let decision = 0;

//FUNCTION TO GET THE USERS CHOICE 


  const buttons = document.querySelectorAll('.choiceButton');
    buttons.forEach(button => {
    button.addEventListener('click',(event) => {
    userChoice = event.target.dataset.choice;
    if (userChoice == "ROCK"){
      document.getElementById("userIcon").className = "fa-solid fa-hand-back-fist fa-7x";
    } else if ( userChoice == "PAPER") {
      document.getElementById("userIcon").className = "fa-solid fa-hand fa-7x";
    } else {
      document.getElementById("userIcon").className = "fa-solid fa-hand-scissors fa-7x";
    }


    getComputerChoice();
    compare(computerChoice,userChoice);
    setTimeout(resetIcon,1000);

    });

    });


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice == 1) {
    computerChoice = "ROCK";
    document.getElementById("computerIcon").className = "fa-solid fa-hand-back-fist fa-7x";
  } else if (choice == 2) {
    computerChoice = "PAPER";
    document.getElementById("computerIcon").className = "fa-solid fa-hand fa-7x";
  } else {
    computerChoice = "SCISSORS";
    document.getElementById("computerIcon").className = "fa-solid fa-hand-scissors fa-7x";
  }

}

//FUNTION TO COMPARE WHO WINS AND INCREASE THE SCORE COUNT

function compare(computerChoice, humanChoice) {
  if (computerChoice == "ROCK" && humanChoice == "PAPER") {
    humanPoint++;
    document.getElementById("userScore").textContent=humanPoint;

  } else if (computerChoice == humanChoice){
    return;
  } else if (computerChoice == "PAPER" && humanChoice == "SCISSORS") {
    humanPoint++;
    document.getElementById("userScore").textContent=humanPoint;
    

  } else if (computerChoice == "SCISSORS" && humanChoice == "ROCK") {
    humanPoint++;
    document.getElementById("userScore").textContent=humanPoint;

  } else {
    computerPoint++;
    document.getElementById("computerScore").textContent=computerPoint;
    
  }
   
}

// FUNCTION TO RESET ICON 

function resetIcon() {
  document.getElementById("computerIcon").className = "fa-solid fa-question fa-7x";
  document.getElementById("userIcon").className = "fa-solid fa-question fa-7x";

}

// FUNCTION TO START GAME

function playgame() {
      
  resetIcon();
  computerPoint = 0;
  humanPoint = 0;
  document.getElementById("userScore").textContent=0;
  document.getElementById("computerScore").textContent=0;
    
}




document.querySelector('#startButton').addEventListener('click',playgame);

