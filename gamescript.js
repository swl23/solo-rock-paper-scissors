let humanScore = 0;
let computerScore = 0;

window.addEventListener('DOMContentLoaded', () => {
    updateScore();

    const rock = document.querySelector('#rock-btn');
    const paper = document.querySelector('#paper-btn');
    const scissors = document.querySelector('#scissors-btn');

    rock.addEventListener('click', () => {
        const humanMove = 'rock';
        const computerMove = getComputerChoice();
        compareMoves(humanMove, computerMove);
        checkGame(humanScore, computerScore);
    });

    paper.addEventListener('click', () => {
        const humanMove = 'paper';
        const computerMove = getComputerChoice();
        compareMoves(humanMove, computerMove);
        checkGame(humanScore, computerScore);
    });

    scissors.addEventListener('click', () => {
        const humanMove = 'scissors';
        const computerMove = getComputerChoice();
        compareMoves(humanMove, computerMove);
        checkGame(humanScore, computerScore);
    });
})

function getComputerChoice() {
    const die = Math.floor(Math.random() * 3);
    let choice = '';
    if (die === 0) {
        choice = 'rock'
    }
    else if (die === 1) {
        choice = 'paper'
    }
    else {
        choice = 'scissors'
    }
    return choice
}

function compareMoves(humanMove, computerMove) {

    if (humanMove === 'rock' && computerMove === 'paper') {
        computerScore += 1;
        computerWin(humanMove, computerMove)
    }
    else if (humanMove === 'rock' && computerMove === 'scissors') {
        humanScore += 1;
        humanWin(humanMove, computerMove)
    }
    else if (humanMove === 'paper' && computerMove === 'rock') {
        humanScore += 1;
        humanWin(humanMove, computerMove)
    }
    else if (humanMove === 'paper' && computerMove === 'scissors') {
        computerScore += 1;
        computerWin(humanMove, computerMove)
    }
    else if (humanMove === 'scissors' && computerMove === 'rock') {
        computerScore += 1;
        computerWin(humanMove, computerMove)
    }
    else if (humanMove === 'scissors' && computerMove === 'paper') {
        humanScore += 1;
        humanWin(humanMove, computerMove)
    }
    else {
        tie(humanMove, computerMove)
    }
}

function updateScore() {
    let human = document.getElementById('human-score');
    let computer = document.getElementById('computer-score');

    human.textContent = humanScore;
    computer.textContent = computerScore;
}

function computerWin(humanMove, computerMove) {
    const announcement = 'You played ' + humanMove + '. Computer played ' + computerMove + '. COMPUTER WINS.'
    const newsfeed = document.querySelector('.newsfeed');
    let addUpdate = document.createElement('p');
    addUpdate.textContent = announcement;
    newsfeed.appendChild(addUpdate);
    updateScore();
}

function humanWin(humanMove, computerMove) {
    const announcement = 'You played ' + humanMove + '. Computer played ' + computerMove + '. YOU WIN.'
    const newsfeed = document.querySelector('.newsfeed');
    let addUpdate = document.createElement('p');
    addUpdate.textContent = announcement;
    newsfeed.appendChild(addUpdate);
    updateScore();
}

function tie(humanMove, computerMove) {
    const announcement = 'You played ' + humanMove + '. Computer played ' + computerMove + '. IT\'S A TIE.'
    const newsfeed = document.querySelector('.newsfeed');
    let addUpdate = document.createElement('p');
    addUpdate.textContent = announcement;
    newsfeed.appendChild(addUpdate);
}

function checkGame(humanScore, computerScore) {
    const replayMessage = '\nWould you like to play again?\n'
    const pageContainer = document.querySelector('.page-container');
    const humanWins = 'YOU WIN.';
    const computerWins = 'COMPUTER WINS.';

    if (humanScore === 5) {
        let footer = document.createElement('div');
        let gameOver = document.createElement('p');
        let replay = document.createElement('button');
        replay.textContent = 'REPLAY';
        footer.setAttribute('class', 'footer');
        gameOver.setAttribute('id', 'game-over');
        replay.setAttribute('id', 'replay-btn');
        replay.addEventListener('click', () => {
            window.location.reload();
        });
        gameOver.textContent = humanWins + replayMessage;
        footer.appendChild(gameOver);
        footer.appendChild(replay);
        pageContainer.appendChild(footer);
    }
    else if (computerScore === 5) {
        let footer = document.createElement('div');
        let gameOver = document.createElement('p');
        let replay = document.createElement('button');
        replay.textContent = 'REPLAY';
        footer.setAttribute('class', 'footer');
        gameOver.setAttribute('id', 'game-over');
        replay.setAttribute('id', 'replay-btn');
        replay.addEventListener('click', () => {
            window.location.reload();
        });
        gameOver.textContent = computerWins + replayMessage;
        footer.appendChild(gameOver);
        footer.appendChild(replay);
        pageContainer.appendChild(footer);
    }
}