function getRandomInt(max) {
return Math.floor(Math.random() * max);
}




let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    if (getRandomInt(3) == 0){
        return "rock";
    }else if (getRandomInt(3) == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(human){
    return prompt(human).toLowerCase();;
}


function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log("Let's go! Best of 5!");

    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }else if (computerChoice == "paper" && humanChoice == "rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }else if (computerChoice == "scissors" && humanChoice == "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }else if (computerChoice == humanChoice){
        console.log("Tie! Points do not count!")
    }else{
        alert("That's an invalid input, refresh the page and try again please!")
        location.reload();
    }
}


function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore){
        alert(`You won by ${humanScore - computerScore} points!`);
    }else if (computerScore > humanScore){
        alert(`You lost by ${computerScore - humanScore} points!`);
    }else{
        console.log("Tie! Good job!")
    }
}

playGame();

