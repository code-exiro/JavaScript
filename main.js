//Clase 3, tipos de datos

//Primitivos - inmutable - 7

let numero = 23
numero = numero + 12
console.log(numero)

let verdad = true 
verdad = false 
console.log(verdad)

//Complejos - mutable - 3

let usuario = {nombre: 'Emir', edad: 20}
usuario.edad = 21
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

//------------------------

function cambiarNombre (objeto){
    objeto.nombre = 'nuevo nombre'
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)

console.log(persona)