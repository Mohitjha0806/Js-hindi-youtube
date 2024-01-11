// const coding = ["Java", "Python", "Javascript", "CPP", "Ruby"];

// const values = coding.forEach( (item) => {
// console.log(item);
// return item;
// })

// console.log(values);

// forEach koi bhi value return nhi karta hai

// -------------- they Both are same example ------------------ //

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10];

// const newNums = myNums.filter((num) => num > 5);
// console.log(newNums);

// const myAges = [11, 22, 33, 44, 52, 67, 71, 81, 90, 101];
// const newAge = myAges.filter((age) => {
//   return age > 44;
// });
// console.log(newAge);

// note:- 2nd example me {} ke ander likhi hai condition toh haume value retur ke liye return lagana padta hai tabhi value return hoti hai

// -------------- they Both are same example for do same thing  ------------------ //

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = []

// myNums.forEach( (num) => {
// if(num > 4){
//    newNums.push(num)
// }
// })

// console.log(newNums)

// ----------------- Same thing with for each ----------------

// exapmle: -

// const phone = ["9000", "10000", "11000", "12000", '13000', '14000', '15000',];

// const underRange = [];

// phone.forEach((range) => {
//    if(range < 14000){
//       underRange.push(range)
//    }
// })

// console.log(underRange);

// ====================secound example==================

// =================== books example ====================

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Dramaa",
    publishYear: 1960,
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
  },
  {
    title: "The Hobbit",
    genre: "Drama",
    publishYear: 1937,
  },
  {
    title: "Pride and Prejudice",
    genre: "Drama",
    publishYear: 1813,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Drama",
    publishYear: 1951,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997,
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publishYear: 2003,
  },
  {
    title: "The Lord of the Rings",
    genre: "Drama",
    publishYear: 1954,
  },
  {
    title: "The Hunger Games",
    genre: "Dystopian",
    publishYear: 2008,
  },
];

// const userBooks = books.filter((bk) => bk.genre === "Drama");
const userBooks = books.filter((py) => py.publishYear > 1950 && py.genre === "Drama" )
console.log(userBooks);
