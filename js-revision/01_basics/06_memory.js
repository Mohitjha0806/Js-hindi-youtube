// Stack Memory (Primitive Data Type)

// Heap Memory (Non-Primitive Data Type)

// Stack memory Example

let myYoutubeName = "dev_shef";

let anotherName = myYoutubeName;
anotherName = "Coding_King"

console.log(myYoutubeName);
console.log(anotherName);

// Heap memory Example

let userOne = {
    email: "mohitjha95844@gmail.com",
    upi: "mohitjha95@ybl"
}

let userTwo = userOne;

userTwo.email = "mohit@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);