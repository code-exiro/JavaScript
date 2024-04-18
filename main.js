//Clase 21 - Operadores de comparacion 


// ==    ---> Igualdad
console.log(1 == 1); // true
console.log('1' == 1); // true, porque '1' se convierte a 1

// ===   ---> Estrictamente igual
console.log(1 != 2); // true
console.log(1 != '1'); // false, porque '1' se convierte a 1

// !=    ---> No igual  
console.log(1 != 2); // true
console.log(1 != '1'); // false, porque '1' se convierte a 1

// !==   ---> Estrictamente no igual
console.log(1 !== '1'); // true
console.log(1 !== 1); // false

// >     ---> Mayor que 
console.log(2 > 1); // true
console.log(1 > 2); // false

// <     ---> Menor que
console.log(2 < 3); // true
console.log(3 < 2); // false

// >=    ---> Mayor o igual que
console.log(3 >= 2); // true
console.log(2 >= 3); // false

// <=    ---> Menor o igual que
console.log(2 <= 3); // true
console.log(3 <= 2); // false

const a = 10;
const b = 20;
const c = "10";

//validaciones en la consola del navegador ya que esta entiende JS

a == b;     //false
a === c;    //false    
a != b;     //true
a !== c;    //true    
a > b;      //false
a <= b;     //true
a > c       //false
