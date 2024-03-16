const Person = require("./Person");

const _subject = Symbol("subject");
const _salary = Symbol("salary");
class Teacher extends Person {
  constructor(name, email, subject, salary) {
    super(name, email);
    this[_subject] = subject;
    this[_salary] = salary;
  }

  get subjects() {
    return this[_subject];
  }

  get fee() {
    return this[_salary];
  }
}

module.exports = Teacher;
