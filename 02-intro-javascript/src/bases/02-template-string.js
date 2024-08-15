
const nombre = 'Rodrigo'
const apellido = 'Valladares'
const nombreCompleto = `${nombre} ${apellido}`

function getSaludo(nombre){
    return 'Hola ' + nombre 
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)