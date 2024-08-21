const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

//El método map es como un callback
// aplicará la función a cada elemente de arreglo2
const arreglo3 = arreglo2.map(function(numero){
    return numero*2;
});

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
