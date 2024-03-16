const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("Swapon Swaha", "swaponsaha@gmail.com");
const t = new Teacher("aroz", "aroz@gmail.com", "Computer Fundamental", 40000);
const s = new Student(["Computer 101", "Physics", "Math"], 40000);

console.log(p);
console.log(t);
console.log(s);
