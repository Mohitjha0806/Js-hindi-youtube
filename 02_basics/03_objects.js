//Singleton

// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Mohit",
  "full name": "Mohit Jha",
  age: 23,
  [mySym]: "myKey1", // Jab bhi hum symbol ko reffer karna ho tab hum [] isnka use karna hota hai. the freez ke baad run karne ke baad hume symbol key hu dikhane lagta hai.
  Location: "Bhopal",
  email: "mohitjha95844@gmail.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Tuesday"],
};

console.log(JsUser.name); // That is not right way to access
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "mohitjha@google.com";
console.log(JsUser["email"]);

Object.freeze(JsUser); // .freeze se Object freez ho jata hai for usme change karne par bhi change nhi hote hai.
JsUser.email = "mohit@amazon.com";
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Front-End Developer")
}

JsUser.greetingTwo = function(){
  console.log(`Hello ${this["full name"]} you are a best developer`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser.greeting);

