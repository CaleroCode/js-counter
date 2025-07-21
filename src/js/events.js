import {add, reset, decrease} from './counter.js'


//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas

const botonAumento = document.getElementById("add");
const botonDisminuir = document.getElementById("decrease");
const botonReset = document.getElementById("reset");

    botonAumento.addEventListener("click", add);
    botonDisminuir.addEventListener("click", decrease)
    botonReset.addEventListener("click", reset);