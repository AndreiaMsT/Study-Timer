const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");
const timerEl = document.querySelector(".timer");
const shortEl = document.querySelector(".short");
const mediumEl = document.querySelector(".medium");
const longEl = document.querySelector(".long");

let interval;
let timeLeft = 1500;

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = displayTime;
};

const setStart = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time for a break");
      timeLeft = 1500;
    }
  }, 1000);
};

const setStop = () => {
  clearInterval(interval);
};

const setReset = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

const setShortBreak = () => {
  timeLeft = 300;
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("let's get back to work!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};

const setMediumBreak = () => {
  timeLeft = 900;
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("let's get back to work!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};

const setLongBreak = () => {
  timeLeft = 1800;
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("let's get back to work!");
      interval = 1500;
      updateTimer();
    }
  }, 1000);
};

startEl.addEventListener("click", setStart);
stopEl.addEventListener("click", setStop);
resetEl.addEventListener("click", setReset);
shortEl.addEventListener("click", setShortBreak);
mediumEl.addEventListener("click", setMediumBreak);
longEl.addEventListener("click", setLongBreak);
