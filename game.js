

function getComputerChoice() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function checkWinner(playerGame, computerGame)
    {
//const playerGame=playerSelection
 //computerGame;
//.toLowerCase();

//const computerGame=getComputerChoice();

if(computerGame=="rock"){
    if(playerGame=="rock"){
        return "Tie";
    }
    else if(playerGame=="scissor"){
        //computerGameCount++;
        return "computer";
    }
    else if(playerGame== "paper"){
        return "man";
        //manGameCount++;
    }
}
else if(computerGame=="scissor"){

if(playerGame=="rock"){
    return "man";
    //manGameCount++;
}
else if(playerGame=="scissor"){
    return "Tie";
}
else if(playerGame== "paper"){
    return "computer";
    //computerGameCount++;
}
}
else if(computerGame=="paper"){
    if(playerGame=="rock"){
        return "computer";
        //computerGameCount++;
    }
    else if(playerGame=="scissor"){
        return "man";
        //manGameCount++;
    }
    else if(playerGame== "paper"){
        return "Tie";
    } 
}
    }
 


function playRound(playerGame, computerGame){
    const result= checkWinner(playerGame, computerGame);
    if(result == "tie"){
       // return "Tie";
        return `It is a tie`;
    }
    else if(result =="man"){
        //return "congrats";
        return `You Win! ${playerGame} beats ${computerGame}`;
    }
     else {
     return `You loose! ${computerGame} beats ${playerGame}`;
    //return "Fail!";
     }
    }


function game(){
    let computerGameCount=0;
    let manGameCount=0; 
    console.log("~WELL COME~")
    for(let i=1; i<=5; i++){
        const playerSelection = prompt("choose among scissor, rock and paper");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("==============");
        if(checkWinner((playerSelection, computerSelection) =="computer"))
        {
            computerGameCount++;
        }
        else if(checkWinner(playerSelection, computerSelection) =="man"){
            manGameCount++;
        }
    }
    if(manGameCount > computerGameCount){
        console.log("Player was the winner!");
    }
    else if(manGameCount < computerGameCount){
        console.log("Computer was the winner!");
    }
    else{
        console.log("We have a tie!");
    }
     console.log("Game Over!");
    }

game();