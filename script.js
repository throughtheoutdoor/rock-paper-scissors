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

let human = humanChoice.toLowerCase();
let computer = computerChoice.toLowerCase();

if (human == computer) {
    // checks for tie
    console.log (`Tie, ${human} matches ${computer}.`);
    return;
} 

if (human == 'rock') {
    if (computer == 'paper') {
        console.log (`Computer wins, ${computer} beats ${human}.`);
        computerScore += 1;
        return;
    }
    else { //computer picked scissors
        console.log(`User wins, ${human} beats ${computer}.`);
        humanScore += 1;
        return;
    }
    
}

if (human == 'paper') {
    if (computer == 'scissors') {
        console.log (`Computer wins, ${computer} beats ${human}.`);
        computerScore += 1;
        return;
    }
    else { //computer picked rock
        console.log(`User wins, ${human} beats ${computer}.`);
        humanScore += 1;
        return;
    }
    
}

if (human == 'scissors') {
    if (computer == 'rock') {
        console.log (`Computer wins, ${computer} beats ${human}.`);
        computerScore += 1;
        return;
    }
    else { //computer picked paper
        console.log(`User wins, ${human} beats ${computer}.`);
        humanScore += 1;
        return;
    }
    
}

}

            
playRound(getHumanChoice(),getComputerChoice());

// for (let i = 1; humanScore < 10 && computerScore < 10 ; i++) {

//     console.log(`Round: ${i}`);
//     playRound( getComputerChoice(), getComputerChoice() );
//     console.log (`Scores: User - ${humanScore} Computer: ${computerScore}`);

// }