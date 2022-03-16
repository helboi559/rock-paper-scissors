//random choice computer
const choices = ['rock','paper', 'scissors'];
function computerPlay() {
    //options can be global or local
    let randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
//computer choice var
let computerSelection;
//user choice var
let playerSelection;

//user selection
function userChoice() {
    playerSelection=prompt('choose rock, paper, or scissors?', '')
    if((playerSelection === 'rock') || (playerSelection === 'paper') || (playerSelection === 'scissors')) {
        playRound(playerSelection,computerSelection)
    } else {
        alert(`that's not a valid choice!`);
        userChoice();
    }
}
//play a round based on user input starting
// userChoice()
function playRound(playerSelection,computerSelection) {
    //changing selections to lower case
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay().toLowerCase()
    console.log(computerSelection)
    console.log(playerSelection)
    if (playerSelection === computerSelection) {
        alert('tie game!')
    } else if ((computerSelection=='rock' && playerSelection=='scissors') 
                    || (computerSelection=='scissors' && playerSelection=='paper') 
                    || (computerSelection=='paper' && playerSelection=='rock')) {
              alert('You lose! ' + computerSelection + ' beats ' + playerSelection);
              return `Computer score: ${computerScore += 1}; Player Score: ${playerScore}`
                           
          } else {
              alert('You win! ' + playerSelection + ' beats ' + computerSelection);
              return `Computer score: ${computerScore }; Player Score: ${playerScore += 1}`
          }
    
}
let playerScore;
let computerScore ;
//5 round game
// game()
function game() {
    //calculate round winner 
    //playerScore
    playerScore = 0;
    computerScore = 0;
    //loop to play game five times
    for (let i = 0; i < 5; i++) {
        userChoice();
    }
    //log round winners to keep score
    console.log(roundWinner())
    //needs round winner inside to have to not calculate winner
    function roundWinner() {
    if(playerScore === computerScore) {
        alert(`${playerScore} - ${computerScore}: Tie Game!`)
        return `${playerScore} - ${computerScore}: Tie Game!`
    } else if (playerScore > computerScore) {
        alert(`${playerScore} - ${computerScore}: You win!!`)
        return `${playerScore} - ${computerScore}: You win!!`
    } else {
        alert(`${playerScore} - ${computerScore}: You lost!`)
        return `${playerScore} - ${computerScore}: You lost!`
    }
    }
}

