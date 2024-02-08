// JSON syntax is derived from JavaScript object notation syntax:

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// In JSON, string values must be written with double quotes:

// JSON
// {"name":"John"}

// Javascript
// {name:"John"}

// Strings in JSON must be written in double quotes.
// {"name":"John"}

// Numbers in JSON must be an integer or a floating point.
// {"age":30}

// Values in JSON can be objects.
// {
//     "employee":{"name":"John", "age":30, "city":"New York"}
//     }

// Values in JSON can be arrays.
// {
//     "employees":["John", "Anna", "Peter"]
//     }

// Values in JSON can be true/false.
// {"sale":true}

// Values in JSON can be null
// {"middlename":null}

// JSON.parse(): data becomes a JavaScript object
// '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// Array as JSON
// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(text);

//Parsing Dates
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);

// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// Parsing Functions
// const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");

// JavaScript object into a string with JSON.stringify()
// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);

// Storing Data
// Storing data:
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// Retrieving data:
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;

// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
// const obj = {name: "John", age: function () {return 30;}, city: "New York"};
// const myJSON = JSON.stringify(obj);
// OUTPUT: {"name":"John","city":"New York"}

// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;