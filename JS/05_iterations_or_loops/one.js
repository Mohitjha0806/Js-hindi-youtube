// for loop

// let index = 0; this is initilision hota hai.

// index < 10; condition check hoti hai agar condition true hoti hai toh toh scope ke ande ka part execution hoga

// index++ isme ye 2 condition check hone ki value bada deta hai or jabtak badata rehta hai jabtak condition false nhi ho jati

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 8) {
    console.log("8 is my birthday date");
  }
  console.log(element)
}

for (let i = 0; i < 5; i++) {
    console.log(`Outer loop value : ${i}`);
for (let j = 0; j < 5; j++) {
    console.log(`Inner loop value : ${i} and outer loop value ${i}`);
}
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + '=' + i*j);
}

let myArray = ["flash", "Batman", "Spiderman"]
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// Break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break;  //  break lagane se jo condition hum if me likhte hai vo condition true hote hi console deker bahr aa jata hai 
    }
    console.log(`Value of i is ${index}`);

}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue; //  continue lagane se jo condition hum if me likhte hai vo condition true hote hi console me deker vo step ko skeep kar jata hai. 
    }
    console.log(`Value of i is ${index}`);

}
