//Object literal
const user = {
  username : 'Amandeep',
  loginCount : 8,
  signedIn : true,
  getUserDetails : function (){
    // console.log(`User Details : ${this.username}`);
    // console.log(this);
  }
}

// console.log(user.getUserDetails());
// console.log(this);

//Contructor Function
function User (username,loginCount,isLoogedIn) {
      this.username = username,
      this.loginCount = loginCount,
      this.isLoogedIn = isLoogedIn,
      this.greetings = function () {
        // console.log(`Welcome ${this.username}`);
      }
}

const userOne = new User("Amandeep",12,true)
const userTwo = new User("ChaiAurCode",11,false)

// console.log(userOne.constructor);
// console.log(userTwo);


