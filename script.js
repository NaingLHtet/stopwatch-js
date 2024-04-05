const stopwatch = document.querySelector(".stopwatch");
const showMilliseconds = document.querySelector(".milliseconds");

const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const continueBtn = document.querySelector(".continueBtn");
const restartBtn = document.querySelector(".restartBtn");


let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;



function startTime() {
  milliseconds += 10;
  if(milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  };
  
  if(seconds === 60) {
    seconds = 0;
    minutes++;
  };
  
  if(minutes === 60) {
    minutes = 0;
    hours++;
  };
  
  const millisecondsText = milliseconds < 100 ? `0${milliseconds}` : milliseconds;
  
  const secondsText = seconds < 10 ? `0${seconds}`: seconds;
  const minutesText = minutes < 10 ? `0${minutes}`: minutes;
  const hoursText = hours < 10 ? `0${hours}`: hours;
  
  showMilliseconds.textContent = millisecondsText;
  stopwatch.textContent = `${hoursText} : ${minutesText} : ${secondsText}`;
};



let stopwatchRunning = false;
let intervalTime;
startBtn.addEventListener("click", () => {
  if(!stopwatchRunning) {
   intervalTime = setInterval(startTime, 10);
  };
  stopwatchRunning = true;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalTime);
  stopwatchRunning = false;
});

continueBtn.addEventListener("click", () => {
  if(!stopwatchRunning) {
   clearInterval(intervalTime);
   intervalTime = setInterval(startTime, 10);
  };
  stopwatchRunning = true;
});

restartBtn.addEventListener("click", () => {
  clearInterval(intervalTime);
  hours = 0;minutes = 0;seconds = 0;
  intervalTime = setInterval(startTime, 10);
  stopwatchRunning = true;
});


