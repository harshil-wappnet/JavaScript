// async function fetchapi() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const final_result = await data.json();
//     console.log(final_result)
// }

// async function printData() {
//     console.log("before");
//     await fetchapi();
//     console.log("after");
// }

// printData();

// let num = 1;
// console.log(num);
// num = ++num;
// console.log(num++);
// console.log(num);

// function sayHi() {
//     alert("Hello");
// }

// // global functions are methods of the global object:
// window.sayHi();
// alert(window.innerHeight); // inner window height

// Change the background color to red
// setTimeout(() => {
//     document.querySelector(".color-1").style.background = "radial-gradient(circle, violet, indigo)";
//     setTimeout(() => {
//         document.querySelector(".color-2").style.background = "radial-gradient(circle, indigo, blue)";
//         setTimeout(() => {
//             document.querySelector(".color-3").style.background = "radial-gradient(circle, blue, green)";
//             setTimeout(() => {
//                 document.querySelector(".color-4").style.background = "radial-gradient(circle, green, yellow)";
//                 setTimeout(() => {
//                     document.querySelector(".color-5").style.background = "radial-gradient(circle, yellow, orange)";
//                     setTimeout(() => {
//                         document.querySelector(".color-6").style.background = "radial-gradient(circle, orange, red)";
//                         setTimeout(() => {
//                             document.querySelector(".color-7").style.background = "red"
//                         }, 500);
//                     }, 500);
//                 }, 500);
//             }, 500);
//         }, 500);
//     }, 500);
// }, 500);

// console.log(window.navigator.userAgent);
// try {
// Code that may throw an error
// let someUndefinedVariable = 5;
// var result = someUndefinedVariable + 5; // This will throw a ReferenceError
// console.log(result); // This line will not be executed if an error occurs
// } catch (error) {
// Code to handle the error
// console.error("An error occurred:", error.message);
// } finally {
// Code that will always be executed, whether an error occurred or not
// console.log("This will always be executed");
// }


// var userAgentInfo = navigator.userAgent;
// var platform = navigator.platform;

// console.log("User Agent:", userAgentInfo);
// console.log("Platform:", platform);


// alert(location.href); // shows current URL
// if (confirm("Go to Wikipedia?")) {
//     location.href = "https://google.com"; // redirect the browser to another URL
// }

// if ('ontouchstart' in window || navigator.maxTouchPoints) {
//     console.log('Touch is supported');
// } else {
//     console.log('Touch is not supported');
// }

// console.log(document.querySelector(".color-3").offsetWidth);
const str = 'hello';
// const charArray = Array.from(str);

// console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']
alert(Array.from(str).filter); // function

