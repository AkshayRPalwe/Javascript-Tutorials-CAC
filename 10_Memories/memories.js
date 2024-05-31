// Stack Memory (Primitive), Heap Memory (Non-Primitive)

let myName = "Akshay";
let anotherName = myName;

anotherName = "P";

console.log(myName); // Akshay
console.log(anotherName); // P

let userOne = {
  email: "akshay@gmail.com",
  upi: "123@ybl",
};

let userTwo = userOne;

userTwo.email = "user@gmail.com";

console.log(userOne.email); // user@gmail.com
console.log(userTwo.email); // user@gmail.com
