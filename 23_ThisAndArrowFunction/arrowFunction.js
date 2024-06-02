const chai = () => {
  let username = "Akshay";
  console.log(this.username); // undefined --> Cant use "this" in functions
  console.log(this); // {}
};

// chai();

// () => {};

// const addTwo = (num1, num2) => {
//   return num1 + num2;            // explicit return
// };

// console.log(addTwo(5, 5)); // 10

//Implicit return --> No need to write return keyword if there is only one line
// const addTwo = (num1, num2) => num1 + num2; // Implicit return
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username: "Akshay"}; // undefined
const addTwo = (num1, num2) => ({ username: "Akshay" }); // { username: 'Akshay' } --> Parenthesis are necessary

console.log(addTwo(5, 5)); // 10

const myArray = [2, 5, 7, 9]; //

// myArray.forEach(function(){})
// myArray.forEach(() => {});
