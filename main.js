//Clase 16 - Arrow functions y lexical binding

//funcion tradicional
function almuerzo(proteina, carbohidratos) {
       return `como ${proteina} con ${carbohidratos}`
}
console.log(almuerzo('huevo', 'pan'))

//arrow function
const comida = (proteina, liquido) => {
    return `bebo ${liquido} con mi ${proteina}`
}
console.log(comida('pollo', 'horchata'))

console.log('---------------------------------------------')
 
//funcion tradicional
const greeting = function(name) {
    return `Hi, ${name}`
}

//arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`
}

//arrow function - implicit return 
const newGreetingImplicit = name =>  `Hi, ${name}`
const dosOMasParametros = (name, lastname) =>  `Hi, ${name} ${lastname}`

//Lexical binding

const fictionalCharacter = { 
    name: 'Uncle Ben',
    mensajeConFuncionTradiccional: function(message) {
        console.log(`${this.name} says: ${message}`)
    },
    mensajeConArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

fictionalCharacter.mensajeConFuncionTradiccional('un gran poder blablabla muere')
fictionalCharacter.mensajeConArrowFunction('un gran poder blablabla muere')

console.log('------------------------------------------------------------')

//Clase 17 - Funciones constructoras ---> es simplemente una funcion regular que se utiliza para construir objetos.

//JavaScript utiliza un paradigma basado en prototipos en lugar de clases basadas en la herencia clasica.

function Persona(nombre, edad) {  //Las funciones constructoras comienzan con mayuscula(por convencion)
    this.nombre = nombre;  //'this' se refiere al nuevo objeto que se crea cuando
    this.edad = edad;      //se invoca la funcion constructora con el operador 'new'

    this.saludar = function() {   //metodo asignado al nuevo objeto  este se sigue refiriendo al objeto desde el cual se invoco el metodo 
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} anios`)
    }
}


const persona1 = new Persona("Carlos", 50)   //Creacion de una instancia    
const persona2 = new Persona('Juan', 23)     //al utilizar 'new' se crea una instancia del objeto 'persona' 
persona1.saludar()
persona2.saludar()   //persona2 es ahora un objeto con las propiedades 'nombre' y 'edad' configuradas y un metodo saludar 

//En este ejemplo cada instancia de 'persona' tiene su propio conjunto de propiedades 'nombre' y 'edad' asi como un metodo 'saludar'
//Definir metodos directamente dentro de la funcion constructora no es eficiente en terminos de 
//memoria porque cada instancia tiene su propia copia del metodo como se puede ver en el ejemplo (saludar)

console.log('-----------------------------------------------------------')

//Prototipos(prototype)

function Coche(modelo, anio) { //Primero definimos la funcion constructora 'Coche' que inicializa nuevas instancias
    this.modelo = modelo       //con algunas propiedades especificas como el 'nodelo' y el 'anio' 
    this.anio = anio
    this.kilometraje = 0
}

Coche.prototype.conducir = function(distancia) {  //Método para simular conducir el coche y aumentar el kilometraje
    this.kilometraje += distancia;
    console.log(`Condujiste ${distancia} km en el ${this.modelo} y ahora el kilometraje es ${this.kilometraje} km.`);
};

Coche.prototype.informacion = function() {      //Método para obtener información del coche
    console.log(`Modelo: ${this.modelo}, Año: ${this.anio}, Kilometraje: ${this.kilometraje}`);
};

const lambo = new Coche('lambo', 2024)
const ferrari = new Coche('ferrari', 2023)

lambo.conducir(1500)
ferrari.conducir(500)
lambo.conducir(1000)
ferrari.conducir(2000)
lambo.informacion()
ferrari.informacion()

//10 tipos de funciones 

//Declarativas
function suma(a, b) {
    return a + b
}

//Expresivas(anonimas)
const suma = function(a, b) {
    return a + b
}

//Arrow functions
const suma = (a, b) => a + b

//Funciones constructoras
//ejemplos arriba

//Funciones recursivas

function factorial(n) {
    if (n === 0 || n === 1) { return 1; }
    else {return n * factorial(n - 1)}
}

