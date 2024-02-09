// you can access the promt in browser

// setitem => store the key value pair
// getitem => get the value by key
// removeitem =>remove the key with its value
// clear => delete everything
// key(index) => get the key on a given positon

let key = prompt("Enter a key");
let value = prompt("Enter a Value");

// set the key and value pair in local storage
localStorage.setItem(key, value);

// get the item of keys
console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

// remove the key means => doesn't allow to store the key and value
if (key == "red" || key == "blue") {
    localStorage.removeItem(key);
}

//  if key is 0 then clear the local storage
if (key == 0) {
    localStorage.clear()
}

// // key(index) and value(value at index)
console.log(localStorage.key(0))

// //length of local storage
console.log(localStorage.length)

// important

// 1 . Both key and value must be string
// 2 . we can use the two json methods to store objects in local storage
//     JSON.strigify(object) => converts objects to json strings
//     JSON.parse(string) => converts string to objects(must be a valid json)

// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
// };

// // Store object in localStorage
// localStorage.setItem('user', JSON.stringify(user));

// // Retrieve object from localStorage
// const storedUserJSON = localStorage.getItem('user');
// const storedUser = JSON.parse(storedUserJSON);

// console.log(storedUser);