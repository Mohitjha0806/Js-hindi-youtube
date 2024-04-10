//Date

// let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// // let myCreateDate = new Date(2023, 10, 16);
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 10, 16, 5, 3);
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-14");
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-01-14");

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());


newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.toLocaleString());