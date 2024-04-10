let myName = "Mohit";
console.log(myName.length);
console.log(myName.trim().length);

let myName = "Mohit          ";
let mychannel = "dev_Shef        ";

console.log(myName.trueLength);

let anotherUserName = "ChaiAurCode     ";

String.prototype.trueLength = function (){
    console.log(`${this}`)
    console.log(`True Lenght is : ${this.trim().length}`)
}

"mohit".trueLength()
"tea".trueLength()
anotherUserName.trueLength()


let myHero = ["Thor", "Spiderman", "Ironman"];

let heroPower ={
    thor: "Hammer",
    Spiderman: "Web",
    Ironman: "Iron",

    getSpiderPower: function(){
        console.log(`Spidy Power Is ${this.Spiderman}`)
    }
}

Object.prototype.mohit = function(){
    // console.log(`Mohit is present in all object`)
}
Array.prototype.hyMohit = function(){
    // console.log(`Mohit is present in all array`)
}


heroPower.mohit()
myHero.mohit()
myHero.hyMohit()
heroPower.hyMohit()

// Inheritance

const User = {
    name: "Chai",
    gmail: "Chai@google.com",

}

const Teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Morden syntex

Object.setPrototypeOf(TeachingSupport, Teacher)