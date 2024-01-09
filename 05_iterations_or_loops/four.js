// const myObject = {
//   Js: "javascript",
//   Cpp: "C++",
//   rb: "Ruby",
//   Swift: "Swift by apple",
// };

// for (const key in myObject) {
//     console.lo   g(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming = ["javascript", "C#", "RUST", "CPP", "Java"];

// for (const key in programming) {
//   // console.log(key)
//   console.log(programming[key]);
// }

const map = new Map();
map.set("In", "India");
map.set("US", "United State");
map.set("SA", "South Africa");
map.set("In", "India");

console.log(map);

for (const key in map) {
  console.log(key)
}
