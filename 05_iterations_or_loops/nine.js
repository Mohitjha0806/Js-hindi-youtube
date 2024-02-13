// ============== Reduce =============

// (i) with fuction

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal = myNums.reduce(function (acc, currVal) {
  console.log(`acc : ${acc} and currVal : ${currVal}`);
  return acc + currVal;
}, 0);

console.log(myTotal)

// With arrow Function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myTotal);

// Example

const shoppingCart = [
    {
        itemName : "js course",
        price : 3000
    },
    {
        itemName : "Python",
        price : 3000
    },
    {
        itemName : "DBMS",
        price : 3000
    },
    {
        itemName : "Web Dev",
        price : 3000
    },
    {
        itemName : "C++",
        price : 3000
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0 );

console.log(priceToPay);