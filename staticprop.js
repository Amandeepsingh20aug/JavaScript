class User {
  constructor(username) {
    this.username = username
  }

  logme() {
    console.log(`USERNAME ${this.username}`);
  }

  static createId(){
    return `123`
  }
}

const aman = new User('Aman')

//  console.log(aman.createId());

 class Teacher extends User {
  constructor(username,email) {
   super(username)
   this.email = email
  }
 }

 const iphone = new Teacher('Iphone', 'i@phone.com')

 console.log(iphone.createId());