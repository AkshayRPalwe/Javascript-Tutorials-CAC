// Primitive
// 7 Categories: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3; // comes under Number datatype. Does not have special datatype like float.

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id); // Symbol(123)
// console.log(anotherId); // Symbol(123)

// console.log(id === anotherId); // false

// const bigNumber = 765764534253234232; // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
const bigNumber = 765764534253234232n;
// console.log(typeof bigNumber); // bigint

// Reference Type ( Non-Primitive ) --> typeof --> datatype is object.
// Array, Objects, Functions

const heros = ["ironman", "spiderman", "batman"];

let myObj = {
  name: "akshay",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // object --> null's datatype is object
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function --> in detail, function object
console.log(typeof heros); // object
console.log(typeof anotherId); // symbol
