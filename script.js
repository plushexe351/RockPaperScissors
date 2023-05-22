function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'];
    return choice[Math.floor(Math.random() * 3)];
}

let chances = 0;
let win_msg;
let playerScore = 0, computerScore = 0;
const choices = document.querySelectorAll('.choices img');
const round = document.getElementById('round');
const score2 = document.querySelector('#computerScore');
const score1 = document.querySelector('#playerScore');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const log = document.querySelector('.log');
round.innerHTML = `${chances}/5`;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        chances++;

        round.innerHTML = `${chances}/5`;

        let playerSelection = choice.getAttribute("id").toUpperCase();

        let computerSelection = getComputerChoice().toUpperCase();

        document.querySelector('.computerchoice').innerHTML =
            `<img src="images/rps_${computerSelection.toLowerCase()}.png">`;


        if (playRound(playerSelection, computerSelection) == 'Computer Wins ! Better luck next time...') {
            score2.innerHTML = ++computerScore;
            log.textContent = `You lose this round ! ${computerSelection} beats ${playerSelection}`;
        }
        else if (playRound(playerSelection, computerSelection) == 'You Win !') {
            score1.innerHTML = ++playerScore;
            log.textContent = `You win this round ! ${playerSelection} beats ${computerSelection}`;
        }
        else log.textContent = `This round's a Tie`;

        if (playerScore > computerScore)
            win_msg = "You Win!";

        else if (computerScore > playerScore)
            win_msg = "You Lost";

        else if (computerScore == playerScore)
            win_msg = "Tie!";

        if (chances == 5) {
            result.style.display = "flex";
            winner.textContent = win_msg;
        }

    })
});

document.querySelector('.reset').addEventListener('click', () => {
    setTimeout(() => {
        result.style.display = "none";
        round.innerHTML = "0/5";
        chances = 0, playerScore = 0, computerScore = 0;
        score1.textContent = 0;
        score2.textContent = 0;
        log.textContent = "";
    }, 400);
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "ROCK")
        return 'Tie !';

    if (playerSelection == "ROCK" && computerSelection == "PAPER")
        return 'Computer Wins ! Better luck next time...'

    if (playerSelection == "ROCK" && computerSelection == "SCISSOR")
        return 'You Win !'

    if (playerSelection == "PAPER" && computerSelection == "ROCK")
        return 'You Win !'

    if (playerSelection == "PAPER" && computerSelection == "PAPER")
        return 'Tie !';

    if (playerSelection == "PAPER" && computerSelection == "SCISSOR")
        return 'Computer Wins ! Better luck next time...'

    if (playerSelection == "SCISSOR" && computerSelection == "ROCK")
        return 'Computer Wins ! Better luck next time...'

    if (playerSelection == "SCISSOR" && computerSelection == "PAPER")
        return 'You Win !'

    if (playerSelection == "SCISSOR" && computerSelection == "SCISSOR")
        return 'Tie !'

}