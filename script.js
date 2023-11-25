
const choices = document.querySelectorAll('.choices img');
const roundElement = document.getElementById('round');
const score1Element = document.querySelector('#playerScore');
const score2Element = document.querySelector('#computerScore');
const resultElement = document.querySelector('.result');
const winnerElement = document.querySelector('.winner');
const logElement = document.getElementById('log');

let chances = 0;
let win_msg;
let playable = true;
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return -1;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        return 1;
    } else {
        return 0;
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        if (playable) {
            chances++;
            roundElement.innerHTML = `${chances}/5`;

            const playerSelection = choice.getAttribute('id').toLowerCase();
            const computerSelection = getComputerChoice();

            document.querySelector('.computerchoice').innerHTML =
                `<img src="images/rps_${computerSelection}.png">`;

            const roundResult = playRound(playerSelection, computerSelection);

            if (roundResult == 0) {
                score2Element.innerHTML = ++computerScore;
                logElement.textContent = `You lose this round ! ${computerSelection} beats ${playerSelection}`;
            } else if (roundResult == 1) {
                score1Element.innerHTML = ++playerScore;
                logElement.textContent = `You win this round ! ${playerSelection} beats ${computerSelection}`;
            } else {
                logElement.textContent = `This round's a Tie`;
            }

            win_msg = (playerScore > computerScore) ? 'You Win !' : (computerScore > playerScore) ? 'You Lost !' : 'Tie!';

            if (chances === 5) {
                playable = false;
                resultElement.style.display = 'flex';
                winnerElement.textContent = win_msg;
            }
        }
    });
});

document.querySelector('.reset').addEventListener('click', () => {
    setTimeout(() => {
        resultElement.style.display = 'none';
        roundElement.innerHTML = '0/5';
        playable = true;
        chances = 0, playerScore = 0, computerScore = 0;
        score1Element.textContent = 0;
        score2Element.textContent = 0;
        logElement.textContent = '';
    }, 400);
});
