// The let keyword allows you to declare a variable with block scope.
var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10

// The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
var x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
}
// Here x is 10

// Arrow functions allows a short syntax for writing function expressions.
const x = (x, y) => { return x * y };

// The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);

// JavaScript Sets
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Javascript Classes
// JavaScript Classes are templates for JavaScript Objects.
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
// When you have a class, you can use the class to create objects:
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// Modules are imported in two different ways:
// Import named exports from the file person.js:
import { name, age } from "./person.js";
// Import a default export from the file message.js:
import message from "./message.js";