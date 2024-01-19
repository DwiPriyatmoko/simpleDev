let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

updateScoreElement();

// FUNCTION FOR RESET SCORE
document.querySelector('.js-reset-button').addEventListener('click', () => {
	resetScore();
	updateScoreElement();
});
function resetScore() {
	score = {
		wins: 0,
		losses: 0,
		ties: 0,
	};
	localStorage.removeItem('score');
}

// FUNCTION FOR COMPUTER MOVE
function pickComputerMove() {
	const randomNumber = Math.random();

	let computerMove = '';

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'scissors';
	}

	return computerMove;
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
	playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
	playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
	playGame('scissors');
});

// ADD EVENT LISTENER FOR KEYDOWN
document.body.addEventListener('keydown', (event) => {
	// console.log(event.key);
	if (event.key === 'r') {
		playGame('rock');
	} else if (event.key === 'p') {
		playGame('paper');
	} else if (event.key === 's') {
		playGame('scissors');
	}
});

// FUNCTION FOR PLAY GAME
function playGame(playerMove) {
	const computerMove = pickComputerMove();

	let result = '';

	if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You lose.';
		} else if (computerMove === 'paper') {
			result = 'You win.';
		} else if (computerMove === 'scissors') {
			result = 'Tie.';
		}
	} else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			result = 'You win.';
		} else if (computerMove === 'paper') {
			result = 'Tie.';
		} else if (computerMove === 'scissors') {
			result = 'You lose.';
		}
	} else if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie.';
		} else if (computerMove === 'paper') {
			result = 'You lose.';
		} else if (computerMove === 'scissors') {
			result = 'You win.';
		}
	}

	if (result === 'You win.') {
		score.wins += 1;
	} else if (result === 'You lose.') {
		score.losses += 1;
	} else if (result === 'Tie.') {
		score.ties += 1;
	}

	localStorage.setItem('score', JSON.stringify(score));

	updateScoreElement();

	document.querySelector('.js-result').innerHTML = result;

	document.querySelector('.js-moves').innerHTML = `
				You
		<img src="images/${playerMove}-emoji.png" alt="rock-emoji" class="move-icon">
		<img src="images/${computerMove}-emoji.png" alt="paper-emoji" class="move-icon">
		Computer
				`;

	// alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
	// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

// FUNCTION TO UPDATE SCORE
function updateScoreElement() {
	document.querySelector(
		'.js-score'
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// FUNCTION TO SET INTERVAL
let isAutoPlaying = false;
let intervalId;
//const autoPlay = () => {};

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
	if (!isAutoPlaying) {
		autoPlay();
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
});

function autoPlay() {
	// regular function on this because easier to read and Hoisting
	if (!isAutoPlaying) {
		intervalId = setInterval(() => {
			const playerMove = pickComputerMove();
			playGame(playerMove);
		}, 1000);
		isAutoPlaying = true;
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
	}
}
