function getRandomInt(max) {
return Math.floor(Math.random() * max);
}




let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector("#results");
const score = document.querySelector("#score");



rock.addEventListener("click", function (e) {
    playRound("rock");
});

paper.addEventListener("click", function (e) {
    playRound("paper");
});

scissors.addEventListener("click", function (e) {
    playRound("scissors");
});






function getComputerChoice(){
    if (getRandomInt(3) == 0){
        return "rock";
    }else if (getRandomInt(3) == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

/*function getHumanChoice(human){
    return prompt(human).toLowerCase();;
}*/





function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();

    if (humanChoice == "paper" && computerChoice == "rock"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }else if (computerChoice == "paper" && humanChoice == "rock"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        computerScore++;
    }else if (computerChoice == "rock" && humanChoice == "scissors"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        computerScore++;
    }else if (computerChoice == "scissors" && humanChoice == "paper"){
        result.innerHTML = `You win! ${humanChoice} beats ${computerChoice}!`;
        computerScore++;
    }else if (computerChoice == humanChoice){
        result.textContent = `That's a tie!`;
    }

    if(computerScore === 5 || humanScore === 5){
        if(computerScore > humanScore){
            result.innerHTML = "Puter wins! Restart to play again!"
            rock.remove();
            paper.remove();
            scissors.remove();
        }else if (humanScore > computerScore){
            result.innerHTML = "Hooman wins! Restart to play again!"
            rock.remove();
            paper.remove();
            scissors.remove();
        }else {
            result.innerHTML = "Its-a tie!"
            rock.remove();
            paper.remove();
            scissors.remove();
        }
    }

    score.innerHTML = `Computer: ${computerScore} You: ${humanScore}`

    
}