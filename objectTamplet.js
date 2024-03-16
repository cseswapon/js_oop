const person = {};
person.name = "Swapon Saha";
person.name = "swaponsaha@gmail.com";
console.log(person);

class Person {
  // constructor is refer with Person ---> p1 or p2
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");
const p2 = new Person("abc", "abc@gmail.com");

console.log(p1, p2);
