// Query Selectors:
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const watch = document.querySelector('#timer');



// event listeners:
startBtn.addEventListener('click', startWatch);




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
  }
}

function stopWatch() {
  if(timer === false) {
    timer = true;
  }
}

function resetWatch() {
  watch.innerHTML = '00:00:00';
}