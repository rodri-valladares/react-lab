
// variables y Constantes

const nombre = 'Rodrigo';
const apellido = 'Valladares';

let valorDado = 5;

console.log(nombre, apellido, valorDado);

// Probando el scope de las variables y variables y variables y variables y variables y variables

if (true){
    //console.log(valorDado) da error
    let valorDado = 6;
    console.log(valorDado) // va a imprimir 6

}

console.log(valorDado) // va a imprimir 5