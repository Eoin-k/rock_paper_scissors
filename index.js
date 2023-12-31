let playerSelection = 'rock';
const computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;
let count = 0;
 
 function getComputerChoice() {
   let choices = ["rock","paper","scissors"];
   let randomChoice = Math.floor(Math.random() * 3);
   return choices[randomChoice];
    
 }

 function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        return result;
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        return result;
    }
    if (playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        return 
    }
    if (playerSelection === computerSelection){
    if (count != 0){
        count--
        let result = `Its a draw ${computerSelection} and ${playerSelection} cancel each other out, we will replay this round`;
        return result;
    } else {
        let result = `Its a draw ${computerSelection} and ${playerSelection} cancel each other out, we will replay this round`;
        return result;
    }
        
    }
    else {
        playerWins++;
        count++
        let result = `You win ${playerSelection} beats ${computerSelection}`;
    
        return result;
        
    }
    
 }

 function game(){
    for (let rounds = count ; rounds<=20; rounds++){
        if(playerWins == 3 || computerWins == 3){
            console.log( 'Game is over' )
        } else {
        let message;
        playerSelection = prompt(message);
       console.log (playRound(playerSelection, computerSelection));
       console.log(count)
       }
    }
 }


 game();
 console.log(playerWins);
 console.log(computerWins);
 
 
 