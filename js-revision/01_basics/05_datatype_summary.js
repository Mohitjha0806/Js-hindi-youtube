// Primitive 

// 7 types: - All are call by value

// 1. String
// 2. Boolean
// 3. null
// 4. undefined
// 5. Number
// 6. Symbol
// 7. BigInt

// ****************************************************************

// Non-Primitivre( Refrence type )

// 3 Type: - 

// 1. Array
// 2. Object
// 3. Function

// ****************************************************************

// Primitive Example

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // have No temprature - 0 + Nothing

let userEmail; // Undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId); // False // : - Symbol Example

const bigNumber = 897645312231654456n;


// Non Primitive Example

const arr = ["Shaktiman", "Doga", "Naagraaz"]
console.log(arr);

const myObj = {
    firstName: "Mohit",
    lastName: "Jha",
    age: 24
}
console.log(myObj);

const fun = function () {
    console.log("Hello World");
}

console.log(fun());