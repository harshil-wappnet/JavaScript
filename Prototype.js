// The prototype object serves as a template for the properties and methods that a new object will inherit.
/* Objects in JavaScript form a chain of prototypes, known as the prototype chain. 
When you access a property or method on an object, JavaScript first checks if the object has that property or method. 
If it doesn't find it, it looks up the prototype chain until it finds the property or method or reaches the end of the chain (the Object.prototype).*/
// Parent object
let parent = {
    hobby: "Reading",
    greet() {
        console.log("Hello, I love " + this.hobby);
    }
};

// Child object
let child = Object.create(parent);
child.name = "Alice";

// Accessing properties and methods
console.log(child.name);        // Output: Alice
console.log(child.hobby);       // Output: Reading (inherited from parent)
child.greet();                  // Output: Hello, I love Reading (inherited from parent)

let a = {
    name2: "Ved",
    language: "JavaScript",
    run: () => {
        console.log("self run");
    },
};
console.log(a);

let p = {
    run: () => {
        console.log("run");
    },
};

a.__proto__ = p;

p.__proto__ = {
    name: "Jackie",
};

a.run();
console.log(a.name);

// Example - 2

let object1 = {
    name: "Ved",
    city: "Ahmedabad",
    getIntro: function () {
        console.log(this.name + "From" + this.city);
    },
};

let object2 = {
    name: "Kalp",
};

object2.__proto__ = object1;

console.log(object2.city);
object2.getIntro();
console.log(object2.name);

// Example - 3

Function.prototype.mybind = function () {
    console.log("hey buddy");
};

function f1() {
    console.log("inside the f1");
}

f1.__proto__.mybind();
f1();

console.log(f1.mybind());
