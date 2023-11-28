//Singleton

// Object.create

// object literals

const JsUser = {
  name: "Mohit",
  "full name": "Mohit Jha",
  age: 23,
  Location: "Bhopal",
  email: "mohitjha95844@gmail.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Tuesday"],
};

console.log(JsUser.name); // thsi is not right way to access
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
