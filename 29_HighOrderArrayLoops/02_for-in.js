const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

for (const key in myObj) {
  //   console.log(`${key} shortcut is for ${myObj[key]}`);
}
// js shortcut is for JavaScript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
//   console.log(key); // gets keys of array: 0,1,2,3,4...
//   console.log(programming[key]);
}

const map = new Map(); // --> Values will be unique and orders are preserved
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
    console.log(key);
}