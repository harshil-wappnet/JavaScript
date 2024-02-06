// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// Property values are accessible using the dot notation:
// get property values of the object:
console.log(user.name); // John
console.log(user.age); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;

// To remove a property, we can use the delete operator:
delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user3 = {
    name: "John",
    age: 30,
    "likes birds": true, // multiword property name must be quoted
};

// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true
console.log(user3["likes birds"]);

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
// The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it.

let user4 = { name: "John" };
let admin = user4; // copy the reference
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

// We can create a new object and replicate the structure of the existing one
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

let user = {
    name: "John",
    age: 30
};

let clone2 = Object.assign({}, user);

alert(clone2.name); // John
alert(clone2.age); // 30

// Nested cloning: Use structuredClone()
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone1 = structuredClone(user);

alert(user.sizes === clone1.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone1.sizes.width); // 50, not related

// A function that is a property of an object is called its method.
let user = {
    name: "John",
    age: 30,
    // method
    sayHi() {
        // "this" is the "current object"
        alert(this.name);
    }

};

user.sayHi(); // John

// Object.keys() -- Returns an array of a given object's own property names.
const key = Object.keys(user1);
console.log(key); // [ 'firstName', 'lastName', 'age', 'eyeColor', 'gender' ]

// Object.values() --  Returns an array of a given object's own property values.
const values = Object.values(user1);
console.log(values); // [ 'John', 'Doe', 21, 'blue', 'Male' ]

// Object.entries(): Returns an array of a given object's own [key, value] pairs
const entrys = Object.entries(user1);
console.log(entrys);
// [[ 'firstName', 'John' ],[ 'lastName', 'Doe' ],[ 'age', 21 ],[ 'eyeColor', 'blue' ],[ 'gender', 'Male' ]]
