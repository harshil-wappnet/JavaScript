// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// To create a function we can use a function declaration.
function showMessage() {
    alert('Hello everyone!');
}


// Constructor
const multiply = new Function("x", "y", "return x * y");


// All syntaxes do approximately the same thing, but there are some subtle behavior differences.
// Declaration
function multiply(x, y) {
    return x * y;
} // No need for semicolon here

// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
    return x * y;
};
// Expression; the function has its own name
const multiply = function funcName(x, y) {
    return x * y;
};

// Arrow function
const multiply = (x, y) => x * y;

// Method
const obj = {
    multiply(x, y) {
        return x * y;
    },
};

// he function name can be used only within the function's body. Attempting to use it outside the function's body results in an error (or gets another value, if the same name is declared elsewhere).
const y = function x() { };
console.log(x); // ReferenceError: x is not defined

// A function defined by a function expression or by a function declaration inherits the current scope. That is, the function forms a closure. 
// On the other hand, a function defined by a Function constructor does not inherit any scope other than the global scope (which all functions inherit).
// p is a global variable
globalThis.p = 5;
function myFunc() {
    // p is a local variable
    const p = 9;

    function decl() {
        console.log(p);
    }
    const expr = function () {
        console.log(p);
    };
    const cons = new Function("\tconsole.log(p);");

    decl();
    expr();
    cons();
}
myFunc();

// Logs:
// 9 (for 'decl' by function declaration (current scope))
// 9 (for 'expr' by function expression (current scope))
// 5 (for 'cons' by Function constructor (global scope))


// Syntax for arrow functions
// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }