// Desestructuración

const persona = {
    nombre : 'Pablo',
    edad : 30,
    clave : 'clave123'
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, cargo='Capitán'})=>{
    console.log(nombre, edad, cargo);
}

retornaPersona( persona );

const useContext = ({nombre, edad, clave})=>{
    return {
        nombreClave : clave,
        anios : edad,
        latlng:{
            lat: 14.123,
            lng: -12.3232
        }
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave);
console.log(anios);
console.log(lat, lng);
