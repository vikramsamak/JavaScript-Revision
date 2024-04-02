const accoundId = 123456;
let accountEmail = "example@domain.com";
var accountPassword = "12345";
accountCity = "CityName";
let accountState;

// accoundId = 2; // not allowed

accountEmail = "something@gmail.com";

accountPassword = "789456";

accountCity = "CityName1";
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accoundId);
console.table([accountEmail, accountPassword, accountCity, accountState]);
