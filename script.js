const rounds = document.querySelector(".rounds");
const playerGuess = document.querySelector(".playerGuess");
const computerGuess = document.querySelector(".computerGuess");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const roundResult = document.querySelector(".roundResult");

function getComputerChoice() {
  options = ["rock", "paper", "scissors"];
  choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundResult.style.backgroundColor = "yellow";
    roundResult.style.color = "black";
    return "You Drew! Play again";
  }
  else if (playerSelection == "rock") {
      if (computerSelection == "scissors") {
        roundResult.style.backgroundColor = "green";
        return "You Win! Rock beats scissors";
      }
      else {roundResult.style.backgroundColor = "red";
        return "You Lose! Paper beats rock!";
      }
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      roundResult.style.backgroundColor = "green";
      return "You Win! Paper beats rock";
    }
    else {roundResult.style.backgroundColor = "red";
      return "You Lose! Scissors beats paper";
    }
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      roundResult.style.backgroundColor = "green";
      return "You Win! Scissors beats paper";
    }
    else {roundResult.style.backgroundColor = "red";
      return "You Lose! Rock beats scissors";
    }
  }
  else {roundResult.style.backgroundColor = "red";
    return "Not a valid choice! Try again";
  }
}

let round = 1;
let player = 0;
let computer = 0;

function checkGuess() {

  if (round === 1) {
    rounds.textContent = "Score: ";
  }

  if (round > 4) {
    if (player > computer) {
      finalResult = `Congrats! You won ${player} rounds! The computer only won ${computer} rounds!`;
    }
    else if (player < computer) {
      finalResult = `Sorry! The computer won ${computer} rounds! You only won ${player} rounds!`;
    }
    else {
      finalResult = `You and the computer both won ${player} rounds!`;
    }
    
    setGameOver(finalResult);
  }

  const playerSelection = guessField.value.toLowerCase();
  playerGuess.textContent = "You guessed: " + playerSelection;
  const computerSelection = getComputerChoice();
  computerGuess.textContent = "The computer guessed: " + computerSelection;
  roundResult.textContent = playRound(playerSelection, computerSelection);

  if (roundResult.textContent.includes("Win")) {
    score = "Win";
    player++
  }
  else if (roundResult.textContent.includes("Lose")) {
    score = "Lose";
    computer++
  }
  else if (roundResult.textContent.includes("Drew")) {
    score = "Draw";
  }
  else {
    score = "N/A";
  }

  if (round < 5) {
  rounds.textContent += score + ", ";
  }
  else {
    rounds.textContent += score;
  }

  round++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(finalResult) {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  output = document.createElement("paragraph");
  output.textContent = finalResult;
  document.body.appendChild(output);
  output.style.border = "thick solid blue";
  output.style.padding = "2px";
  newline1 = document.createElement("br");
  document.body.appendChild(newline1);
  newline2 = document.createElement("br");
  document.body.appendChild(newline2);
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {

  round = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  output.parentNode.removeChild(output);
  newline1.parentNode.removeChild(newline1);
  newline2.parentNode.removeChild(newline2);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  roundResult.style.backgroundColor = "white";
}