const pauseTimer = document.getElementById("pause-timer");
const startTimer = document.getElementById("start-timer");
const resetTimer = document.getElementById("reset-timer");

const displayTimer = document.getElementById("display-timer");

let seconds = 0;
let minute = 0;
let hour = 0;
let time = null;

function doingDouble(p) {
  if (`${p}`.length === 1) {
    return `0${p}`;
  }
  return `${p}`;
}

function timeCounter() {
  if (time) {
    // console.log("time counted");
    if (seconds < 60) {
      seconds += 1;
      displayTimer.textContent = `${doingDouble(hour)}:${doingDouble(
        minute
      )}:${doingDouble(seconds)}`;
    } else {
      seconds = 0;
      displayTimer.textContent = `${doingDouble(hour)}:${doingDouble(
        minute
      )}:${doingDouble(seconds)}`;
      minute += 1;
    }

    if (minute > 60) {
      hour += 1;
      displayTimer.textContent = `${doingDouble(hour)}:${doingDouble(
        minute
      )}:${doingDouble(seconds)}`;
      minute = 0;
    }
    setTimeout(timeCounter, 1000);
  }
}

let flag = "timer is not starting now";

startTimer.addEventListener("click", function () {
  if (flag === "timer is not starting now") {
    // console.log("timer start");
    time = true;
    timeCounter();
    flag = "timer start";
  }
});

pauseTimer.addEventListener("click", function () {
  // console.log("time pause");
  time = false;
  flag = "timer is not starting now";
});

resetTimer.addEventListener("click", function () {
  displayTimer.textContent = "00:00:00";
  seconds = 0;
  minute = 0;
  hour = 0;
  time = null;
  flag = "timer is not starting now";
});
