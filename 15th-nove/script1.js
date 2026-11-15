// comments
/**
 * this is a multi line comment
 */

// variable declaration
// var, let, const

// var -> old way of declaring variables : can also be re-declared and re-assigned
// let -> new way of declaring variables : can be re-assigned but cannot be re-declared
// const -> new way of declaring variables : cannot be re-assigned or re-declared

var age = 10;
console.log("Age: " + age);

var age = 20; // re-declaration
console.log("Age: " + age);

// var vs let

let height = 5.9;
console.log("Height: " + height);

height = 6.0; // re-assignment or value update
console.log("Height: " + height);

// let height = 6.1; // re-declaration -> error

// const = constant variable declaration

const pi = 3.14;
console.log("Value of pi: " + pi);

// pi = 3.14159; // re-assignment -> error
// const pi = 3.14159; // re-declaration -> error