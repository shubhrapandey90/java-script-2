// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE..
    console.log(`DB CONNECTED`);
})();        // if we'll not user semicolon here eroor will generate becoz line will not end for another IIFE........


( (name) => {
    // unnamed IIFE......
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`shubhra`)




