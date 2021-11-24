// Query Selectors:
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const watch = document.querySelector('#timer');



// event listeners:
startBtn.addEventListener('click', startWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);


// functionality:

let sec = 0;
let min = 0;
let hr = 0;
let timer = true;

function startWatch() {
  if(timer === true) {
    timer = false;
    timerCycle();
  }
}

function timerCycle() {
  if(timer === false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if(sec === 60) {
      min = min + 1;
      sec = 0;
    }

    if(min === 60) {
      hr = hr + 1;
      sec = 0;
      min = 0;
    }

    if(sec < 10 || sec === 0) {
      sec = '0' + sec;
    }

    if(min < 10 || min === 0) {
      min = '0' + min;
    }

    if(hr < 10 || hr === 0) {
      hr = '0' + hr;
    }

    watch.innerHTML = hr + ':' + min + ':' + sec;
    setTimeout('timerCycle()', 1000);
  }
}

function stopWatch() {
  if(timer === false) {
    timer = true;
  }
}

function resetWatch() {
  watch.innerHTML = '00:00:00';
  timer = true;
  sec = 0;
  min = 0;
  hr = 0;
}