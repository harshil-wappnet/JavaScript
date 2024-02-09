var firstName = "Dylan";
console.log("Hello");
console.log("My name is " + firstName);
var myButton = document.querySelector("#my-button");
if (myButton !== null) {
    myButton.innerHTML = "Click Me";
}
var u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
var w = 1;
w = "string"; // no error
var names1 = [];
names1.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
var names2 = ["Dylan"];
// names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
// A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here', 5];
// the order matters in our tuple
// Inferred tuple without specifying types
var myInferredTuple = ["Hello", 42, true, false, 5];
// Optional properties are properties that don't have to be defined in the object definition.
var car1 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 2000;
var car = {
    type: "Toyota"
};
car.mileage = 2000;
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// By default, enums will initialize the first value to 0 and add 1 to each additional value
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
//   currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 1] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 2] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 3] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 4] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
// logs 1
console.log(CardinalDirections1.North);
// logs 4
console.log(CardinalDirections1.West);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car3 = {
    year: carYear,
    type: carType,
    model: carModel
};
;
var rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
//   Union types are used when a value can be more than a single type.
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
//   function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
//   }
// TypeScript has a specific syntax for typing function parameters and return values.
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
// Function parameters are typed with a similar syntax as variable declarations.
function multiply(a, b) {
    return a * b;
}
// If no parameter type is defined, TypeScript will default to using any
