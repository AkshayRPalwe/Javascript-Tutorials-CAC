function sayMyName() {
  console.log("A");
  console.log("K");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("Y");
}

// sayMyName();
//                      parameters
// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}
//             arguments
// addTwoNumbers(1, 2); // 3
// addTwoNumbers(1, "4"); // 14
// addTwoNumbers(1, "a"); // 1a

const result = addTwoNumbers(3, 6);
// console.log(result); // 9

// function loginUserMessage(username) {
//   return `${username} just logged in.`;
// }
function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter username");
    return;
  }
  //   if (username === undefined) {
  //     console.log("Please enter username");
  //     return;
  //   }
  return `${username} just logged in.`;
}

// console.log(loginUserMessage("Akshay")); // Akshay just logged in.
console.log(loginUserMessage()); // undefined just logged in.
