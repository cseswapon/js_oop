class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  sendEmail(msg) {
    console.log("To", this._email);
    console.log("Message:", msg);
  }

  print() {
    console.log('Class Name Person',this+'');
  }

  toString(){
    return `Name is : ${this._name}`
  }
}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");

p1.print()
