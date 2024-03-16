class Person {
  constructor(name, email) {
    this._name = name; // property
    this._email = email; // property
  }
  get name() {
    return this._name;
  }
  set name(value){
    this._name = value;
  }
}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");
p1.name = 'Print';
console.log(p1.name);