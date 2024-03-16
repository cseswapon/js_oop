class Person {
  constructor(name, email) {
    this._name = name; // property
    this._email = email; // property
  }
  getName(){
    return this._name;
  }
  setName(name){
    this._name = name;
  }
  getEmail(){
    return this._email;
  }
  setEmail(email){
    this._email = email;
  }
  sendEmail(msg){
    console.log('To:',this._email);
    console.log('Msg', this._sanitizeEmail(msg))
  }
  _sanitizeEmail(msg){
    return msg.trim().toLowerCase();
  }
}

const p1 = new Person("Swapon Saha", "swaponsaha@gmail.com");
p1.setName('Swapon')
// console.log(p1.getName());
p1.sendEmail("      Hello Bro WHAT's up !!!   ");
