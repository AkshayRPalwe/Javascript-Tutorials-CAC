// Arrays

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["ironman", "hulk"];

const myArray2 = new Array(1, 2, 3, 4);

// console.log(myArray[1]); // 1

// const myArray = [0, 1, 2, 3, 4, 5];
// myArray.push(6); // [ 0, 1, 2, 3, 4, 5, 6];
// myArray.push(7); // [0, 1, 2, 3, 4, 5, 6, 7];
// myArray.pop(); // [ 0, 1, 2, 3, 4, 5, 6];

// myArray.unshift(0); // [0, 0, 1, 2, 3, 4, 5, 6];
// myArray.shift(); // [0, 1, 2, 3, 4, 5, 6];

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(3)); // 3
// console.log(myArray.indexOf(13)); // -1

// const newArray = myArray.join(); // --> converts values in string

// console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray); // 0,1,2,3,4,5 --> string

//slice and splice

console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1, 3);
console.log(myn1); // [ 1, 2 ]
console.log("B ", myArray); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1, 3);
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArray); // C  [ 0, 4, 5 ]
