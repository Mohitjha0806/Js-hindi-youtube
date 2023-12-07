// console.log("M");
// console.log("O");
// console.log("H");
// console.log("I");
// console.log("T"); // Aam Zindagi

function sayMyName() {
  console.log("M");
  console.log("O");
  console.log("H");
  console.log("I");
  console.log("T");
}

// sayMyName(); // sayMyName = function Refrence, () = ye ho gya exicusion.  ye hai mintos zindagi

function addTwoNumbers(number1, number2) {

  // console.log(number1 + number2);

  // let result = number1 + number2;

  // return result; // return likhne ke baad scope me kuch bhi likha hai vo read nhi karta hai 
  
  
  return number1 + number2 //hum direct return karke bhi extra code likhne se bach sakte hai 
  
  // console.log("Mohit");
}

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);
