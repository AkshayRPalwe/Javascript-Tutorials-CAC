// Singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Akshay",
  "full Name": "Akshay Palwe",
  // mySym: "mykey1",
  [mySym]: "mykey1",
  age: 26,
  location: "Pune",
  email: "arp@arp.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(jsUser.name); // Akshay
console.log(jsUser["name"]); // Akshay
// console.log(jsUser.full Name); // Does not works
console.log(jsUser["full Name"]); // Akshay Palwe
console.log(jsUser.mySym); // mykey1
// console.log(typeof jsUser.mySym); // string
console.log(jsUser[mySym]); // mykey1

jsUser.email = "akshay@arp.com";
console.log(jsUser);
// Object.freeze(jsUser);
jsUser.name = "ARP";
console.log(jsUser);
// {
//   name: 'Akshay',
//   'full Name': 'Akshay Palwe',
//   age: 26,
//   location: 'Pune',
//   email: 'akshay@arp.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

jsUser.greeting = function () {
  console.log("Hello JS User");
};
jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // Hello JS User
console.log(jsUser.greetingTwo()); // Hello JS User, ARP


