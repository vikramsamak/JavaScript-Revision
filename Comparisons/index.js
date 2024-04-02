/*---------------------------- COMPARISONS IN SAME DATA TYPE ------------------------------- */
console.log("SAME DATATYPE");

console.log(2 > 1); // true

console.log(2 >= 1); //true

console.log(2 < 1); //false

console.log(2 == 1); //false

console.log(2 != 1); //true

/*---------------------------- COMPARISONS IN DIFF. DATA TYPE ------------------------------- */

console.log("DIFF DATATYPE");

console.log("2" > 1); //true

console.log("02" > 1); //true

console.log(null > 0); //false

console.log(null == 0); //false

console.log(null >= 0); //true

console.log(undefined == 0); //false

console.log(undefined > 0); //false

console.log(undefined < 0); //false

/*----------------------------STRICT CHECK -------------------------------*/

console.log("2" === 2); //false
