// 1. return: The return statement ends function execution and specifies a value to be returned to the function caller.
// function getRectArea(width, height) {
//     if (width > 0 && height > 0) {
//         return width * height;
//     }
//     return 0; //  Return zero for negative values or non-numeric input.
//      return; undefined if no values  provided.
// }

// console.log(getRectArea(3, 4));
//  Expected output: 12

// console.log(getRectArea(-3, 4));
// Expected output: 0

// function counter() {
//     // Infinite loop
//     for (let count = 1; ; count++) {
//         console.log(`${count}A`); // Until 5
//         if (count === 5) {
//             return;
//         }
//         console.log(`${count}B`); // Until 4
//     }
//     console.log(`${count}C`); // Never appears because count is defined out of  the scope of the loop
// }

// counter();

// 2. break: The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement.
// let i = 0;

// while (i < 6) {
//     if (i === 3) {
//         break;
//     }
//     i = i + 1;
// }

// console.log(i);
// Expected output: 3

// function testBreak(x) {
//     let i = 0;

//     while (i < 6) {
//         if (i === 3) {
//             break;
//         }
//         i += 1;
//     }

//     return i * x;
// }
// const value = testBreak(3);
// console.log(value);

// 3. continue: The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
/* In a while or do...while loop, it jumps back to the condition.
In a for loop, it jumps to the update expression.
In a for...in, for...of, or for await...of loop, it jumps to the next iteration. */

// let i = 0;
// let n = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
//     console.log(i);
//     if (i === 3) {
//         continue;
//     }

//     n += i;
//     console.log(n);
// }

// 4. throw: The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw new Error("Parameter is required");
//     }
// }

// try {
//     getRectArea(3, 'A');
// } catch (e) {
//     console.error(e);
//     // Expected output: Error: Parameter is not a number!
// }

// 5. if...else:  executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
// function testNum(a) {
//     let result;
//     if (a > 0) {
//         result = 'positive';
//     } else {
//         result = 'NOT positive';
//     }
//     return result;
// }

// console.log(testNum(-5));
// Expected output: "NOT positive"

//Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the Boolean object. Any value that is not false, undefined, null, 0, -0, NaN, or the empty string (""), and any object, including a Boolean object whose value is false, is considered truthy when used as the condition.
// For example:
// const b = new Boolean(true);
// console.log(typeof b);
// console.log(b);
// if (b) {
//     console.log("b is truthy"); // "b is truthy"
// }

// 6. switch: The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered.
// The default clause of a switch statement will be jumped to if no case matches the expression's value.

// const expr = 'Oranges';
// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound.');
//         // Expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log(`Sorry, we are out of ${expr}.`);
// }

// const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }

// This example will output the error "Uncaught SyntaxError: Identifier 'message' has already been declared", because the first const message = 'hello'; conflicts with the second const message = 'hi'; declaration, even when they're within their own separate case clauses.

// To fix this, whenever you need to use let or const declarations in a case clause, wrap it in a block.

// const action = "say_hello";
// switch (action) {
//     case "say_hello": {
//         const message = "hello";
//         console.log(message);
//         break;
//     }
//     case "say_hi": {
//         const message = "hi";
//         console.log(message);
//         break;
//     }
//     default: {
//         console.log("Empty action received.");
//     }
// }

// 7. try...catch: The try...catch statement is comprised of a try block and either a catch block, a finally block, or both.
// The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed.
// The code in the finally block will always be executed before control flow exits the entire construct.

// try {
//     tryStatements
// } catch (exceptionVar) {
//     catchStatements
// } finally {
//     finallyStatements
// }