// IIFE - Immediately Invoked Function Expressions --> We use it to get rid of global variable pollution

// named IIFE
(function chai() {
  console.log(`DB Connected`); // DB Connected
})();

// () --> 1st parenthesis is for function definition.
// () --> 2st parenthesis is for function Execution.
// Instead of chai() --> we just took its parenthesis for instant execution

(() => {
  console.log(`DB2 Connected`); // DB2 Connected
})();

((name) => {
  console.log(`DB2 Connected ${name}`); // DB2 Connected Akshay
})("Akshay");
