// singelton
//Object.create

// Object literals
const mySym = Symbol("Key1")
const user = {
  name : "Amandeep",
  "full name" : "Amandeep Singh",
  age : 23,
  [mySym] : "myKey1",
  location : 'Gorakhpur',
  email : "Amandeep@google.com",
  isLogged : false,
  lastLoginDays : ["Monday","Saturday"]
}

// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

// user.email = "Amandeep@chatGPT.com"
// // Object.freeze(user)
// user.name = "Hitesh"
// console.log(user);

user.greetings = function () {
  console.log("Hello Here");
}

user.greetingsTwo = function () {
  console.log(`Hello Here ${this.name}`);
}

// console.log(user.greetings());
// console.log(user.greetingsTwo());

