// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 2334466577888999n

// Refernce( Non-Primitive)

// Array, Objects, Functions

const heros = ["siddharth", "vijay", "raghav"]
let myObj = {
    name: "shubhra",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);



// -----------------------------NEW TOPIC MEMORY--------------------------------//

//types:
//  Stack (Primitive), Heap (Non-Primitive)
// In stack copy of memory is given,In heap reference of original memory is given.

let myYoutubename = "shubhrapandeydotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }
let userTwo = userOne 

userTwo.email = "shubhra@google.com"

console.log(userOne.email);
console.log(userTwo.email);


//stack revision in detail//