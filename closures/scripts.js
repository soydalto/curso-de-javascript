"use strict";

const changeTextSize = (size) => {
    return ()=>{
        document.querySelector('body').style.fontSize = size;
    }
}

const changeTextSize12 = changeTextSize('12px');
const changeTextSize14 = changeTextSize('14px');
const changeTextSize16 = changeTextSize('16px');

document.querySelector('.btn-12').addEventListener('click',changeTextSize12);
document.querySelector('.btn-14').addEventListener('click',changeTextSize14);
document.querySelector('.btn-16').addEventListener('click',changeTextSize16);

//Operador Ternario
let edad = 20;
(edad>18) ? console.log("Es mayor de edad")
          : console.log("Es menor de edad");