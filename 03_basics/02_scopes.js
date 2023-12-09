var a = 500;

if (true) {
  a = 600;
}

console.log(a); 

// Var ek global variable hai jisme hum Scope ke ander ki value ko bahar or bahar ki value ko scope ke ander run kar sakte hai. isko declare karne ke baad change toh kar sakte hai but same name ka variable more then one time declaire bhi kar sakte. 

//=========================================================================================================================

let b = 1000;

if (true) {
  let b = 1200;
  console.log(b); 
}

console.log(b);

// let ek Local variable hai jisme hum Scope ke ander ki value ko bahar acces nhi kar sakte or bahar ki value ko scope ke ander Access kar sakte hai. isko declare karne ke baad change toh kar sakte hai but same name ka variable mmore then one time declaire nhi kar sakte. 

//=========================================================================================================================

const c = 2000;

if (true) {
  const c = 2500;
  console.log(c);
}

console.log(c);

// Const ek constant variable hai jisme hum Scope ke ander ki value ko bahar acces nhi kar sakte or bahar ki value ko scope ke ander Access kar sakte hai. but isko ek baar declaire karne ke baad change nhi kar sakte 