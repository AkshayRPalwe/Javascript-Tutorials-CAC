let a = 50;
var c = 200;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner a: ", a); // Inner a:  10
}
// console.log("Outer a: ", a); // Outer a:  50
// console.log(b); // error
// console.log(c); // 302q

// Nested Scope

function one() {
  const username = "Akshay";

  function two() {
    const website = "youtube";
    console.log(username); // Akshay
  }

  //   console.log(website); // ReferenceError: website is not defined
  two();
}
one();

if (true) {
  const username = "ARP";
  if (username === "ARP") {
    const website = "youtube";
  }
  //   console.log(website); // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined

// +++++++++++++ interesting +++++++++++++
console.log(addone(5)); // 6
console.log(addtwo(4)); // ReferenceError: Cannot access 'addtwo' before initialization

function addone(num) {
  return num + 1;
}

const addtwo = function (num) {
  return num + 2;
};
