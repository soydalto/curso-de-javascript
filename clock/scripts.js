"use strict";

const zeroFill = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const timeUpdate = ()=>{
    const time = new Date();
    let hours = zeroFill(time.getHours());
    let minutes = zeroFill(time.getMinutes());
    let seconds = zeroFill(time.getSeconds());
    document.querySelector(`.hours`).textContent = hours;
    document.querySelector(`.minutes`).textContent = minutes;
    document.querySelector(`.seconds`).textContent = seconds;
}

timeUpdate();
setInterval(timeUpdate, 1000);