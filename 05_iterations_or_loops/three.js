// for of loop

// ye sare kuch loop array specific loop hai 

 ["", "", ""]  // array ke ander string dalte hai 
 [{}, {}, {}]  // normal hai array ke ander object bhi dalte hai ye bht hi common hai senerio hai har itration me object me se kkuch value nikalni hai loop lagayiye fir object ke ander jayiye fir  .. notetion se square notetion se value niklna ota hai 


 

//  for (const iterator of object) {        //itration mtlb value declaire karna hota hai i value jo for loop dete the or object ka mtlb kis par loop lagana hai jese isme hume arr par lagan gai 
    
//}

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

// isko hum array hi nhi array ke ander string hoti hai usper bhi laga sakte hai 

const str = ["Mohit", "Rohit", "sohit", "chohit", "gohit"];

for (const val of str) {
    console.log(val)
}

// isko hum array hi nhi string hoti hai usper bhi laga sakte hai 

const greetings = "Ram Ram";

for (const greet of greetings) {
    console.log(`Each Letter is ${greet}`)
}


// Map    // map ke ander uniqe value hoti hai jiss order me dalo uss order me hoti hai   // Map object holds Key-Value pairs and Remembers the orignal insertion order of the keys. Any value

const map = new Map()
map.set('In', 'India');
map.set('US', 'United State');
map.set('SA', 'South Africa');
map.set('In', 'India');

console.log(map);

for (const key of map) {  
    console.log(key)
}

// [key, value] that called array Destructure

for (const [key, value] of map) {  
    console.log(key, ":-", value);
}

const myObject = {
    "game1" : "NFS",
    "game2" : "IGI"
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
} // this is not itritable ye wala loop yaha kaam nhi kar raha hai 