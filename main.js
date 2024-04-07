//Clase 6 - Numeros

//1. Entero y decimal 
const entero = 10
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notacion cientifica      //Se puede usar para representar números muy grandes o muy pequeños de manera más concisa
const cientifico = 35e3       //35e3 se interpreta como "35 multiplicado por 10 elevado a la potencia de 3", lo que resulta en 35,000

//3. infinitos y NaN
const infinito = Infinity
const noEsNumber = NaN        //Not-a-Number se utiliza para representar operaciones invalidas como (0/0)

// Operaciones aritmeticas
//1. Suma, Resta, Multiplicacion y Division 
const suma = 5 + 5
const resta =  4 - 4
const multiplicacion = 4 * 5
const division = 16 / 2

//2. Modulo y Exponencial
const modulo = 15 % 8           //Devuleve el residuo de division en este caso 7
const exponencial = 2 ** 3      //Potencias 2*2*2=8

//Precision                     //Las operaciones con punto decimal no son precisas en JS por el estandar IEEE 754      
const resultado =0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// Operaciones avanzadas        //Librerias que nos ayudan hacer nuestras operaciones mas precisas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)