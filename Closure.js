// If a variable is declared inside a code block {...}, it’s only visible inside that block.
{
    // do some job with local variables that should not be seen outside

    let message = "Hello"; // only visible in this block

    console.log(message); // Hello
}

console.log(message); // Error: message is not defined
// For if, for, while and so on, variables declared in {...} are also only visible inside:
if (true) {
    let phrase = "Hello!";

    alert(phrase); // Hello!
}

alert(phrase); // Error, no such variable!