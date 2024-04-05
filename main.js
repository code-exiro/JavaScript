//Clase 4, paso por valor y referncia 

//Paso por valor

let a = 1
let b = a

a = 2

console.log("paso por valor")
console.log("a = " + a)
console.log("b = " + b)

//Paso por referencia 

let x = [1]
let y = x

console.log("paso por referencia")
x.push(2);
y.push(3);

console.log("x = " + x)
console.log("y = " + y)