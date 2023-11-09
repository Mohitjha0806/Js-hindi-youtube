//Date

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());


let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate);
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate.toDateString());

let myCreateDate = new Date(2023, 0, 23, 1, 27);
console.log(myCreateDate1.toLocaleString());

let myCreateDate = new Date(2023, 0, 23, 1, 27);
console.log(myCreateDate1.toLocaleString());

let myCreateDate = new Date("08-06-2000");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myTimeStamp.getTime());




