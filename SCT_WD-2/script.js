let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStopwatch() {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  running = false;
}

function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
  running = false;
}

function recordLap() {
  if (running) {
    let lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}
