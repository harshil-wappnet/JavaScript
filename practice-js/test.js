// let para1 = document.createElement("p");
// para1.innerHTML = "This is a paragraph.";
// document.body.appendChild(para1);
// let button1 = document.createElement("button");
// button1.textContent = "Click me!";
// document.body.appendChild(button1);

// button1.addEventListener("click", () => {
//     para1.innerHTML = "You clicked the button!";
// })

// const div1 = document.createElement("div");
// div1.style.width = "200px";
// div1.style.height = "100px";
// div1.style.border = "1px solid black";
// div1.style.backgroundColor = "Red";
// document.body.appendChild(div1);

// const button1 = document.createElement("button");
// button1.textContent = "Click Me";
// document.body.append(button1);

// let flag = true;
// button1.addEventListener("click", () => {
//     if (flag == true) {
//         div1.style.display = "none";
//         flag = false;
//     }
//     else {
//         div1.style.display = "block";
//         flag = true;
//     }
// })

// const para2 = document.createElement('p');
// para2.innerHTML = "Hello, this font size will change";
// document.body.appendChild(para2);

// const button1 = document.createElement("button");
// button1.textContent = "Click Me";
// document.body.append(button1);

// button1.addEventListener("click", () => {
//     para2.style.fontSize = "30px";
//     para2.style.textDecoration = "line-through";
// });

// const div1 = document.createElement("div");
// div1.style.border = "1px solid";
// div1.style.width = "100px";
// div1.style.height = "100px";
// document.body.appendChild(div1);

// const button1 = document.createElement('button');
// button1.textContent = 'Add class';
// document.body.appendChild(button1);


// button1.addEventListener("click", () => {
//     if (button1.textContent === "Add class") {
//         div1.classList.add("test");
//         button1.textContent = "Remove class";
//     }
//     else if (button1.textContent === "Remove class") {
//         div1.classList.remove("test");
//         button1.textContent = "Add class";
//     }
// });

// const list1 = document.getElementById("myList");
// const myButton = document.getElementById("addItemButton");

// myButton.addEventListener("click", () => {
//     // Use prompt to get user input
//     const newItemText = prompt("Enter list text:");

//     // Check if the user entered text
//     if (newItemText !== null && newItemText !== "") {
//         // Create a new list item
//         const newItem = document.createElement("li");
//         newItem.textContent = newItemText;

//         // Append the new item to the list
//         list1.appendChild(newItem);

//         // Save the new item's text to localStorage
//         localStorage.setItem("Message", newItemText);
//     }
// });

// const img1 = document.createElement("img");
// img1.src = "C:/Users/Harshill/Desktop/Projects/JS/JavaScript/practice-js/Screenshot (3).png";
// const myButton = document.createElement("button");
// myButton.innerHTML = "Change image";
// document.body.appendChild(img1);
// // document.body.appendChild(hr);
// document.body.appendChild(myButton);
// myButton.addEventListener("click", () => {
//     img1.setAttribute("src", "C:/Users/Harshill/Desktop/Projects/JS/JavaScript/practice-js/Screenshot (7).png");
// })

// const myButton = document.createElement("button");
// myButton.innerHTML = "Add Task";
// document.body.appendChild(myButton);

// const Item = document.getElementById("myList");
// myButton.addEventListener("click", () => {
//     let task = prompt("Enter task heading:");
//     if (task !== null || task !== "") {
//         const newItem = document.createElement('li');
//         var status = document.createElement('button');
//         status.innerHTML = "Progress";
//         newItem.textContent = task;
//         newItem.appendChild(status);
//         Item.appendChild(newItem);
//         status.onclick = function () {
//             status.innerHTML = "Completed";
//         }
//     }
// })

// let xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//     console.log(this.responseText);
// }
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhttp.send();

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
// })

