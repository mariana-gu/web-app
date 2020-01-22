"use strict";

function greet() {
    document.getElementById('result').innerHTML = '....Hola Universo....';
    return false;
}

document.getElementById('go').addEventListener('click', greet);
