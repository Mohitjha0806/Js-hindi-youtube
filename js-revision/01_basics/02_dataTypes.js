// We have two data type in javascript 

// 1. Promitive Data Type 
// 2. Non-Promitive Data Type

// Primitive data Type

let num = 1;                                                                      // Number
let str = "Mohit";                                                                // String
let Bollean = true;                                                               // Boolean
let nl = null;                                                                    // Null
let und = undefined;
// Undefined
const bigInt1 = BigInt(9007199254740991); // Max safe integer
const bigInt2 = BigInt(9007199254740991) + BigInt(1);

console.log(bigInt1); // 9007199254740991n
console.log(bigInt2); // 9007199254740992n

// Operations with BigInt
const resultBigInt = bigInt1 * bigInt2;
console.log(resultBigInt); // 8106479329266890421408n                              // BigInt

const sym1 = Symbol();
const sym2 = Symbol('description'); // with description

// Symbols are unique
console.log(sym1 === sym2); // false

// Using Symbols as object properties
const objj = {
    [sym1]: 'value'
};

console.log(objj[sym1]); // value                                                  // Symbol

console.table([num, str, Bollean, nl, und, resultBigInt, objj[sym1]])


// Non-Promitive Data Type


// Object 


let obj = {
    Name: "Mohit Jha",
    Education: "Masters of Computer Application",
    DOB: "08-06-2000",
}

// Array

let arr = ["Mohit", "Ankit", "Nayan", "Ashish", "Hitesh", "Amit"]


// // Function
// function greet(Mohit) {
//     console.log(Mohit + "," + "Radhe Radhe")  
// }

// Date

const currentDate = new Date();
console.log(currentDate)


console.table([obj, arr])