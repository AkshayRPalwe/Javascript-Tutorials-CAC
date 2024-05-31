const score = 400;
// console.log(score); // 400

const balance = new Number(100);
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00

const otherNum = 123.8722;
// console.log(otherNum.toPrecision(4)); // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// MATHS Library

// console.log(Math); // Object [Math] {}
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.abs(4)); // 4
// console.log(Math.abs(-4)); // 4 --> -ve value becomes +ve only

// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.2)); // 4

// console.log(Math.min(4, 5, 2, 7)); // 2
// console.log(Math.max(4, 5, 2, 7)); // 7

// console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
