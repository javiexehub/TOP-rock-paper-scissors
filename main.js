console.log("Helluu")


// function getComputerChoice() {
//     choice = Math.floor(Math.random() + 1)
// }
//OMFG, I just noticed I started coding before understanding the problem and pseudocoding

// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// #1 understand the problem:
//      Create a function, that generates a random number between 1 and 3, if it generates 1 return rock, 2  paper, and 3 scisssors.
//      Create a function that asks the user to choice between rock paper and scissors.
//      Create a function that 

// #2 PLAN:
//      No plan, lets pseudocode.

// #3 Pseudocode:

//FUNCTION getComputerChoice
//  FUNCTION getRandomInt
//      CREATE an integer variable for n
//      COMPUTE a random int between 1 and 3 and put answer in n
//      RETURN n
//  ENDFUNCTION
//  CREATE a string variable for computerChoice 
//  IF n is 1 THEN
//      PUT "ROCK" in computerChoice
//      RETURN computerChoice
//      ELSEIF "PAPER" is 2 THEN
//          PUT "SCISSORS" in computerChoice
//          RETURN computerChoice
//          ELSEIF n is 3 THEN
//              PUT n in computerChoice
//              RETURN computerChoice
//                 ELSE
//                     PRINT "FATAL ERROR"
//  ENDIF
//ENDFUNCTION
//
//
//      
//


//FUNCTION getComputerChoice
function getComputerChoice(){
//  FUNCTION getRandomInt
    function getRandomInt(){
//      CREATE an integer variable for n
        let n = 0;
//      COMPUTE a random int between 1 and 3 and put answer in n
        n = Math.floor(Math.random() * 3) + 1;
//      RETURN n
        return n;
//  ENDFUNCTION
    }
    let randomInt = getRandomInt();
//  CREATE a string variable for computerChoice
    let computerChoice = "";
//  IF randomInt equals 1 THEN
    if (randomInt === 1) {
//      PUT "ROCK" in computerChoice
        computerChoice = "rock";
//      RETURN computerChoice
        return computerChoice;
//  ENDIF
    }
//  ELSEIF randomInt equals 2 THEN
    else if (randomInt === 2) {
//      PUT "PAPER" in computerChoice
        computerChoice = "paper";
//      RETURN computerChoice
        return computerChoice;
//  ENDELSEIF
    }
//  ELSEIF randomInt equals 3 THEN
    else if (randomInt === 3) {
//      PUT SCISSORS in computerChoice
        computerChoice = "scissors";
//      RETURN computerChoice
        return computerChoice;
//  ENDELSEIF
    }
//ENDFUNCTION
}

//FUNCTION getHumanChoice
//  CREATE a string variable for humanChoice
//  ASK the user for "Type 1 for Rock, 2 for Paper and 3 for Scissors" and put the answer in humanChoice
//  IF the answer is equals to 1, return "rock"
//  ENDIF
//  ELSEIF answer is equal to 2, return "paper"
//  ENDELSEIF
//  ELSEIF answer is equal to 3, return "scissors"

function getHumanChoice(){
    let humanChoice = ""
    humanChoice = prompt("Rock, paper or Scissors?").toLowerCase()
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        return alert('Error, next');
    }
}

//Declare the players score variables
var computerScore = 0;
var humanScore = 0;

//FUNCTION playSingleRound (computerScore, humanScore)
//  IF computerChoice equals humanChoice THEN
//      SHOW "You both chose" humanChoice
//  ENDIF
//  ELSE IF humanChoice equals "rock" and computerChoice equals  "paper" or "scissors" AND computerChoice equalls

function playRound (computerChoice, humanChoice){
    if (computerChoice === humanChoice) {
        console.log("You both chose " + humanChoice)
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You won! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
    }
    else if (humanChoice == undefined) {
        alert('Invalid input, try againmmmmmm')
    }
    else {
        console.log("COMPUTER WINSSS! " + humanChoice + " loses to " + computerChoice)
        computerScore += 1;
    }

}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
