let playerWins = 0;
let computerWins = 0;
let count = 0;
let roundCount = document.createElement('h4');
let h1 = document.querySelector('h1')
h1.appendChild(roundCount);
let button = document.querySelectorAll('.btn');
for(var i = 0; i< button.length; i++){
    button[i].addEventListener('click', function(e){
        playerSelection = e.target.value;
        game();
    })
}

 function getComputerChoice() {
   let choices = ["rock","paper","scissors"];
   let randomChoice = Math.floor(Math.random() * 3);
   return choices[randomChoice];
 }

 function playRound(playerSelection, computerSelection) {
     
    if (playerSelection === "rock" && computerSelection === "paper"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        let printResult = document.createElement('p');
         printResult.textContent = result;
         resultdiv.appendChild(printResult);
        return
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        let printResult = document.createElement('p');
        printResult.textContent = result;
        resultdiv.appendChild(printResult);
        return
    }
    if (playerSelection === "scissors" && computerSelection === "rock"){
        computerWins++
        count++
        let result = `You Lose ${computerSelection} beats ${playerSelection}`;
        let printResult = document.createElement('p');
        printResult.textContent = result;
        resultdiv.appendChild(printResult);
        return
        
    }
    if (playerSelection === computerSelection){
        count ++
        let result = `${computerSelection} and ${playerSelection} cancel each other out, we will replay this round`;
        let printResult = document.createElement('p');
        printResult.textContent = result;
        resultdiv.appendChild(printResult);
        return
        
    }
    else {
        playerWins++;
        count++
        let result = `You win ${playerSelection} beats ${computerSelection}`;
        let printResult = document.createElement('p');
        printResult.textContent = result;
        resultdiv.appendChild(printResult);
        return
    }
 }

 function game(){
    computerSelection = getComputerChoice();
     
    (playRound(playerSelection, computerSelection));
       
       let playerwins = document.getElementById('playerwins')
       let playerWinCount = document.createElement('p')
       playerWinCount.textContent = `${playerWins} + ${playerSelection}`
       playerwins.appendChild(playerWinCount)

       let computerWinCount = document.createElement('p')
       computerWinCount.textContent = `${computerWins} + ${computerSelection}`
       computerwins.appendChild(computerWinCount)

       roundCount.textContent = `Total Rounds played - ${count}`;

 if(playerWins == 3 ){
    let printResult = document.createElement('p');
        printResult.textContent = 'Game is Over, You have beaten the computer';
        resultdiv.appendChild(printResult);
       let buttons = document.querySelectorAll('button');
       buttons.forEach((button) => {
       button.style.display = "none";
 })
}

if(computerWins == 3){
    let printResult = document.createElement('p');
        printResult.textContent = 'Game is Over, the computer has won this game, You are going to have to try harder';
        resultdiv.appendChild(printResult);
        let buttons = document.querySelectorAll('button');
       buttons.forEach((button) => {
       button.style.display = "none";
 })
}
       }      



 
 
 
 