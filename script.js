var hrElement = document.getElementById('hr');
var minElement = document.getElementById('min');
var secElement = document.getElementById('sec');
var msecElement = document.getElementById('msec');

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;

var flag = 0;

function timer() {
    msec++
    msecElement.innerHTML = msec

    if (msec >= 100) {
        sec++
        secElement.innerHTML = sec
        msec = 0
    }

    if (sec >= 10) {
        min++
        minElement.innerHTML = min
        sec = 0
    }

    if (min >= 5) {
        hr++
        hrElement.innerHTML = hr
        min = 0
    }
}

function start() {
    if (flag === 0) {
        interval = setInterval(timer,10);
        flag++
    }
}

function stop() {
    clearInterval(interval)
    flag = 0
}

function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    msec = 0;

    msecElement.innerHTML = msec
    secElement.innerHTML = sec
    minElement.innerHTML = min
    hrElement.innerHTML = hr

    stop()
}
