const coding = ["Java", "Python", "Javascript", "CPP", "Ruby"];

coding.forEach( function (item) {
    console.log(item)
} )

coding.forEach( (val) => {
    console.log(val)
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
console.log(item, index, arr);
} )

const myCoding = [
    { 
        language: "javascript",
        languageName: "JS" 
    },
    { 
        language: "Java", 
        languageName: "JV" 
    },
    { 
        language: "Ruby", 
        languageName: "RY" 
    }
];

myCoding.forEach( (item) => {
console.log(item.language)
})