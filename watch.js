// Query Selectors:
var startBtn = document.querySelector('#startBtn');
var stopBtn = document.querySelector('#stopBtn');
var resetBtn = document.querySelector('#resetBtn');




// event listeners:
startBtn.addEventListener('click', startTimer);




// functionality:

let sec = 0;
let min = 0;
let hr = 0;
let timer = true;

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
