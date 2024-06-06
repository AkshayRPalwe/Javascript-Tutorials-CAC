const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello World";
for (const greet of greetings) {
  console.log(`Each char is: ${greet}`);
}
// Each char is: H
// Each char is: e
// Each char is: l
// Each char is: l
// Each char is: o
// Each char is:
// Each char is: W
// Each char is: o
// Each char is: r
// Each char is: l
// Each char is: d

// Maps

const map = new Map(); // --> Values will be unique and orders are preserved
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, values] of map) {
  // you can use [a,b] too. instead key values pair
  console.log(key, " : ", values);
}

const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

// for (const [key, value] of myObj) {
//   // TypeError: myObj is not iterable
//   console.log(key, " : ", values);
// }