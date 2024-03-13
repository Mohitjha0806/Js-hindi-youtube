// object literal

const user = {
  username: "Mohit",
  loginCount: 8,
  isLoggedIn: true,

  getUserDetails: function () {
    console.log("Got user detaild from DataBase");
    console.log(`isloggedIn: ${this.isLoggedIn}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

const promiseOne = new Promise();
const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welcome ${this.username}`)
  }

  return this;
  // this ek object hai jiske ander ab value dalte jate hai
}

const userOne = User("Mohit", 12, true);
const userTwo = new User("chaiAorCode", 11, false);
console.log(userOne.constructor); 
  console.log(userOne);
  console.log(userTwo);



// Constructor function

// Note:-  1. new likhte hi nya instence create hota hai 
//         2. constructor function call hota hai new keyword ke karan. aagrument pack karke de deta hai.
//         3. this keywork ke ander sare argument inject ho jata hai.
//         4. function ke ander mill jata hai hume 

// new lagana hi har baar nya instence deta hai yhi Constructor hai


// new Date, new Promise << ise jo new hai this all are constructor Function new key word se har baar new context banta hai isi ko constructor fuction ho.
