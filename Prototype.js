// let myName = "Amandeep   "

// console.log(myName.truelength());

let myHero = ["SpiderMan","Hulk"];

let heroPower = {
  hulk: 'Strength',
  spiderman : 'sling',
  getSpiderPower : function () {
  console.log(`Spidy Power ${this.spiderman}`);
  }
}

Object.prototype.aman = function () {
  console.log(`Aman is present in all objects`);
}

// heroPower.aman()
// myHero.aman()

Array.prototype.heyAman = function () {
  console.log(`Aman say hello`);
}

// myHero.heyAman()
// heroPower.heyAman()


//Inheritance
const user = {
  useName : "CHai",
  email : "chai@google.com"
}

const Teacher = {
 makeVideo : true
}

const TeachingSupport = {
  isAvailable : false
}

const TaSupport = {
  makeAssigmnet : 'JS Assign',
  fulltime : true,
  __proto__ : TeachingSupport
}

Teacher.__proto__ = user


//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength();

"Aman".trueLength();
"Tea".trueLength();