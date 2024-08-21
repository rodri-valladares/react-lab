
// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`
};

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`; 
};

const saludar3 = (nombre)=>`Hola, ${nombre}`;

const saludar4 = ()=>`Hola mundo`;

console.log(saludar('Rodrigo'))
console.log(saludar2('Juan'))
console.log(saludar3('Pedro'))
console.log(saludar4())

const getUsuarioActivo = ( nombre ) =>(
    {
        uid: 'ABC123',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('Rodri');

console.log(usuarioActivo)