const name = "Mohit";
const repoCount = 50;

console.log(`Hello my name is ${name} RepoCount is ${repoCount}.`);

const gameName = new String('Battle-Ground-Moble-India');

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.replace("-", " "))
console.log(gameName.replace(/-/g, " "))
console.log(gameName.includes('India'))
console.log(gameName.includes('Mohit'))
console.log(gameName.split('-'))
console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(8))
console.log(gameName.indexOf("G"))
console.log(gameName.substring(0, 6))
console.log(gameName.slice(0, 6));


const newStringOne = "       Mohit       "
console.log(newStringOne.trim());


const  url =  "https://mohitjha.com//%25mohit%20jha"

console.log(url.replace("%20", "-"))
console.log(url.replace(/%25 | %20/g, "-"))
console.log(url.split('//'))