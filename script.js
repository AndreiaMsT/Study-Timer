const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const resetEl = document.querySelector(".reset");
const timerEl = document.querySelector(".timer");
const shortEl = document.querySelector(".short");
const mediumEl = document.querySelector(".medium");
const longEl = document.querySelector(".long");
const tipsEl = document.querySelector(".break-tips");
const gifEl = document.querySelector(".gif-container");

let interval;
let timeLeft = 1500;

//TIMER FEATURES

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = displayTime;
};

const showImage = () => {
  if ((gifEl.style.display = "none")) {
    gifEl.style.display = "block";
    tipsEl.style.display = "none";
  }
};

const showTips = () => {
  if ((tipsEl.style.display = "none")) {
    gifEl.style.display = "none";
    tipsEl.style.display = "block";
  }
};

const setTimer = () => {
  if (timeLeft === 0) {
    clearInterval(interval);
    alert("let's get back to work!");
    timeLeft = 1500;
    updateTimer();
  }
};

//TIMER BUTTONS

const setStart = () => {
  if (!interval) {
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(interval);
        alert("Time for a break");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000);
  }
};

const setStop = () => {
  clearInterval(interval);
};

const setReset = () => {
  showImage();
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

//BREAK FEATURES

const setShortBreak = () => {
  timeLeft = 300;
  updateTimer();
  showTips();
};

const setMediumBreak = () => {
  timeLeft = 900;
  updateTimer();
  showTips();
};

const setLongBreak = () => {
  timeLeft = 1800;
  updateTimer();
  showTips();
};

startEl.addEventListener("click", setStart);
stopEl.addEventListener("click", setStop);
resetEl.addEventListener("click", setReset);
shortEl.addEventListener("click", setShortBreak);
mediumEl.addEventListener("click", setMediumBreak);
longEl.addEventListener("click", setLongBreak);
