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

//Clase 24 - proyext 

// Math.random() es una funcion que genera un numero decimal aleatorio entre 0(inclusive) y 1(exclusivo) 0.0000000 a 0.999999
// Math.random() no recibe argumentos o parametros 
// Inclusive: el numero inicial(o incluido) en Math.random es 0 por lo que 0 esta en las posibilidades
// Exclusivo: el numero limite(o excluido) en Math.random es 1 por lo que 1 no esta dentro de las posibildades 
// Ejemplo: 0.37178392649 * 10(el multiplicar por 10 se recorre el '.' un espacio entonces el rango ahora es desde 0 hasta un poco menos de 10.)
// Ejemplo: 0.37178392649 * 10 + 1 (Al sumar 1 se modifica el rango de los números a (1, 11) ahora va de 1 hasta un poco menos de 11.)

// Math.floor(): se usa para redondear hacia abajo al entero más cercano. Esto asegura que el número esté del 1 al 10 ambos inclusive(incluidos)

// prompt() es una funcion que muestra un cuadro de dialogo en el NAVEGADOR que solocita al usuario algo

const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina el numero secreto entre el 1 y el 10")
);

if(numeroJugador == numeroSecreto) { 
    console.log(`FELICIDADES es ${numeroJugador}`)
} else {
    console.log(`intenta otra vez el numero era ${numeroSecreto}`)
}