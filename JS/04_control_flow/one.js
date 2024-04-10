// if

if (true) {
  console.log(executed); // ye condition true honi chahiye tabhi ye ander ka code execute hoga
}

if (false) {
  console.log(executed); // ye condition false me ander ka code execute nhi hoga
}

let isLoggedIn = true

if(isLoggedIn){
    console.log("Aa Gya ander consdition true hai ")
}

let isLoggedInn = false

if(isLoggedInn){
    console.log("Aa Gya ander")
} else{
    console.log("Nhi hu bhai Logged In condition false ho gyi")
}

if (3 === "3") {
  console.log("ha = Hai dono");
} else {
  console.log("Nhi hai = datatype alag hai");
}

if (3 == "3") {
    console.log("ha = Hai dono");
  } else {
    console.log("Nhi hai = datatype alag hai");
  }

  if (3 !== "3") {
    console.log("ha = Hai dono");
  } else {
    console.log("Nhi hai = datatype alag hai");
  }
  if (3 < 4) {
    console.log("ha 4 bada hai ");
  } else {
    console.log("galat bata raha hai");
  }

  if (3 > 4) {
    console.log("ha 4 bada hai ");
  } else {
    console.log("galat bata raha hai");
  }

const temprature = 21

if(temprature == 20){
console.log("20^C tempreture hai Thand hai bht")
}else{
    console.log(`Garmi hai ${temprature} hai`)
}

// <, >, <=, >=, ==, !=, ===, !== 

const score = 92;

if(score >= 100){
  let power = "fly"
  console.log(`User power ${power}.`)
}else{
console.log("Nothing")
}

const balance = 99;

if(balance <= 100) console.log("garib hai "), console.log("Bht jayada GArib") // yese code nhi likhna hai ye good practis nhi hai 

if (balance <= 1000) {
  console.log("Saving Account Holder");
} else if (balance <= 1000) {
  console.log("Salaired Account");
} else if (balance <= 10000) {
  console.log("Bussiness Acoount");
}else{
  console.log("Ambai")
}


const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if(userLoggedIn && debitCard && 2 == 3){ // && oprator ka mtlb hota hai sab condition true honi chaiye tab kaam hoga 
  console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromFacebook){ // || oprator ka mtlb hota hai koi ek  condition true honi chaiye tab kaam hoga 
  console.log("Allow to buy course")
}

Nullish Coalescing Operator (??) : null undefined

?? nullish coalising Operator ka use tab hota hai jab do value hai or dono me se ek null ya Undefined ho toh vo dusri value leta hai null and undefined value ko ignore karta hai 

let val1;

val1 = 5 ?? 10;
val1 = null ?? 10
val1 = undefined  ?? 15
val1 = null ?? 10 ?? 10

console.log(val1)