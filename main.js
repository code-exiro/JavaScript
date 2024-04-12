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

//Se define una  nueva funcion llamada 'newDogGreeting' que toma dos parametros 'propietario' y 'direccion'
//El this en este codigo es como si le dijieramos 
function newDogGreeting(owner,address){
    console.log(`hola soy ${this.dogName} y vivo con ${owner} en ${address}`)
}
const owner='Juan'
const address='gotham'
newDogGreeting.call(newHouse,owner,address)

function mostrarMensaje() {
    console.log(`Hola, ${this.nombre}`);
}

const persona = {
    nombre: 'Carlos'
};

// Usamos 'call' para establecer 'this' a 'persona' dentro de 'mostrarMensaje'
mostrarMensaje.call(persona);

console.log('------------------------------------------')

//Clase 15 - bind, call y apply ---> metodos fundamentales 

const people = 'bruce'
const location = 'ghotam'

function greet(people, location) {
    console.log(`hola soy ${this.name}, tu eres ${people}? vives en ${location}?`)
}

const newPerson = {
    name: 'Juan'
}

//.call
//permite llamar a una función con un valor this específico y argumentos pasados individualmente. 

greet.call(newPerson, people, location) // ---> sintaxis 'funcion.call(thisArg, arg1, arg2, ..., argN)'

//.apply
//en lugar de pasar los argumentos de la función individualmente, apply() los toma como un arreglo. 

const  necessaryValues = [people, location]
greet.apply(newPerson, necessaryValues) // ---> sintaxis 'funcion.apply(thisArg, [argsArray])'

//.bind
//retorna una nueva función, la cual, cuando se llama, tiene su 'this' establecido al valor proporcionado, 
//con una secuencia de argumentos anterior mente proporcionador o se le proporcionaran despues

function saludar(lenguaje, tono) {
    console.log(`${tono} hola en ${lenguaje} dice ${this.nombre}`);
}
  
const usuario = {nombre: 'Diego'};
const saludarUsuario = saludar.bind(usuario, 'francés'); //---> sintaxis 'const nuevaFuncion = funcion.bind(thisArg, argx)'

saludarUsuario('gentilmente');  

console.log('----------------------------------------------------------')