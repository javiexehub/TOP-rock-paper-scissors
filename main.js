console.log("Helluu")


// function getComputerChoice() {
//     choice = Math.floor(Math.random() + 1)
// }
//OMFG, I just noticed I started coding before understanding the problem and pseudocoding

// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// #1 understand the problem:
//      Create a program, that generates a random number between 1 and 3, if it generates 1 return rock, 2  paper, and 3 scisssors.

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
        computerChoice = "ROCK";
//      RETURN computerChoice
        return computerChoice;
//  ENDIF
    }
//  ELSEIF randomInt equals 2 THEN
    else if (randomInt === 2) {
//      PUT "PAPER" in computerChoice
        computerChoice = "PAPER";
//      RETURN computerChoice
        return computerChoice;
//  ENDELSEIF
    }
//  ELSEIF randomInt equals 3 THEN
    else if (randomInt === 3) {
//      PUT SCISSORS in computerChoice
        computerChoice = "SCISSORS";
//      RETURN computerChoice
        return computerChoice;
//  ENDELSEIF
    }
//ENDFUNCTION
}

