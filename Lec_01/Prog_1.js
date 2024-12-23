// Variables and Constants
const accountId = 144553
let accountEmail = "devanshchhabr@gmail.com"
var accountPassword = "#Devansh@13"
accountCity = "Jaipur"

/* 
-> const values cannot be changed
-> let and var look similar but difference lies in the scope...block scope and functional scope
-> we can create the variables without mentioning the keywords which is considered a bad practice
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);

// if we do not define the variable then its default value is "undefined"
let accountState
console.log(accountState)