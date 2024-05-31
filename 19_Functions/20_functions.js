// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200, 400, 600,2000)); // [ 200, 400, 600, 2000 ]

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 600, 2000)); // [ 600, 2000 ] --> val1 = 200 and val2 = 400

const user = {
  username: "akshay",
  price: "299",
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user); // Username is akshay and price is 299
handleObject({ username: "sam", price: 300 }); // Username is sam and price is 300

const myNewArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 200
