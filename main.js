//Clase 23 - if estructura de control de flujo

//sintaxis de if
// if (condicion) { 
//     //(bloque de codigo a ejecutar si la condicion es verdadera)
// }

const numero = 10;
if (numero > 5) {      //if(condicion): bloque a ejecutar si la condicion es verdarea
    console.log(`El ${numero} es mayor que 5`); 
}

//else ---> bloque a ejecutar si la condicion es false
const otroNumero = 3;
if (otroNumero > 5) {
    console.log(`El ${otroNumero} es mayor que 5`);
} else {
    console.log(`EL ${otroNumero} no es mayor que 5`);
}

//else if ---> sentenica extra a evaluar 
const unNumeroMas = 15;

if (unNumeroMas > 20) {
    console.log(`El ${unNumeroMas} es mayor que 20`);
} else if (unNumeroMas > 10) {
    console.log(`El ${unNumeroMas} es mayor que 10 pero no mas que 20`)
} else {
    console.log(`${unNumeroMas} es menor de 10`)
}

//otro ejemplo 
let nombre = 'Nico';

if (nombre === 'Diego') {
    console.log("Hola Diego");
} else if (nombre === 'Nico') {
    console.log("Hola Nico");
} else {
    console.log('quien chota sos')
}

console.log('------------------------------------------------------------')