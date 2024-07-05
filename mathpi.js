// const discreptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(discreptor);

const user = {
  userName : "Aman",
  isAvailable : true,
  age : 23,

  orderChai : function() {
    console.log("chai nhi bni");
  }
}


Object.defineProperty(user,'userName' , {
  writable: false,
  enumerable : false
})

const discreptor= Object.getOwnPropertyDescriptor(user,'userName')
console.log(discreptor);

for (let [key,value] of Object.entries(user)) {
   if(typeof value !== "function"){
      console.log(`${key} : ${value}`);
   }
}
