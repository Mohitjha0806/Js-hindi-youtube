const userEmail = "Mohitjha95844@gmail.com";

if (userEmail) {
  console.log("Got the email id");
} else {
  console.log("Not have email");
}

const userEmaill = "";

if (userEmaill) {
  console.log("Got the email id");
} else {
  console.log("Not have email");
}

const userEmailll = [];

if (userEmailll) {
  console.log("Got the email id");
} else {
  console.log("Not have email");
}

// Javascript me kuch trythy or kuch falsey value hoti hai 

// Falsey Value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Value

// "0", 'false', "space", [], {}, function(){}

// empty Array kese chack karte hai dekhte hai 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
}

// Terniary Operator

condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less then 80") :console.log("more then 80")


 