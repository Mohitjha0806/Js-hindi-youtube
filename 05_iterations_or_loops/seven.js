// ============= Map ==================

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addValue = myNumers.map((num) => num + 10); 

//map ki sabse achi baat direct value return kar deta hai 

console.log(addValue);

const addValuee = myNumers.map((num) => {num + 10});

console.log(addValuee);

// scope open karne ke baad ye hume undefined return karta hai 

const addValueee = myNumers.map((num) => {return num + 10});

//kyoki return karna hota hai isme bhi filter ki trah

console.log(addValueee);

// ============== Chaining method Map Map filter sab ek ya ek se jayada baar lag jaata hai  ===================

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const add = myNums.map((num) => num + 10);

const newAdd = myNums
                    .map((num) => num*10)
                    .map((num) => num + 1)
                    .filter((num) => num == 101)
                    
console.log(newAdd)