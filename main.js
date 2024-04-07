// Diferencias entre (), [], {}

/*parentesis --->  se utilizan para controlar el orden de las operaciones en
                   expresiones matematicas, invocar funciones y especificar parametros*/

let suma = (1 + 2) * 3 //9  sin parentesis seria 7
console.log(suma)

function saludar(nombre){
    return `hola, ${nombre}`
}
console.log(saludar('Emir'))

//corchetes --->  se usan para definir arrays y acceder a elementos de un array mediante su indice

let numeros = [1, 2, 3, 4, 5]
console.log(numeros[2])

/*llaves ---> tienen varios usos, incluyendo la definicion de objetos, la creacion de bloques de 
              codigo(como bucles y condicionales) y la definicion de funciones(arrow function)*/ 

let persona = {nombre: 'Emir', edad: 21}

//Clase 9 - Conversion de tipos 