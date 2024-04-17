// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString(), (1) );
console.log(myDate.toDateString(), (2));
console.log(myDate.toLocaleString(), (3));
console.log(typeof myDate, (3));

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString())

let myCreateDatee = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDatee.toLocaleString())

let creatMyDay = new Date("2023-01-14")
let creatMyDays = new Date("01-14-2024")
console.log(creatMyDays.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myTimeStamp.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay() + 1);
console.log(newDate.getMonth());

`${newDate.getDay()} and time is `

const mj = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(mj)