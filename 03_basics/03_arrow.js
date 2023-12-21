const user = {
  username: "Mohit",
  price: 999,

  welcomeMassage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMassage()
user.username = "Sam"
user.welcomeMassage()

console.log(this); // This ki value {} empty aatu hai.

function chai() {
  let username = "Mohit"
    console.log(this.usermane);
}

chai()

const chai = function () {
  let username = "Mohit";
  console.log(this.username);
};




chai();

const chai = () => {
  let username = "Mohit";
  console.log(this.username);
};

chai();

Arrow Function

  const chaii = () => {
    let username = "Mohit";
    console.log(this);
  };

  chaii();

const addTwo = (num1, num2) => {
    return num1 + num2
} // basic Arrow Function

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(20, 40));

const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Mohit" });

console.log(addTwo(20, 40));

const myArroy = [2, 5, 6, 8, 9]

myArray.forEach(function () {})
myArray.forEach(() => {})
myArray.forEach(() => ())