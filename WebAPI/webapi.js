// API stands for Application Programming Interface
// A Browser API can extend the functionality of a web browser
// A Server API can extend the functionality of a web server


// geolocation API
const myElement = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        myElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    myElement.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

// Storing data in localStorage
localStorage.setItem('theme', 'dark');

// Retrieving data from localStorage
var theme = localStorage.getItem('theme');
console.log('Current theme:', theme);

// fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log('Weather:', data);
        // Display weather data on the webpage
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
    });