// Destructuring of Object
const course = {
  courseName: "JS",
  price: "999",
  couserInstructor: "ARP",
};

// course.couserInstructor
const { couserInstructor } = course;
const { couserInstructor: instructor } = course;

console.log(couserInstructor); // ARP
console.log(instructor); // ARP

// {
//   "name": "akshay",
//   "courseName" : "JS",
//   "price":"free"
// }
