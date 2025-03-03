let humanScore = 0;
let computerScore = 0;

// get human choice and make it case insensative

function getHumanChoice() {
  const choice = prompt("Enter your choice: ");
  return choice.toLowerCase();
}

// get computer choice

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    return choice[index];

}

// create one playround

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice =  getComputerChoice();
    //check who win!
    // console.log("Computer choice: ", computerChoice);
    if(humanChoice === 'rock' && computerChoice === 'scissor') {
        humanScore++;
        console.log('You Win!');
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log('You Win!');
    } else if(humanChoice === 'scissor' && computerChoice === 'paper') {
        humanScore++;
        console.log('You Win!');
    } else if(humanChoice === computerChoice) {
        console.log('Same Choice!');
    } else {
        computerScore++;
        console.log('Computer Win');
    }
}

// playground for 5 round; 
function playGame() {
    for(i = 0; i < 5; i++) {
        playRound();
    }
    humanScore > computerScore ?
     console.log("Final Score "+humanScore+" You Win!"):
     console.log("Final Score "+computerScore+" Computer Win!");

}

playGame();