function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num == 0) return "Rock";
    if (num == 1) return "Paper";
    if (num == 2) return "Scissor";
}
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
function game() {
    let round = 3;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 3; i++) {
        let playerSelection = prompt("Enter your choice").toUpperCase();

        if (playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSOR') {
            alert('Invalid choice ! Play again ');
            return;
        }

        let computerSelection = getComputerChoice().toUpperCase();

        alert(`Player's Choice : ${playerSelection}\nComputer's Choice : ${computerSelection}\n${playRound(playerSelection, computerSelection)}\n${--round} chances left.`);

        if (playRound(playerSelection, computerSelection) == 'Computer Wins ! Better luck next time...')
            computerScore++;

        if (playRound(playerSelection, computerSelection) == 'You Win !')
            playerScore++;
    }
    if (playerScore > computerScore)
        alert(`Game over! You win the game !`);

    else if (computerScore > playerScore)
        alert('Game Over! Computer Wins the game !');

    else if (computerScore == playerScore)
        alert(`Game Over ! It's a tie.`);

}
const play = document.querySelector('.playbutton');
play?.addEventListener('click', () => {
    game();
})
