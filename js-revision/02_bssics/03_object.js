// Singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Mohit",
    "Full Name": "Mohit Jha",
    age: 18,
    [mySym]: "myKey1",
    location: "Bhopal",
    email: "mohitjha95844@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) // This is right way to access any entity 
console.log(JsUser["Full Name"]) // line no. 8 jis string way me likha hai Un value ko bhi is syntax se acces kar sakte hai.
console.log(JsUser[mySym]) // This is right way to write symbol value symbol value in object 
console.log(typeof JsUser[mySym])

JsUser.email = "mohitjha@google.com"
// Object.freeze(JsUser)
JsUser.email = "mohit@microsoft.com";

// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello Js User !")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingTwo())


JsUser.greetingThree = function(){
    console.log(`Hello Js User, ${this["Full Name"]}`)
}

console.log(JsUser.greetingThree())