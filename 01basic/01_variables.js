const accountId = 144553
let accountEmail = "shubhra@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed bc id is contant 



accountEmail = "hc@hc.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId);
/*
prefer not to use var bc of issue of block scope(repetion of variable)
and fuction scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
