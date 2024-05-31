const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); // flash

// let newArr = marvel_heroes.concat(dc_heroes);
// console.log(newArr); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread Operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const usableArr = anotherArr.flat(Infinity); // depth = infinity
console.log(usableArr); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Convert data in array

console.log(Array.isArray("Akshay")); // false
console.log(Array.from("Akshay")); // [ 'A', 'k', 's', 'h', 'a', 'y' ]
console.log(Array.from({ name: "akshay" })); // [] --> interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
