let firstName: string = "Dylan";
console.log("Hello");
console.log("My name is " + firstName);

let myButton: HTMLButtonElement | null = document.querySelector("#my-button");

if (myButton !== null) {
  myButton.innerHTML = "Click Me";
}


let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

let w: unknown = 1;
w = "string"; // no error

const names1: string[] = [];
names1.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const names2: readonly string[] = ["Dylan"];
// names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

// A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
let ourTuple: [number, boolean, string,number];

// initialize correctly
ourTuple = [5, false, 'Coding God was here',5];
// the order matters in our tuple

// Inferred tuple without specifying types
let myInferredTuple = ["Hello", 42, true,false,5];


// Optional properties are properties that don't have to be defined in the object definition.

const car1: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 2000;

  const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car.mileage = 2000;

  // An enum is a special "class" that represents a group of constants (unchangeable variables).
  // By default, enums will initialize the first value to 0 and add 1 to each additional value
  enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  // logs 0
  console.log(currentDirection);
  // throws error as 'North' is not a valid enum
//   currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections1 {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections1.North);
  // logs 4
  console.log(CardinalDirections1.West);

//   Type Aliases allow defining types with a custom name (an Alias).
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car3: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// Interfaces are similar to type aliases, except they only apply to object types.
// Try creating a new interface using it below
interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);

// Interfaces can extend each other's definition.
  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

//   Union types are used when a value can be more than a single type.
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');

//   function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
//   }

// TypeScript has a specific syntax for typing function parameters and return values.
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }

  // The type void can be used to indicate a function doesn't return any value.
  function printHello(): void {
    console.log('Hello!');
  }

  // Function parameters are typed with a similar syntax as variable declarations.
  function multiply(a: number, b: number) {
    return a * b;
  }
  // If no parameter type is defined, TypeScript will default to using any