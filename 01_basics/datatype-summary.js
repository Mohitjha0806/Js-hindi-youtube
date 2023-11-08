// Primitive

// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 1223379864531222654n

console.log(typeof score )
console.log(typeof scoreValue )
console.log(typeof isLoggedIn )
console.log(typeof outSideTemp )
console.log(typeof userEmail )
console.log(typeof bigNumber )

// Reference (Non primitive)

// Array, Objects, Functions

// Array

const heros = ["Saktiman", "Chota Bheem", "Chota Don"];

// Object

let mohitInfo = {
    name:"Mohit Jha",
    age: "23",
    Education: "Graduation",
    subject: "B.Sc"
}

// function

const myFun = function(){
console.log("Hy mohit, How are You");
}

myFun();