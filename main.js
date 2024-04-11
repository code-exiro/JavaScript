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

const valor = 10;               
function sumarValor (a) {               //depende de datos externos('valor')
    return a + valor;
}

function establecerNombre (usuario) {   //modifica un estado externo
    usuario.nombre = "Juan";
}
  
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

//Clase 14 - This ---> concepto fundamental 

//Enlace implicito o implicit binding
const house = {         //Se crea el objeto house con dos propiedades
    dogName: 'sheldon',  //La primer propiedad es dogName que es una cadena de texto sheldon
    dogGreeting: function() {  //La segunda propiedad es dogGreeting que es una funcion 
        console.log(`Hi, my name is ${this.dogName}`)
    }
}
house.dogGreeting() //Aqui estoy llamando a la propiedad 'dogGreeting' de mi objeto 'house'

//Enlace explicito o explicit binding

function dogGreeting() {    //Definiendo dogGreeting en el ambito global
    console.log(`no me roben los huevos gritaba ${this.dogName}`)
}

//En el caso de que NO tuviera dogGreeting como global podria llamar a dogGreeting atraves del objeto house
//ejemplo: 'house.dogGreeting.call(newHouse);'

const newHouse = {
    dogName: 'princesa'
}

dogGreeting.call(newHouse)  //El metodo .call permite llamar a una funcion con valor 'this' especifico y argumentos individuales 

function newDogGreeting(owner,address){console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)}
const owner='Juan'
const address='gothams'
newDogGreeting.call(newHouse,owner,address)

console.log('------------------------------------------')