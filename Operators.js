// Arithmetic operators are used for performing mathematical calculations in JavaScript:

// console.log(2 + dog); //2[object Object]
// console.log(dog + 2); //[object Object]2
// console.log(myNameArray / 2); //NaN
// console.log(- myNameArray - 2); //NaN
// console.log(2 + myNameArray); //undefined
// console.log(myAge); //17

console.log("3 + 3"); //3 + 3
console.log(17 / 0); // Infinity
console.log(-17 / 0); // -Infinity
console.log(17 + "Hello"); //17Hello
console.log(17 - "Hello"); //NaN
console.log(17 / "Hello"); //NaN
console.log(17 * "Hello"); //NaN
console.log("Hello" + 17);  // Hello17
console.log("Hello" - 17); //NaN
console.log("Hello" / 17); //NaN
console.log("Hello" * 17); //NaN
console.log(Infinity - Infinity); // NaN (subtraction of infinities)
console.log(17 ** 2); // 289 (exponentiation)
console.log("17" - 17); // 0 (subtraction with string conversion)
console.log("17" - -17); // 34 (subtraction with string conversion)
console.log(17 % 3); // 2 (remainder of division)
console.log("17" + 17);  // 1717
console.log("19" / 17); //1.1176470588235294
console.log("17" * 17); //289
console.log(33 + " " + 33); //33 33
console.log(33 - " " - 33); //0
console.log(33 + "33 " + 33) //3333 33
console.log("Hello" - "World"); //NaN
console.log(0 / 10); //0
console.log(+"10"); //10
console.log(-"10"); //-10
console.log(33 + +" 33" - +"33"); //33
console.log(33 + +" 33" - -"33"); //99
console.log(3 + true); //4
console.log(false + false); //0
console.log(true + true); //2
console.log(false + "false"); //falsefalse
console.log(false - "False"); //NaN
console.log(false + "false"); //falsefalse
console.log(33 + +"33"); //66
console.log(2 + 3.3); //5.3

// Logical Operators
let p = true;
let q = false;
console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p); // Logical NOT

// // Unary Operators
let unaryNumber = 5;
console.log(-unaryNumber); // Unary negation
console.log(+unaryNumber); // Unary plus
console.log(++unaryNumber); // Increment
console.log(--unaryNumber); // Decrement

// // Ternary (Conditional) Operator
let age = 16;
console.log((age >= 18) ? 'Adult' : 'Minor');

// // Comparison Operators
let a = 5;
let b = 10;
console.log(a === b); // Strict equality comparison
console.log(a !== b); // Strict inequality comparison
console.log(a < b); // Less than
console.log(a > b); // Greater than
console.log(a <= b); // Less than or equal to
console.log(a >= b); // Greater than or equal to

console.log(NaN + undefined); // NaN
console.log(null == undefined); // True
console.log(null === undefined); // False