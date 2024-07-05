class User {
  constructor(username){
    this.username = username
  }

  logme() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
   constructor(username,email,password) {
    super(username)
     this.email = email
     this.password = password
   }

   addCourses() {
    console.log(`A new course was added by ${this.username}`);
   }
}

// const chai = new Teacher("Chai" , 'chai@email.com' , '123')

// chai.logme()

const masalaChai = new User("masalaChai");

masalaChai.logme()