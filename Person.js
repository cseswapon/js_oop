const _name = Symbol('name');
const _email = Symbol('email')
class Person {
  static className = "Person Class Inherite";
  constructor(name, email) {
    this[_name ]= name;
    this[_email] = email;
  }

  get getName(){
    return this[_name];
  }

  set setName(value){
    this[_name]  = value;
  }

  get getEmail(){
    return this[_email];
  }

  set setEmail(value){
    return this[_email] = value
  }

  print() {
    console.log("Class Name Person", this + "");
  }

  toString() {
    return `Name is : ${this[_name]}`;
  }

  static isValid(age) {
    return age >= 18;
  }
}

module.exports = Person;