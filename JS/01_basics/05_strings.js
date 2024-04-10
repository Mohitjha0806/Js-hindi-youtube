const name = "Mohit Jha ";
const repoCount = 33;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} any my repo count is ${repoCount}.`);



const gameName = new String("Mohit");

console.log(gameName[0]); // isse hum strimg ka index number se kon sa word hai pata laga sakte hai.

console.log(gameName.__proto__);// isse hume strig ka type bata chalt ahai hai jese ki hume pata hai string type object hota hai toh { } ye hume output me show ho raha hai 

console.log(gameName.length); // isse hume string ki length pata chalti hai kitni hai 

console.log(gameName.toUpperCase()); // isse sare string ke word capital letters me ho jate hai 

console.log(gameName.toLowerCase()); // isse sare string ke word small letter me ho jate hai 

console.log(gameName.charAt(3)); // Kon se Index pe kon sa word hai vo dekh sakte hai.

console.log(gameName.indexOf("t"));// Kon se word pe kon sa index hai vo dekh sakte hai.

const newString = gameName.substring(0, 4); // ye string ke ander se sab string bna deta hai le isme hume start length oe end lenght dalna hota hai  example 0 dalte hai toh 0 se start toh hoga but end ke ek index pehle tak hi ruk jaa hai. 

console.log(newString);

const anotherString = gameName.slice(2, 4)
console.log(anotherString);

const newStringOne = "    Mohit Jha"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mohit.com/mohit%20/mohit%20/"

console.log(url.replace('%20', 'Jha'))

console.log(url.includes('mohit'));
console.log(url.includes('Kumar'));


