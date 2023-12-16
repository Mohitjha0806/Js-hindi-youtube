// var a = 500;

// if (true) {
//   a = 600;
// }

// console.log(a);

// // Var ek global variable hai jisme hum Scope ke ander ki value ko bahar or bahar ki value ko scope ke ander run kar sakte hai. isko declare karne ke baad change toh kar sakte hai but same name ka variable more then one time declaire bhi kar sakte.

// //================================================================================================

// let b = 1000;

// if (true) {
//   let b = 1200;
//   console.log(b);
// }

// console.log(b);

// // let ek Local variable hai jisme hum Scope ke ander ki value ko bahar acces nhi kar sakte or bahar ki value ko scope ke ander Access kar sakte hai. isko declare karne ke baad change toh kar sakte hai but same name ka variable mmore then one time declaire nhi kar sakte.

// //=========================================================================================================================

// // const c = 2000;

// if (true) {
//   const c = 2500;
//   console.log(c);
// }

// console.log(c);

// // Const ek constant variable hai jisme hum Scope ke ander ki value ko bahar acces nhi kar sakte or bahar ki value ko scope ke ander Access kar sakte hai. but isko ek baar declaire karne ke baad change nhi kar sakte

// // Nested Scope

// function one() {
//   const username = "Mohit";

//   function two() {
//     const website = "www.youtube.com";
//     console.log(username);
//   }
//   // console.log(website);

//   two();
// }
// one();

// if (true) {
//   const username = "Mohit";
//   if (username == "Mohit") {
//     const website = " youtube";
//     console.log(username + website);
//   }
//   console.log(website); // thorw error
// }

// // console.log(username); // thorw error

// ///////////++++++++++++++++++ Interesting ++++++++++++++++++///////////////

// console.log(addone(5)); //Ye iss liye declaration ke pehle run ho rha hai kyoki ye direct function hai humne isse kisi variable me store nhi kiya hai

// function addone(num) {
//   return num + 1;
// }

// addTwo(10); // Ye iss liye declaration ke pehle run nhi ho raha kyoki function humne variable me store kiya hai

// const addTwo = function (num) {
//   return num + 2;
// };




// function mohit(age) {
//   return age + 10;
// }

// console.log(mohit(13));


// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

