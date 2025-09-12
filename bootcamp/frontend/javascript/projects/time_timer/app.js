//Timer function example

//setTimeout is a function that allows you to execute a piece of code after a specified delay (in milliseconds).
//It takes two arguments: a callback function and the delay in milliseconds.
setTimeout(function () {
  console.log("This message is displayed after 2 seconds");
}, 2000); // 2000 milliseconds = 2 seconds
//You can also use an arrow function for the same purpose
setTimeout(() => {
  console.log("This message is displayed after 3 seconds");
}, 3000); // 3000 milliseconds = 3 seconds

//setInterval is a function that allows you to repeatedly execute a piece of code at specified intervals (in milliseconds).
//It takes two arguments: a callback function and the interval in milliseconds.
let intervalId = setInterval(function () {
  console.log("This message is displayed every 1 second");
}, 1000); // 1000 milliseconds = 1 second

setInterval(function () {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  const hourElement = document.getElementById("hour");
  const minuteElement = document.getElementById("min");
  const secondElement = document.getElementById("sec");
  const millisecondsElement = document.getElementById("mili");
  hourElement.textContent = hours < 10 ? `0${hours}` : hours; // Add leading zero if needed
  minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if needed
  secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds; // Add leading zero if needed
  millisecondsElement.textContent =
    milliseconds < 100
      ? milliseconds < 10
        ? `00${milliseconds}`
        : `0${milliseconds}`
      : milliseconds; // Always 3 digits
}, 10); // 10 milliseconds for smooth milliseconds update

//make a timer
// Simple Stopwatch Timer
let timerInterval;
let timerRunning = false;
let elapsed = 0;

function updateTimerDisplay() {
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const milliseconds = elapsed % 1000;
  const timerDisplay = document.getElementById("timer-display");
  if (timerDisplay) {
    timerDisplay.textContent =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds) +
      "." +
      (milliseconds < 100
        ? milliseconds < 10
          ? "00" + milliseconds
          : "0" + milliseconds
        : milliseconds);
  }
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    const startTime = Date.now() - elapsed;
    timerInterval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateTimerDisplay();
    }, 10);
  }
}

function stopTimer() {
  if (timerRunning) {
    timerRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  stopTimer();
  elapsed = 0;
  updateTimerDisplay();
}

// Attach to buttons if they exist
window.addEventListener("DOMContentLoaded", () => {
  updateTimerDisplay();
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");
  if (startBtn) startBtn.addEventListener("click", startTimer);
  if (stopBtn) stopBtn.addEventListener("click", stopTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);
});
