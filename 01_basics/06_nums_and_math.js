// const score = 400;

// const balance = new Number(400);
// console.log(balance)

// console.log(balance.toString().length); // ye number ka type of change karke number ko string me badal deta hai 
// console.log(balance.toFixed(3)); // desimal ke kitne Number tak chahiye isme value put karke dekh sakte hai 

// const otherNumber = 1011.59;

// console.log(otherNumber.toPrecision (4)) //isse use karte hai desimal value hatane ke liye jese hume 4 digit me number chaiye agar value desimal ke baad 0.50 se jayada hai toh vo value 1 badake likh dega or agar 0.50 se kam hai toh vo value vhi rehne dega mtlb round off kar deta hai.

// const hundrets = 100000000;
// console.log(hundrets.toLocaleString('en-IN'));

/*++++++++++ Maths ++++++++++*/ 


// console.log(Math);
// console.log(Math.abs(-4)); // nagative value ko positive karne ke liye use hota hai. 
// console.log(Math.round(4.6)); // .50se decimal jayada hone par 1 jayada value deva or kamm hone pe samem value.
// console.log(Math.ceil(4.2)); // 4.2 do value ya 4.9 ceil mtlb uper ki value hi lega yani 5 
// console.log(Math.floor(4.2)); // 4.2 do value ya 4.9 floor mtlb down ki value hi lega yani 4 
// console.log(Math.min(1,6,5,2,3,8,5,)); // ye sabse choti value deta hai nikal kar  
// console.log(Math.max(1,6,5,2,3,8,5,)); // ye sabse badi value deta hai nikal kar  

console.log(Math.random());
console.log((Math.random()*10));
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
 
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

