const userEmail = "arp@arp.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Falsy values:
// false, 0, "", -0, BigInt 0n, null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function(){}

const users = [];
if (users.length === 0) {
  console.log("Array is EMPTY");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is EMPTY");
}

// On Browser
// false == 0
// true

// false == ''
// true

// 0 == ''
// true

// ++++++++++++++++++ Nullish Coalescing Operator (??) : null, undefined ++++++++++++++++++

let val1;

// val1 = 5 ?? 10;
// console.log(val1); // 5

// val1 = null ?? 10;
// console.log(val1); // 10 --> Checks safty

// val1 = undefined ?? 15;
// console.log(val1); // 15

val1 = null ?? 10 ?? 15;
console.log(val1); // 10 --> Takes first value

// ++++++++++++++++++++++++++++ Ternary Operator ++++++++++++++++++++++++++++++++++++

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // more than 80
