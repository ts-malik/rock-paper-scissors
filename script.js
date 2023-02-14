const playerGuess = document.querySelector(".playerGuess");
const computerGuess = document.querySelector(".computerGuess");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const gameResult = document.querySelector(".gameResult");

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    gameResult.style.backgroundColor = "yellow";
    gameResult.style.color = "black";
    return "You Drew! Play again";
  }
  else if (playerSelection == "rock") {
      if (computerSelection == "scissors") {
        gameResult.style.backgroundColor = "green";
        return "You Win! Rock beats scissors";
      }
      else {gameResult.style.backgroundColor = "red";
        return "You Lose! Paper beats rock!";
      }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      gameResult.style.backgroundColor = "green";
      return "You Win! Paper beats rock";
    }
    else {gameResult.style.backgroundColor = "red";
      return "You Lose! Scissors beats paper";
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      gameResult.style.backgroundColor = "green";
      return "You Win! Scissors beats paper";
    }
    else {gameResult.style.backgroundColor = "red";
      return "You Lose! Rock beats scissors";
    }
  }
  else {gameResult.style.backgroundColor = "red";
  return "Not a valid choice! Try again";
  }
}

function checkGuess() {
  setGameOver();
  const playerSelection = guessField.value.toLowerCase();
  playerGuess.textContent = "You guessed: " + playerSelection;
  const computerSelection = getComputerChoice();
  computerGuess.textContent = "The computer guessed: " + computerSelection;
  gameResult.textContent = playRound(playerSelection, computerSelection);
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }
    resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  gameResult.style.backgroundColor = "white";
}