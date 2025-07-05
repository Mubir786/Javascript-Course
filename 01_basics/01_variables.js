/*
 const → Use when the value should not change
 const → Use when the value should not change
 var → Old way (use only when needed)
*/

const accountId = 144553
let accountEmail = "mubir123@gmail.com"
var accountPassword = "12345"
accountcity = "Karak"
let accountState;
//accountId = 2 -> not allowed beacuse when const keyword comes first it can't be changed

accountEmail = "abc@gmail.com" // -> the AccountEmail can be changed because it is not a constant
accountPassword = "21212121" // -> the AccountPassword can be changed because it is not a constant
accountCity = "Kohat" // -> the AccountCity can be changed because it is not a constant

console.log(accountId); //-> used to print accountId on Console

console.table(["Account Id = " + accountId, "Account Email = " + accountEmail, "Account Password = " + accountPassword, "Account City = " + accountcity, "Account State = " + accountState]) // -> it will print the values in table format. It becomes easy.