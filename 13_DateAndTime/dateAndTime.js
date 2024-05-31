// Dates

let myDate = new Date();
// console.log(myDate); // 2024-05-31T07:49:29.866Z
// console.log(myDate.toString()); // Fri May 31 2024 07:49:55 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Fri May 31 2024
// console.log(myDate.toISOString()); // 2024-05-31T07:50:28.547Z
// console.log(myDate.toJSON()); // 2024-05-31T07:50:28.547Z
// console.log(myDate.toLocaleString()); // 5/31/2024, 7:51:03 AM
// console.log(myDate.toLocaleDateString()); // 5/31/2024
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23); // Months starts for 0
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let otherDate = new Date(2024, 0, 23, 5, 3);
// console.log(otherDate.toLocaleString()); // 1/23/2024, 5:03:00 AM

let newDate = new Date("2024-05-22");
// console.log(newDate.toLocaleString()); // 5/22/2024, 12:00:00 AM

let newDate1 = new Date("22-05-2024");
// console.log(newDate.toLocaleString()); // 5/22/2024, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1717142232055

console.log(Math.floor(Date.now() / 1000)); // --> millisecond to seconds

let diffDate = new Date();
console.log(diffDate.getMonth()); // 4 i.e May becz starts with 0
console.log(diffDate.getMonth() + 1); // 5
console.log(diffDate.getDay()); // 5 i.e Friday
console.log(diffDate.getDate()); // 31

console.log(
  diffDate.toLocaleString("default", {
    weekday: "long",
  })
); // Friday
