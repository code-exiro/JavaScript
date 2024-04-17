//Clase 19 - Expresiones y sentencias 

//Expresion es cualquier unidad de codigo que resuelve o evalua un valor 
    //  Valores literales: como 42, "hello", o true.
    //  Operaciones aritméticas: como 1 + 2, que evalúa a 3.
    //  Expresiones lógicas: como true && false, que evalúa a false.
    //  lamadas a funciones: como console.log("Hello, world!"), que realiza una acción y, 
    //  en este caso, evalúa a undefined porque console.log no retorna nada.

//Sentencia(Declaracion) dicta una accion a ser llevada a cabo. 
    //  A diferencia de las expresiones, que producen valores, las sentencias realizan acciones 
    //  Declaraciones de variables: como let x = 10; o const name = "Alice";.
    //  Estructuras de control: como if, for, while, que dictan el flujo de ejecución del programa.
    //  Declaraciones de funciones: como function greet() { console.log("Hello!"); }. 
 
//Muchas sentencias utilizan expresiones dentro de ellas para determinar cómo actuar.
//Por ejemplo, en una sentencia if, la condición if (x > 10) incluye la expresión x > 10.

let x = 10; // ---> sentencia 
let y = x + 10; // ---> sentencia que incluye la expresion x + 10

if (y > 10) { // ---> sentencia if que incluye la expresion y > 10
    console.log('y es mayor que 10'); // ---> sentencia 
}

console.log('-----------------------------------------------------------')

//Clase 20 - project heroes

function Heroe(name, power, weapon) {
    this.name = name 
    this.power = power
    this.weapon = weapon
    this.isLeader = false 
    this.itsAlive = true
}

Heroe.prototype.displayInfo = function() {
    console.log(`heroes information: 
    Name: ${this.name}
    Power: ${this.power}
    Weapon: ${this.weapon}
    ${this.isLeader ? 'Leader: si' : 'Leader: no'}
    ${this.itsAlive ? 'Alive: si' : 'Alive: no'}
    `)
}

Heroe.prototype.becomeLeader = function() {
    this.isLeader = true
    console.log(`${this.name} es el lider del equipo`)
}

Heroe.prototype.isDead = function() {
    this.itsAlive = false
    console.log(`${this.name} murio en la ultima mission`)
}

const batman = new Heroe('bruce', 'money', 'many weapons')
const superman = new Heroe('clarck', 'strong', 'fist')
const flash = new Heroe('barry', 'velocity', 'beam')

batman.becomeLeader()
batman.displayInfo()
superman.displayInfo()
flash.isDead()
flash.displayInfo()