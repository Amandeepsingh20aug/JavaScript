// Es6

class User {
  constructor (username, email ,password) {
    this.username = username;
    this.email  = email;
    this.password = password
  }

  encryptPass() {
    return `${this.password}abc`
  }

  changeUserName () {
    return `${this.username.toUpperCase()}`
  }
}

const chai = new User("Chai",'chai@gmail.com' ,'123')

// console.log(chai.encryptPass());
// console.log(chai.changeUserName());

//Behind The scene 

function user(username, email ,password){
  this.username = username;
  this.email  = email;
  this.password = password
}

user.prototype.encryptPass = function () {
  return `${this.password}abc`
}

const tea = new user("tea" , 'tae@gmail.com' , '234')

console.log(tea.encryptPass());