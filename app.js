const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt('Rock, Paper or Scissors?', '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert('Invalid choice! We chose Rock for you!');
    return ROCK;
  }
  return selection;
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
});
