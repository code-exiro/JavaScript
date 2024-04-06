//Clase 5 - todo sobre los strings

const primerOpcion = 'compillas simples'        //Las comillas simples y dobles son lo mismo te apoyas en una u otra dependiendo del 
const segundaOpcion = "comillas dobles"         //contexto, como decir i'm o querer citar algo '"no me roben los huevos gritaba"'
const tercerOpcion = `compillas invertidas`     //Permite incrustar expresiones dentro de la cadena con ${}

//1. Concatenacion ---> Concatena las cosas de forma literal si tienes 1 y 9 no va hacer 10 si no 19 porque solo junta los numeros sin espacios 
const calle = 'calle piedra del sol'
const ciudad = 'CDMX'
const direccion = 'vivo en ' + ciudad + calle
console.log(direccion)

const direccionEspaciada = 'Mi direccion completa es ' + ciudad + ' ' + calle //Por lo tanto tengo que agregar los espacios de forma manual 
console.log(direccionEspaciada)

//2.  Concatenacion template literals ---> Se utilizan comillas invertidas para luego poner nuestras expresiones 
const nombre = 'emir'
const pais = 'Mexico'
const presentacion = `Hola soy ${nombre} ${pais}`
console.log(presentacion)

//3. Concatenacion join() ---> con el metedo .join agrego un argumento que se utilizara de separador 
const parteUno = 'Me encanta'
const parteDos = 'comer'
const parteTres = 'sandia'
const pensamiento = [parteUno, parteDos, parteTres]
console.log(pensamiento.join(' '))

//4. Concatenacion concat() ---> se utiliza para unir dos o mas arrays, este metodo no cambia los arrays existentes
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3 )
                                                // podemos unir valores adicionales en la creacion del nuevo array 
const alfaNumerico = array1.concat(1, [2, 3])   // en el ejemplo de aqui podemos ver como a alfaNumerico le agrego 
console.log(alfaNumerico)                       // un 1 de forma directa y un array de [2, 3]

// Caracteres de escape
//const whatAreYou = 'I'm sofware engenier' ---> esto da error XXX

//1. Escape alternatico
const comillasAltenativas = "I'm sofware engenier"

//2. Barra invertida
const barraInvertida = 'I\'m sofware engenier'

//3. Template literals
const comillasInvertidas = `I'm sofware engenier`

// EScritura de estring largos

/*
    Este era un gato 
    con los pies de trapo 
    y con los ojos al reves
    Quieres que te lo 
    cuente otra vez? 
*/

console.log('----------------------------------------------------')

const poema = 
'Este era un gato\n' +
'con los pies de trapo\n' +
'y con los ojos al reves\n' +
'Quieres que te lo\n' +
'cuente otra vez?\n' +
'               ';
console.log(poema)

const poemaSinMas = 
'Este era un gato\n\
con los pies de trapo\n\
y con los ojos al reves\n\
Quieres que te lo\n\
cuente otra vez?\n\
                  ';
console.log(poemaSinMas)

const poemaComillasInvertidas = 
`Este era un gato
con los pies de trapo
y con los ojos al reves
Quieres que te lo
cuente otra vez?
               `;
console.log(poemaSinMas)

console.log('-------------------------------------------------')

const stringPrimitivo ='Soy un string primitivo'     // typeof es un operador en JavaScript que se utiliza para determinar 
console.log(typeof stringPrimitivo)                  // el tipo de datos de una variable o una expresión

const segundoStringPrimitivo = String('Soy el segundo string primitivo') // el constructor esta explicito 
console.log(typeof segundoStringPrimitivo)

const stringObjeto = new String ('Soy un objeto')  // el resultado de esto es un objeto cadena, este  
console.log(typeof stringObjeto)                   // objeto puede tener propiedades y metodos propios de los objetos

console.log('-----------------------------------------------------')

//Acceder a caracteres, busqueda 

const saludo = 'Hola. Como estas'

console.log(saludo[3])                     // Este código accede directamente al carácter en la posición 3 de la cadena saludo   
console.log(saludo.charAt(2))              // Obtiene la posicion especifica(indice 2) dentro de una cadena 
console.log(saludo.indexOf('o'))           // Busca la primer aparicion de un valor especificado 
console.log(saludo.indexOf('Como'))        // Busca la primer aparicion de un valor especificado en este caso la cadena 'comooo'
console.log(saludo.indexOf('comooor'))     // No existe 'comooor' dentro de nuestro mensaje entonces la salida va hacer -1    
console.log(saludo.lastIndexOf('o'))       // Busca la ultima aparecion del valor especificado 
console.log(saludo.slice(3, 5))            // extrae una seccion de una cadena o de un array, en este caso extrae del indice 3 al 5 
console.log(saludo.length)                 // La longitud de una cadena o el numero de elementos presentes en un array 
console.log(saludo.toLocaleUpperCase())    // Hace todas la cadena en mayusculas 
console.log(saludo.toLocaleLowerCase())    // Hace todas la cadena en minusculas

console.log('-----------------------------------------------------')

const saludoDividido = saludo.split(' ')   // se utiliza para dividir una cadena(String) en un arreglo(array) basandose en el delimitador especificado
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoEspaciado =' Hola mundo '      // remueve los espacios en blanco del principio y el final de una cadena 
const saludoSinEspaciado = saludoEspaciado.trim()
console.log(saludoSinEspaciado)

const saludoOriginal = 'Hola mundo'        // remplaza lo especificado (busqueda, remplazo)
const nuevoSaludo = saludoOriginal.replace('mundo', 'corazon')
console.log(nuevoSaludo)