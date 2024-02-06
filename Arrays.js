// Creating an array
let fruits = ['apple', 'banana', 'orange'];
let arr = [];

// mix of values
let arr1 = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

// Accessing array elements
console.log(fruits[0]); // Output: 'apple'

// Array length
console.log(fruits.length); // Output: 3

// Adding elements to an array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Removing elements from an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Accessing array elements using a loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array methods

// map()
// The map() method creates a new array with the results of calling a provided function on every element in the array.
let numbers = [1, 2, 3, 4];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

// filter()
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce()
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
let sum = numbers.reduce((acc, num) => acc + num, 5);
console.log(sum); // Output: 10

// find()
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
let firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// some()
// The some() method tests whether at least one element in the array satisfies the provided testing function.
let anyEven = numbers.some(num => num % 2 === 0);
console.log(anyEven); // Output: true

// sort()
// The sort() method sorts the elements of an array in place and returns the array.
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4]

// reverse()
// The reverse() method reverses the elements of an array in place.
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [4, 3, 2, 1]

// slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object.
let subset = fruits.slice(1, 3);
console.log(subset); // Output: ['banana', 'orange']

// splice()
// The splice() method changes the content of an array by removing, replacing, or adding elements.
// arr.splice(start[, deleteCount, elem1, ..., elemN])
fruits.splice(1, 1, 'mango');
console.log(fruits); // Output: ['apple', 'mango', 'orange']

// concat()
// The concat() method is used to merge two or more arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(fruits.indexOf('mango')); // Output: 1

// lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
fruits.push('mango');
console.log(fruits.lastIndexOf('mango')); // Output: 3  

// The arr.forEach method allows to run a function for every element of the array.
// arr.forEach(function(item, index, array) {
//     // ... do something with item
// });