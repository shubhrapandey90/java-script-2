function sayMyName(){
     console.log("S");
     console.log("H");
     console.log("U");
     console.log("B");
     console.log("H");
     console.log("R");
     console.log("A");
}
    
// sayMyName()

// function addTwoNumbers(number1, number2){ // numbers n all aree called as parameters 

//     console.log(number1 + number2);
// }

const result = addTwoNumbers(3, 5) //null and other called as arguments

//console.log("Result:", result);

function addTwoNumbers(number1, number2){
    
   // let result = number1 + number2
    //return result
    return number1 + number2
    
    console.log(number1 + number2);
} 


function loginUserMessage(username){
     if(!undefined){
          console.log("Please enter a username");
          return

     }
     return `${username} just Logged in`
}


//console.log(loginUserMessage("shubhra"));
//console.log(loginUserMessage("shubhra"));


function calculateCartPrice(val1, val2, ...num1){
     return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000));
 const user = {
     username: "shubhra",
     price: 199
 }
 
 function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
 }

 //handleObject(user)
 handleObject({
     username: "sam",
     price: 399
 })

 const myNewArray = [200, 400, 100, 500]

 function returnSecondValue(getArray){
     return getArray[2]

 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 400, 566, 699]));
 