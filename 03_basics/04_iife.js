// Immediately Invoked Function Expressions IIFE

// Normal Function

function chai() {
  console.log(`DB Connected`);
}
chai();

//IIFE function

(function chai() {
  console.log(`DB with IIFE Connected`);
})();

((name) => {
  console.log(`Are you ${name}`);
})("Mohit");
