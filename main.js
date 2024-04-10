//Clase 13 - Funciones puras e impuras

// funciones puras

//1.Sin efectos secundarios
//2.Predecibilidad ---> Para un conjunto de datos siempre devolvera el mismo resultado.
                       //Esto significa que el resultado de la funcion depende unicamente de los argumentos

function suma (a, b) {      
    return a + b
}

function square(x) {        
    return x * x
}

function addTen (y) {       
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)

// funciones impuras - las funciones impuras cumples con los siguientes parametros 

//Side Effects(efectos secundarios) ---> cualquier operacion que modifique un estado fuera de su ambito local 
//1.Modificar variables globales
//2.modificar parametros
//3.solicitudes HTTP
//4.Imprimir mensajes en pantalla o consola
//5.Manipulacion del DOM
//6.Obtener la hora actual

function sum (a ,b) {
    console.log('A: ', a)       //tiene efecto secundario(como registrar un log)
    return a + b
}

let total = 0                   //variable global

function sumaConEfecto () {     //modifica la variable global total 
    total += a
    return total
}

console.log('--------------------------------------------')

