
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


   
