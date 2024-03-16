const Person = require('./Person');

class Teacher extends Person {
  constructor(name,email,subject, salary) {
    super(name,email);
    this._subjects = subject;
    this._salary = salary;
  }

  get subjects() {
    return this._subjects;
  }

  get fee() {
    return this._salary;
  }
}

module.exports = Teacher;