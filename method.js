class Person {
  constructor(name, email) {
    this.name = name; // property
    this.email = email; // property
  }
  //   method
  changeName(name) {
    this.name = name;
  }
  sendEmail(msg) {
    console.log("To", this.email);
    console.log("Message:", msg);
  }
  print() {
    console.log(this);
  }
//   property
  arrow =()=>{
    const sex = 'F';
    console.log(this,sex)
  }
}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");
const p2 = new Person("abc", "abc@gmail.com");
/* 
p1.changeName('ABC')

p1.print()
p2.print() */

// console.log(p1, p2);
// console.log(p1);
p1.arrow();
// p1.print()