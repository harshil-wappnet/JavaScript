/* Data-Types of Variables
1. Number
2. String
3. Booleans
4. Arrays
5. Objects  */

// Examples of data-type

let myAge = 17; //integers
let myHeight = 175.23; //floats
let positiveInfinity = Infinity; // Represents positive infinity
let negativeInfinity = -Infinity; // Represents negative infinity
let notANumber = NaN; //Represents a value that is not a legal number
let dolphinGoodbye = "So long and thanks for all the fish"; //string
let iAmAlive = true; //boolean
let myNameArray = ["Chris", "Bob", "Jim"]; //array of string
let myNumberArray = [10, 15, 40]; //array of type number
let dog = { name: "Spot", breed: "Dalmatian" }; //object
let test = 6 < 3; //boolean

console.log(typeof myNameArray); //object
console.log(typeof test); //boolean
console.log(typeof dog); //object

// function
function sayHello() {
    console.log('Hello!');
}
console.log(typeof sayHello);

// Null
let nullValue = null;
console.log(typeof nullValue); //object