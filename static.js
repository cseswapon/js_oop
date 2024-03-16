class Person {
  static className = "Person Class Inherite";
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  sendEmail(msg) {
    console.log("To", this._email);
    console.log("Message:", msg);
  }

  print() {
    console.log("Class Name Person", this + "");
  }

  toString() {
    return `Name is : ${this._name}`;
  }

  static isValid(age){
    return age>=18;
  }

}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");

// p1.print();

// console.log(Person.className)

const testUser = {
    name:'Mr.X',
    age:25,
    email:'mrx@gmail.com'
}

let p2;

if (Person.isValid(testUser.age)) {
    p2 = new Person(testUser.name,testUser.email);
}

console.log(p2);