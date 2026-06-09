


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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    

    function playRound(){
    //determines a winner given the two choices
    //Rock beats scissors
    //Scissors beats paper
    //Paper beats rock

    let human = getHumanChoice().toLowerCase();
    let computer = getComputerChoice().toLowerCase();

    if (human == computer) {
        // checks for tie
        console.log (`Tie, ${human} matches ${computer}.`);
        ties += 1;
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

    for (let i = 0; i < 5; i++){
        playRound();
    }

  
    if (humanScore == computerScore) {
        return (`After five games, there was a draw. The user won:${humanScore} games and the computer won ${computerScore} games. There were ${ties} tied games.`);
    }

    if ( humanScore > computerScore) {
        return(`After five games, the user has won with a score of Wins:${humanScore} Losses:${computerScore} Draws:${ties}.`);    
    } else {
        return (`After five games, the computer has won with a score of Wins:${computerScore} Losses:${humanScore} Draws:${ties}.`);
    }


    

}

            
console.log (playGame());
