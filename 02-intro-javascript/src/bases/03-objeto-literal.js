const persona = {
    nombre : 'Rodrigo',
    apellido : 'Valladares',
    edad : 100,
    direccion:{
        ciudad:'Cordoba',
        zip:555,
        lat:14.32,
        lng:34.92
    }
};

// para realizar la copia de un objeto 
const persona2 = {...persona};

persona2.nombre = 'Mark';

console.log(persona)
console.log(persona2)