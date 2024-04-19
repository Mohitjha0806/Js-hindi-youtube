// Array

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeros = ["MSD", "Virat", "Hitman",];

const myArr2 = new Array([1, 2, 3, 4, 5])

console.log(myArr[8]);

// Array Method 

myArr.push(6)
myArr.push(7) // This Method add last Elemet of Array.

myArr.pop() // This Method Remove Last Elemet of Array.
myArr.unshift(111) // This Method add Elemet in a Start of Array because of witch indexing of array goes wrong.
myArr.shift() // This Method remove Elemet in a Start of Array because of witch indexing of array goes wrong.

// Question & Answer method

const isYesOrNot = myArr.includes(6)
console.log(isYesOrNot)

console.log(myArr.indexOf(13))


const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


// Slice & Splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

console.log("C ", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("D ", myArr);