//Clase 10 - Proyecto de Social media profile

//1. User information
const userName = 'exiro'
const fullName = 'Cristiano Ronaldo'
const age = 21
const isStudent =  true

//2. Address
const address = {
    street: '1234 new york',
    city: 'smallville',
    state: 'metropolis',
    zipCode: 82631
}

//3. Hobbies 
const hobbies = ['coding', 'Reading', 'Gaming']

//4. Generating personalized bio
const personalizedBio = `
Hi, i'm ${fullName}.
i'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!.
`
//5. print the user profile and bio
console.log(personalizedBio)

console.log('-------------------------------------------------------')

//Clase 11 - Anatomia de una funcion 

function suma (a, b){     //1.Palabra clave(function) 2.Nombre de nuestra funcion(suma en este caso)   
    return a + b          //3.Los parametros o argumentos que va recibir 4.Cuerpo(return) lo que va a regresar nuestra funcion
}
console.log(suma(299, 1))   //5.Llamdo de la funcion 

function calcularDescuento (precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento) / 100
    const precioConDescuento = precio - descuento

    return precioConDescuento
}

const precio = 1299
const porcentajeDescuento = 25
const precioFinal = calcularDescuento(precio, porcentajeDescuento)

console.log('Precio original $' + precio)
console.log('Descuento ' + porcentajeDescuento + '%')
console.log('Precio con descuento: $' + precioFinal)

// function calculateDiscount (price, discountRate){
//     const discount = (price * discountRate) / 100
//     const priceWithDiscount = price - discount

//     return priceWithDiscount
// }

// const price = 100
// const discountRate = 20
// const finalPrice = calculateDiscount(price, discountRate)

// console.log('Original Price $' + price)
// console.log('Discount ' + discountRate + '%')
// console.log('Price with discount: $' + finalPrice)

console.log('-------------------------------------------------------------------')

//Clase 12 - Funciones vs Metodos 

    /*Funcion: es un bloque de código reutilizable que realiza una tarea específica.
    Puede o no estar asociada a un objeto.*/ 

    /*Metodo: es una función que está asociada a un objeto. 
    Cuando una función se convierte en propiedad de un objeto, 
    se llama método. Los métodos son funciones, pero el término 
    "método" se usa para resaltar su relación con un objeto específico.*/

// Capacidades que tienen las funciones

//1.Pasar funciones como argumentos ---> callback
/* <------
function a () {}
function b (a) {}
b(a)

//2.Retornan funciones
function a () {
    function b () {} 
    return b
}

//3.Asignar funciones a variables ---> Expresion de funcion
const a = function () {}

//4.Tener propiedades y metodos 
function a () {}
const obj = {}
a.call(obj)

//5.Anidar funciones ---> nested functions 
function a () {
    function b () {
        function c () {

        }
        c()
    } 
    b()
}
a()
-----> */ 
//6.Alamcenar funciones en objetos
const rocket = {
    name: 'falcon 9',
    launchMessage: function launchMessage () {
        console.log('FLAMA!!!')
    }
}

rocket.launchMessage()