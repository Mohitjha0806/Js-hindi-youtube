const score = 400;
console.log(score)

const balance = new Number(100)

console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // jo value hum denge utne me hi .00 bada dega example .toFixed(2) = 100.00 

const otherNumber = 123.4444
console.log(otherNumber.toPrecision(3)) // Value round off kar deta hai 12.4 ko 12 or 12.6 ko 13

const hundreds = 10000000000;
console.log(hundreds.toLocaleString()); // Change the number in US , System example: - 10,000,000,000
console.log(hundreds.toLocaleString('en-IN')); // Change the number in Indian , System: - 10,00,00,00,000

// +++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)); // Absalute Value .abs change the value in Nagative value to positive value and No nay change positive to positive Value
console.log(Math.round(4.3)); // .round method change the value in round off like if value is 4.6 its change in 5 and if value is 4.4 its change in 4 
console.log(Math.ceil(4.1)) // .ceil is change value always on higher no. if 4.1 or 4.9 our value is change in 5.
console.log(Math.floor(4.9)) // .floor is change value always on Lower no. if 4.1 or 4.9 our value is change in 4.
console.log(Math.min(4, 5, 8, 9, 10)) // .min di gyi value me sabse choti value dega 
console.log(Math.max(4, 5, 8, 9, 10)) // .max di gyi value me sabse badi value dega
console.log(Math.random()); // Math.random always giving value in between 0 to 1 ;
console.log((Math.random()*10) + 1) // *10 se into kita hai taki value 0 to 1 ke beech na aaye 22 digit me aayr or kahi 0 na aaye isliye + 1 kiya
console.log((Math.random()*10) + 1) // 

const min = 10;
const max = 100;

console.log(Math.floor(Math.random() * (max-min + 1))) //  it line gives 2 random number between 10 to 100;

