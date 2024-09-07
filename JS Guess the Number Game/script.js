// General sets

const buttonAgain = document.getElementById("againButton");
const buttonCheck = document.getElementById("checkButton");
const message = document.querySelector(".message");
const inputNumber = document.querySelector(".numberInput");
const questionBox = document.getElementById("questionBox");
const body = document.querySelector("body");
const jsConfetti = new JSConfetti();

let randomNumber;
let score;
let highscore = 0;
let gameOver = false;

// Checking the validity of the entered number / between 1 and 20 etc.

function checkGuess() {
  if (gameOver) return;

  const userGuess = Number(inputNumber.value);

  if (!userGuess || userGuess < 1 || userGuess > 20) {
    message.textContent = "Ups! Your number is wrong! Try again!";
    message.style.color = "var(--alertRedColor)";
    inputNumber.value = "";
    score--;
    document.querySelector(".score").textContent = score;

    if (score === 0) {
      message.textContent = "Game over! You lost!!!";
      questionBox.textContent = randomNumber;
      body.style.backgroundColor = "var(--alertRedColor)";
      buttonAgain.textContent = "Try again!";
      buttonAgain.style.backgroundColor = "var(--buttonHover)";
      buttonAgain.style.color = "var(--textColor)";
      message.style.color = "";
      gameOver = true;
      disableInput();
      buttonCheck.style.visibility = "hidden";
      jsConfetti.addConfetti({
        emojis: ["💀", "🦴", "💥", "👻", "☠️"],
        emojiSize: 50,
        confettiNumber: 100,
      });
    }
    return;
  }

  // Checking gamer's number / results
  // win
  if (userGuess === randomNumber) {
    message.textContent = "Congratulations! You won!";
    body.style.backgroundColor = "var(--alertGreenColor)";
    questionBox.textContent = randomNumber;
    // score--;
    buttonAgain.textContent = "Try again!";
    buttonAgain.style.backgroundColor = "var(--buttonHover)";
    buttonAgain.style.color = "var(--textColor)";
    message.style.color = "";
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff5c5c",
        "#ff9f5c",
        "#ffea5c",
        "#9fff5c",
        "#5cffa1",
        "#5cafff",
        "#8a5cff",
        "#ff5ccf",
        "#ff6c5c",
        "#5cff6c",
      ],
      emojiSize: 5,
      confettiNumber: 1200,
    });

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    gameOver = true;
    disableInput();
    buttonCheck.style.visibility = "hidden";
  }
  // Incorrect number
  else {
    score--;
    if (score > 0) {
      message.textContent =
        userGuess < randomNumber
          ? "Too low! Try again."
          : "Too high! Try again.";
      inputNumber.value = "";
      message.style.color = "var(--alertRedColor)";
    }
    // Lost game
    else {
      message.textContent = "Game over! You lost!!!";
      questionBox.textContent = randomNumber;
      body.style.backgroundColor = "var(--alertRedColor)";
      buttonAgain.textContent = "Try again!";
      buttonAgain.style.backgroundColor = "var(--buttonHover)";
      buttonAgain.style.color = "var(--textColor)";
      message.style.color = "";
      jsConfetti.addConfetti({
        emojis: ["💀", "🦴", "💥", "👻", "☠️"],
        emojiSize: 50,
        confettiNumber: 100,
      });
      gameOver = true;
      disableInput();
      buttonCheck.style.visibility = "hidden";
    }
  }
  // New score
  document.querySelector(".score").textContent = score;
}

//  New game / Restart game

function restartGame() {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  buttonAgain.style.backgroundColor = "";
  buttonAgain.style.color = "";
  message.style.color = "";
  inputNumber.value = "";
  inputNumber.focus();
  body.style.backgroundColor = "";
  questionBox.textContent = "?";
  buttonCheck.style.visibility = "visible";
  gameOver = false;
  enableInput();
}

// Enable and disable input (start or end games)

function disableInput() {
  inputNumber.disabled = true;
  buttonCheck.disabled = true;
}

function enableInput() {
  inputNumber.disabled = false;
  buttonCheck.disabled = false;
}

// Buttons and ENTER

buttonCheck.addEventListener("click", checkGuess);
buttonAgain.addEventListener("click", restartGame);

inputNumber.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

buttonAgain.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    restartGame();
  }
});

// Restart game

restartGame();
