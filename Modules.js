// A module is just a file. One script is one module. As simple as that.
// Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one
// export keyword labels variables and functions that should be accessible from outside the current module.
// import allows the import of functionality from other modules.

// Ways to export functions:
// export an array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
    constructor(name) {
        this.name = name;
    }
}

//  another way
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables

// ways to import functions or files:
import { sayHi, sayBye } from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

//  we can import everything as an object using
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');