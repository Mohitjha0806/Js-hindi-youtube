/* Array */

let myArr = [10, 12, 13, 14, 15, 16];
console.log(myArr[3]);

let myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);

let myHeros = ["Chota Bheem", "Spiderman"];
console.log(myHeros[1]);


/* Array Method */ 

let myArr = [10, 12, 13, 14, 15, 16];
 myArr.push(100);
 myArr.push(200);
 myArr.push(200);

 console.log(myArr);

 let myArr2 = [100, 120, 130, 140, 150, 160];
 myArr2.pop();

 console.log(myArr2);

 let myArr3 = [100, 120, 130, 140, 150, 160];
 myArr3.unshift(99);

 console.log(myArr3);

 let myArr4 = [100, 120, 130, 140, 150, 160];
 myArr4.shift();

 console.log(myArr4);

 let myArr5 = [100, 120, 130, 140, 150, 160];
 myArr5.shift();

 console.log(myArr5.includes(130));