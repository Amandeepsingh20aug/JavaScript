// const tinderUser = new Object(); //SingelTon

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regluarUser = {
  email : "some@gmail.com",
  fullname : {
     userFullname :{
       firstname : "Amandeep",
       lastname : "Singh"
     }
  }
}

// console.log(regluarUser.fullname.userFullname.firstname);

const obj1 = { 1:"a", 2: 'b'}
const obj2 = { 3:"a", 4: 'b'}

const obj3= {...obj1,...obj2}
// console.log(obj3);

const users = [
  {
    id : 1,
    email : 'h@gmail.com'
  },
  {
    id : 1,
    email : 'h@gmail.com'
  },
  {
    id : 1,
    email : 'h@gmail.com'
  },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
  coursename : "is in hindi",
  price : '999',
  courseInstructor : "Amandeep"
}

