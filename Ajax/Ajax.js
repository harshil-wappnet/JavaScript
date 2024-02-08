// The "String fields can only be joined to other string fields" error occurs because there is a data type mismatch in the "CustomerID" columns between the two datasets. One dataset represents "CustomerID" as a string, while the other as an integer. To resolve the issue:
// Identify the data types of the "CustomerID" columns in both datasets.
// Convert one of the "CustomerID" columns to match the data type of the other dataset (either string or integer).
// After conversion, join the datasets using the "CustomerID" column.
// This ensures data type consistency and allows for a successful join without encountering the mentioned error.
// Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.

// let xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//     document.getElementById("demo").innerHTML = this.responseText;
// }
// xhttp.open("GET", "Ajax.txt");
// xhttp.send();

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // console.log('File has been loaded');
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
// };
// xhttp.open("GET", "Ajax.txt");
// xhttp.send();

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 0) {
//         // console.log("Request not initiated");
//     }
//     if (this.readyState == 1) {
//         console.log("Connection established");
//     }
//     if (this.readyState == 2) {
//         console.log("request recieved");
//     }
//     if (this.readyState == 3) {
//         console.log("processing request");
//     }
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = this.responseText;
//         console.log("response ready");
//     }
// };
// let data = "New data added from ajax.js";
// xhttp.open("POST", "Ajax.txt");
// xhttp.setRequestHeader("Content-Type", "text/plain"); // Set the Content-Type header
// xhttp.send(data);

// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = this.responseText;
//         console.log("response ready");
//     }
// };

// const data = "New data added from ajax.js";

// xhttp.open("POST", "Ajax.txt");
// xhttp.setRequestHeader("Content-Type", "text/plain"); // Set the Content-Type header
// xhttp.send(data); // Send the data in the POST request

// let url = "Ajax.txt";
// const method1 = "GET";
// const method2 = "POST";
// let xhttp = new XMLHttpRequest();

// let data = "New data added from ajax.js";
// function showData() {
//     let xhttp1 = new XMLHttpRequest();
//     xhttp1.onreadystatechange = function () {
//         if (this.status >= 200 && this.status <= 300) {
//             console.log("message added successfully");
//         }
//     }
//     xhttp1.open(method2, url);
//     xhttp1.send(data);
// }
// xhttp.open(method2, url);
// xhttp.send(toString(data));
// console.log(data);
// // Specify what happens when the data is received:
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log("message" + ": " + this.responseText);
//     }
// }

// xhttp.open(method1, url);
// xhttp.send();

fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
    // console.log(result)
    return result.json();
}).then((data) => {
    console.log(data);
})