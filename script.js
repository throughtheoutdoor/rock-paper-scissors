let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
// returns rock, paper or scissors based
// on a random number

    let choice = "";
    let ranNum = Math.random();


    if (ranNum < .61 && ranNum > .30) {
        choice = "Paper"; 
    } else if (ranNum > .61) {
        choice = "Scissors";
    } else  {
        choice = "Rock";
    }

    return choice;
}


function getHumanChoice() {
//returns the user's choice

    let choice = prompt(`What is your choice?
rock, paper or scissors`);
    
    return choice;
}


function playRound( humanChoice, computerChoice){
//determines a winner given the two parameters
//Rock beats scissors
//Scissors beats paper
//Paper beats rock

let result = "";
let human = humanChoice.toLowerCase();
let computer = computerChoice.toLowerCase();

if (human == computer) {
    // checks for tie
    console.log (`Tie, ${human} matches ${computer}!`);
    return;
} 

if (human == 'rock') {
    if (computer == 'paper') {
        console.log (`I win, ${computer} beats ${human}.`);
        return;
    }
    else { //computer picked scissors
        console.log(`You win, ${human} beats ${computer}.`);
        return;
    }
    
}

if (human == 'paper') {
    if (computer == 'scissors') {
        console.log (`I win, ${computer} beats ${human}.`);
        return;
    }
    else { //computer picked rock
        console.log(`You win, ${human} beats ${computer}.`);
        return;
    }
    
}

if (human == 'scissors') {
    if (computer == 'rock') {
        console.log (`I win, ${computer} beats ${human}.`);
        return;
    }
    else { //computer picked paper
        console.log(`You win, ${human} beats ${computer}.`);
        return;
    }
    
}

}

            


playRound("scissors", "paper");