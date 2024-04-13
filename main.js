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