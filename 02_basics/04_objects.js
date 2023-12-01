const tinderUser1 = new Object(); // ye singleton Object Hota hai. { } khali object return karta hai kyoki humne isme kuch nhi rakha hai.

console.log(`ye singleton Object Hota hai. ${tinderUser1} khali object return karta hai kyoki humne isme kuch nhi rakha hai.`);

const tinderUser2 = {} // ye Non singleton Object Hota hai. { } khali object return karta hai kyoki humne isme kuch nhi rakha hai.

console.log(`ye Non singleton Object Hota hai.${tinderUser2} khali object return karta hai kyoki humne isme kuch nhi rakha hai.tinderUser2`);

const facebook = {};

facebook.name = "Mohit Jha";
facebook.age = 23;
facebook.isLoggedin = false;

console.log(facebook);

//object ke ander bhi hum multiple object de sakte hai.

const regularUser = {
  email: "mohit@gmail.com",
  profile: {
    username: "@mohitjha08",
    fullName: {
      fisrtName: "Mohit",
      lastName: "Jha",
    },
  },
};

console.log(regularUser.profile.fullName.lastName);

//object ko combine kese karte hai

const obj1 = {3:"c", 4:"d"};
const obj2 = {1:"a", 2:"b"};
const obj4 = {5:"d", 6:"e"};

const obj3 ={obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};

console.log(obj3);

const users = [
  {
    id: 1,
    email: "mohit@gmail.com",
  },
  {
    id: 2,
    email: "Rohit@gmail.com",
  },
  {
    id: 3,
    email: "Sohit@gmail.com",
  },
];

users[1].email;

console.log(users[1]);


const facebookk = {};

facebookk.name = "Mohit Jha";
facebookk.age = 23;
facebookk.isLoggedin = false;

console.log(facebookk); // Object ke ander kya hai dekh sakte hai;

console.log(Object.keys(facebookk)); // Object ke ander ke keys pare dekh sakte hai;

console.log(Object.values(facebookk)); // Object ke ander ke values pare dekh sakte hai;

console.log(Object.entries(facebookk)); // Object ke ander ke keys values pare ko seprate Array me convert kar sakte hai;

console.log(facebookk.hasOwnProperty("isLoggedin")); // Object ke ander jo value ya key hume chahiye vo hai ki nhi check kar sakte hai;
