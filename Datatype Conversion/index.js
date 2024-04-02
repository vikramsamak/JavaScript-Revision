let score = "25";
let scoreinNumber = Number(score);

console.log(typeof score); //string
console.log(typeof scoreinNumber); // number

let ab = "22ab";
let ba = Number(ab);

console.log(ba); //Nan => Not a number
console.log(typeof ba); //Number

/*

"25" => 33

"22ab"=>NaN

true => 1 ,false => 0

*/

let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn);

console.log(booleanIsloggedIn); //true

// 1 => true; 0 =>false

let a = "username";
let booleanUsername = Boolean(a);

console.log(booleanIsloggedIn); //true

// string => true;
//emptystring => false;

let someNumber = 2;
let stringNumber = String(someNumber);
console.log(stringNumber); //2
console.log(typeof stringNumber); // string
