const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNums = myNums.filter((num) => num > 5);
// console.log(newNums); // [ 6, 7, 8, 9, 10 ]

// let newNums = myNums.filter((num) => {
//   return num > 5;
// });

// console.log(`myNums: ${myNums}`); // [ 6, 7, 8, 9, 10 ]
// console.log(`newNums: ${newNums}`); // [ 6, 7, 8, 9, 10 ]

// let newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// ============================================================

const books = [
  { title: "Book 1", genere: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book 2", genere: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book 3", genere: "History", publish: 1999, edition: 2007 },
  { title: "Book 4", genere: "Non-Fiction", publish: 1989, edition: 2009 },
  { title: "Book 5", genere: "Science", publish: 2009, edition: 2014 },
  { title: "Book 6", genere: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book 7", genere: "History", publish: 1986, edition: 1996 },
  { title: "Book 8", genere: "Fiction", publish: 2011, edition: 2002 },
  { title: "Book 9", genere: "Science", publish: 1981, edition: 2020 },
  { title: "Book 10", genere: "Fiction", publish: 1981, edition: 2015 },
];

// const userbooks = books.filter((book) => book.genere === "History");
// console.log(userbooks);

const userbooks = books.filter((book) => {
  return book.publish >= 1995 && book.genere === "History";
});
console.log(userbooks);
