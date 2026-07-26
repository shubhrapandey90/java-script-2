// Singleton - constructor se jo bhi bnega wo singleton hoga baki sab multipleton

// object litrals
// Object.create

const mysym = Symbol("key1")


const JsUser =  {
    name:"Shubhra",
    "full name": "Shubhra pandey",
    [mysym]: "mykey1",
    
    age: 20,
    location: "lucknow",
    email: "shubra@lucknow.com",
    isLoggedin: false,
    lastLogginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email) // email given by dot by default string
console.log(JsUser["email"])// email given by bracket shows error
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "shubhra@chatgpt.com"
//Object.freeze(JsUser) 
JsUser.email = "shubhra@google.com"
//console.log(JsUser);

 
JsUser.greeting = function(){
    console.log("Hello JS user");
}    
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}    

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

