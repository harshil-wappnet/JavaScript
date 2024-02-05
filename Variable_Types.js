// A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.
// Variables in JS are case-sensitive
// e.g. "myAge" and "myage" are different

/* Types of Variables
1. var
2. let (ES6)
3. cosnt  (ES6, block scope) */

// var: Variables declared with var have function-level scope or global scope if declared outside any function.
// Example 1
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10 (var is function-scoped)
}
example();
console.log(x); // Throws ReferenceError: x is not defined (x is not accessible outside the function)

// Example 2
var y = 20;
function example() {
    if (true) {
        var x = 10;
    }
    console.log(y); // global scope
    y = 30;
    console.log(x); // Output: 10 (var is function-scoped)
}
example();
console.log(x);
console.log(y); //Output: 10 (var is function-scoped)

// Example 3 Global Scope:
var globalVar = 'I am global';
let globalLet = 'I am global';
const globalConst = 'I am global';

console.log(globalLet); // Accessible
console.log(globalConst); // Accessible
function testScope() {
    console.log(globalVar); // Accessible
    console.log(globalLet); // Accessible
    console.log(globalConst); // Accessible
}
testScope();
console.log(globalVar); // Accessible
console.log(globalLet); // ReferenceError: globalLet is not defined
console.log(globalConst); // ReferenceError: globalConst is not defined

// Example 4 Function Scope:
function testScope() {
    var functionVar = 'I am inside a function';
    let functionLet = 'I am inside a function';
    const functionConst = 'I am inside a function';

    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible
}
testScope();
console.log(functionVar); // ReferenceError: functionVar is not defined
console.log(functionLet); // ReferenceError: functionLet is not defined
console.log(functionConst); // ReferenceError: functionConst is not defined

// Example 5 Block Scope (with if statement):
if (true) {
    var blockVar = 'I am inside a block';
    let blockLet = 'I am inside a block';
    const blockConst = 'I am inside a block';

    console.log(blockVar); // Accessible
    console.log(blockLet); // Accessible
    console.log(blockConst); // Accessible
}
console.log(blockVar); // Accessible
console.log(blockLet); // ReferenceError: blockLet is not defined
console.log(blockConst); // ReferenceError: blockConst is not defined

// Example 6 Hoisting (only applicable to var):
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted';
console.log(hoistedVar); // Output: I am hoisted

console.log(hoistedLet); // ReferenceError: hoistedLet is not defined
let hoistedLet = 'I am not hoisted';

// Example 7 Re-declaration and Mutation:
var redeclareVar = 'I am var';
let redeclareLet = 'I am let';
const redeclareConst = 'I am const';

var redeclareVar = 'I am redeclared var'; // No error
console.log(redeclareVar);
// let redeclareLet = 'I am redeclared let'; // SyntaxError: Identifier 'redeclareLet' has already been declared
// const redeclareConst = 'I am redeclared const'; // SyntaxError: Identifier 'redeclareConst' has already been declared

redeclareVar = 'I am mutated var'; // No error
console.log(redeclareVar);
redeclareLet = 'I am mutated let'; // TypeError: Assignment to constant variable.
redeclareConst = 'I am mutated const'; // TypeError: Assignment to constant variable.
