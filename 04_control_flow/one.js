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

let isLoggedIn = false

if(isLoggedIn){
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


const score = 92;

if(score >= 100){
  let power = "fly"
  console.log(`User power ${power}.`)
}else{
console.log("Nothing")
}