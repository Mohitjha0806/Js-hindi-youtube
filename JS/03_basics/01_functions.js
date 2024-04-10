console.log("M");
console.log("O");
console.log("H");
console.log("I");
console.log("T"); // Aam Zindagi

function sayMyName() {
  console.log("M");
  console.log("O");
  console.log("H");
  console.log("I");
  console.log("T");
}

sayMyName(); // sayMyName = function Refrence, () = ye ho gya exicusion.  ye hai mintos zindagi

function addTwoNumbers(number1, number2) {

console.log(number1 + number2);

  let result = number1 + number2;

  return result; // return likhne ke baad scope me kuch bhi likha hai vo read nhi karta hai

  return number1 + number2 //hum direct return karke bhi extra code likhne se bach sakte hai

  console.log("Mohit");
}

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);

function loginUserMassage(username) {
  
  if(username === undefined){
    console.log("Please enter a username");
    return
  }

  if(!username){
    console.log("Please enter a username");
    return
  }

  return `${username} Just Logged In`;
}

console.log(loginUserMassage("Mohit"))

console.log(loginUserMassage()); //jab koi value pass nhi karenge toh undefined

// -----------------------------------------------------------------------------------------------

function calculateCartPrise(num1){
  return num1
}

console.log(calculateCartPrise(200, 300, 400));

// -----------------------------------------------------------------------------------------------

function calculateCartPrise(...num1){
  return num1
}

console.log(calculateCartPrise(200, 300, 400));

// -----------------------------------------------------------------------------------------------

function calculateCartPrise(val1, val2, ...num1){
  return num1
}

console.log(calculateCartPrise(200, 300, 400, 500));

// -----------------------------------------------------------------------------------------------

//With Object

const user = {
  username:"Mohit",
  price: 199
}
function handelobject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelobject(user);

handelobject({
  username: "Animal",
  price: 450
})

// With Array 

const myNewArray = [200, 300, 400, 500, 600]

function returnSecoundValue(getArray){
  return getArray[3]
}

console.log(returnSecoundValue(myNewArray));
console.log(returnSecoundValue([200, 400, 1000, 5000, 7000]))