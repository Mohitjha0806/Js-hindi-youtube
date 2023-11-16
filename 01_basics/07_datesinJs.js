//Date

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// // let myCreateDate = new Date(2023, 10, 16);
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());

let myCreateDate = new Date(2023, 10, 16, 5, 3);
console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());