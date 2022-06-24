console.log(a); //this will print undefined as a will be hoisted in memory allocation phase

var a = 10;

/*=====================================*/

console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization

let x = 10 // let/const are hoisted but till the time you initialize it, it remains in temporal dead zone. So we cannot access the variables. Same with const.

/*=====================================*/

let x = 10;
let x = 1;
console.log(x); // Uncaught SyntaxError: Identifier 'x' has already been declared

/*=====================================*/

const x = 10;
x = 1;
console.log(x);  //Uncaught TypeError: Assignment to constant variable.
