function add(){
    //Escribir tu código que aumenta
    const aumentarValor = document.querySelector("#number");
    let valorActual = parseInt(aumentarValor.textContent); 
    valorActual++
    aumentarValor.textContent = valorActual;
}
    const botonAumento = document.querySelector("#add");
    botonAumento.addEventListener("click", add);

function reset(){
    //Escribir tu código que hace un reset a 0
    const valorReset = document.querySelector("#number");
    valorReset.textContent = 0;
}
    const botonReset = document.querySelector("#reset");
    botonReset.addEventListener("click", reset);

function decrease(){
    //Escribir tu código que resta
    const restarValor = document.querySelector("#number");
    let valorActual = parseInt(restarValor.textContent);

        if (valorActual > 0) {
            valorActual--;
            restarValor.textContent = valorActual;
        }
};

    const botonDisminuir = document.querySelector("#decrease");
    botonDisminuir.addEventListener("click", decrease);
export {add, reset, decrease}