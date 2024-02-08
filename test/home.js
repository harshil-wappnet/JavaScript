let myButton = document.getElementById("myBtn");
let inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.id = "userInput";
inputField.value = "";
var flag = false;
function showInput() {
    myButton.onclick = function () {
        if (!flag || myButton.innerText == "show") {
            myButton.innerHTML = "Clicked";
            document.body.append(inputField);
        }
        if (myButton.innerText == "Clicked") {
            myButton.onclick = function () {
                alert('You clicked on the button and entered: ' + inputField.value);
                // inputField.hidden = true;
            }
        }
    }
    inputField.addEventListener("blur", function () {
        alert('You clicked on the button and entered: ' + inputField.value);
    })
}
showInput();


// const arr = [1, 1, 1, 1];

// function maxElement(arr) {
//     let max = -Infinity;
//     var min = Infinity;
//     for (let i in arr) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log(min);
//     console.log(max);
// }

// maxElement(arr);