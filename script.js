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
    console.log (`Tie, ${human} matches ${computer}!`);
} 
// else if (human == "rock" && computer == "scissors") {
//     console.log ("You win! Rock beats scissors.");
// } else  (human == "rock" && computer == "paper"){
//     console.log ("You lose! Paper covers rock.");
// 
}

            


playRound("paper", "paper");