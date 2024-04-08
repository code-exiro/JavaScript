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
console.log(numeros[3])

/*llaves ---> tienen varios usos, incluyendo la definicion de objetos, la creacion de bloques de 
              codigo(como bucles y condicionales) y la definicion de funciones(arrow function)*/ 

let persona = {nombre: 'Emir', edad: 21}
console.log(persona)

console.log('---------------------------------------------------------')

//Clase 9 - type casting ---> como JS es un lenguaje Interpretado por lo tanto hace un chequeo dinamico

// Explicit type casting 

const string  = '42'
const integer = parseInt(string)   //parseInt es una funcion utilizada para convertir una cadena(String) en un numero entero(number)
console.log(integer)               //si el primer caracter no se puede convertir en un numero retornara NaN
console.log(typeof integer)

const stringDecimal = '3.14'            
const float = parseFloat(stringDecimal)     //parseFloar es una funcion utilizada para convertir una cadena en un numero decimal(number)
console.log(float)                          
console.log(typeof float)

const binary = '1010'                    
const decimal = parseInt(binary, 2)    //la base 2 en la llamada a parseInt esta indicando que la cadena debe interpretarse como un      
console.log(decimal)                   //numero de base binaria, el primer digito de la derecha(0) se multiplica por 2^0 
console.log(typeof decimal)            //lo que da 0, el siguiente digito(1) se multiplica por 2^1 que da 2 y asi lo que da 10

console.log('---------------------------------------------------------')

//Implicit type casting

const numero = 2                    //pueden pasar cosas muy raras como esta al sumar un number y un booleano 
const booleano = true               //esta la conversion Implicita y Explicita en este caso es explicita
console.log(numero + booleano)      //la forma explicita es cuando agregas String, Number o Boolean

const sum = '5' + 3                 //concatena el 5(String) y el 3(Number)
console.log(sum)                    //53

const sumConbooleano = '3' + true   //concatena el 3(String) y el true(boolean)
console.log(sumConbooleano)         //3true

console.log('---------------------------------------------------------')

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue)     //concatena
console.log(stringValue + numberValue)     //concatena
console.log(stringValue + booleanValue)    //concatena
console.log(numberValue + stringValue)     //concatena
console.log(numberValue + numberValue)     //suma
console.log(numberValue + booleanValue)    //suma  
console.log(booleanValue + stringValue)    //concatena  
console.log(booleanValue + numberValue)    //suma
console.log(booleanValue + booleanValue)   //suma

console.log('---------------------------------------------------------')

const quiz = '596'                      
const quizConvertido = parseInt(quiz)     

console.log(typeof quiz)                //String
console.log(typeof quizConvertido)      //Number 
