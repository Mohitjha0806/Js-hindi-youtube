const marvel_heros = ["Thor", "Irenman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);

// Sprade Oprator

const all_new_array = [...marvel_heros, ...dc_heros]
// console.log(all_new_array);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anaother_array = another_array.flat(Infinity)

// console.log(real_anaother_array)

console.log(Array.isArray("Mohit")); // Btayega ki di hui value array hai ya nhi 
console.log(Array.from("Mohit")); // convert to Array formate
console.log(Array.from({name: "Mohit"})) // object value pair direct conver nhi hote array me isliye ye [] empaty array return karta hai ;

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))