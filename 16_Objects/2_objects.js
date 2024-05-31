// const tinderUser = new Object();
// console.log(tinderUser); // {}

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'sam', isLoggedIn: false }

const regularUser = {
  email: "arp@arp.com",
  fullname: {
    userFullName: {
      firstName: "Akshay",
      lastName: "Palwe",
    },
  },
};

// console.log(regularUser.fullname.userFullName.firstName); // Akshay

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser); // { id: '123abc', name: 'sam', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
