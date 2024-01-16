// Initilization of the variables 

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;  

function E_id(id) {
    return document.getElementById(id); // this function is used to get the elements by id ,it helps in reducing the sze of code
}

function start() {  //start Function
    timer = true;
    stopwatch();
}

function pause() { // pause/stop function
    timer = false;

}

function reset() { //reset function
    timer = false;
    hr = min = sec = count = 0;

    E_id("hr").innerHTML = "00";
    E_id("min").innerHTML = "00";
    E_id("sec").innerHTML = "00";
    E_id("count").innerHTML = "00";

}

// Below is the stopwatch function 
function stopwatch() {
    if (timer) {
        count += 1;
    }

    if (count === 99) { //count are in millisecond 
        sec += 1;
        count = 0;
    }
    if (sec === 59) {
        min += 1;
        sec = 0;
    }
    if (min === 59) {
        hr += 1;
        min = 0;
        sec = 0;
    }

    updateDisplay(hr, "hr");
    updateDisplay(min, "min");
    updateDisplay(sec, "sec");
    updateDisplay(count, "count");

    setTimeout(stopwatch, 10);
}

// This function display the timer i double digit if the timerstops in single digit

function updateDisplay(value, elementId) {
    const stringValue = value < 10 ? '0' + value : value.toString();
    document.getElementById(elementId).innerHTML = stringValue;
}

function lap() {
    console.log(hr, min, sec, count)
    const laps = E_id('laps');
    laps.innerHTML += "<li>" + hr + ":" + min + ":" + sec + ":" + count + "</li>";
}

// It delets the lap history

function clearLap() {
   laps.innerHTML=""
}

