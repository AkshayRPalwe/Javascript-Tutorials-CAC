const name = "Akshay";
const repoCount = 50;

// console.log(name + repoCount + " value"); // Outdated

console.log(`Hello I am ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Akshay");
console.log(gameName); // [String: 'Akshay']
console.log(gameName[0]); // A
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // AKSHAY
console.log(gameName.charAt(2)); // s
console.log(gameName.indexOf("y")); // 5

const newStr = gameName.substring(0, 4);
console.log(newStr); // Aksh --> 4th letter won't come

const otherStr = gameName.slice(-8, 4);
console.log(otherStr);

const newStrOne = "      ARP      ";
console.log(newStrOne); //       ARP
console.log(newStrOne.trim()); // ARP

const url = "https://akshaypalwe.com/my%20resume";
console.log(url.replace("%20", "-")); // https://akshaypalwe.com/my-resume

console.log(url.includes("akshay")); // true

console.log(url.split("%20")); // [ 'https://akshaypalwe.com/my', 'resume' ]
