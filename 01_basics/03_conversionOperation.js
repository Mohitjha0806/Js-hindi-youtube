let score = 33;

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* ===================================================================== */

let numInString = "33";

console.log(typeof numInString);
console.log(typeof (numInString));

let valuenumInString = Number(numInString);

console.log(typeof valuenumInString);
console.log(valuenumInString);

/* ===================================================================== */

let num = "33abc";

console.log(typeof num);
console.log(typeof (num));

let valueInNum = Number(num);

console.log(typeof valueInNum);
console.log(valueInNum);

/* ===================================================================== */

let notNumber = "33abc";

console.log(typeof notNumber);
console.log(typeof notNumber);

let valueInnotNumber = Number(notNumber);

console.log(typeof valueInnotNumber);
console.log(valueInnotNumber);

/* ===================================================================== */

let withNull = null;

console.log(typeof withNull);
console.log(typeof withNull);

let valueInWithNull = Number(withNull);

console.log(typeof valueInWithNull);
console.log(valueInWithNull);

/* ===================================================================== */

let withUndefined = null;

console.log(typeof withUndefined);
console.log(typeof withUndefined);

let valueInwithUndefined = Number(withUndefined);

console.log(typeof valueInwithUndefined);
console.log(valueInwithUndefined);

/* ===================================================================== */

let withTrue = true;

console.log(typeof withTrue);
console.log(typeof withTrue);

let valueInwithTrue = Number(withTrue);

console.log(typeof valueInwithTrue);
console.log(valueInwithTrue);

/* ===================================================================== */

let withFalse = false;

console.log(typeof withFalse);
console.log(typeof withFalse);

let valueInwithFalse = Number(withFalse);

console.log(typeof valueInwithFalse);
console.log(valueInwithFalse);

/* ===================================================================== */


// Notes //

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/* Notes */

// 1 => true; 0 => false
// "" => false;
// "Mohit" => true;

let someNumber = 33;

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);