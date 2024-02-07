// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function fetchData(callback) {
    // Simulate fetching data from an API after 2 seconds
    setTimeout(function () {
        const data = 'Some data fetched from the server';
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Processing data:', data);
}

fetchData(processData); // Output after 2 seconds: Processing data: Some data fetched from the server

// Event Handling
document.getElementById('myButton').addEventListener('click', function () {
    console.log('Button clicked!');
});

// Pyramid of Doom or Callback Hell
// As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of ... that may include more loops, conditional statements and so on.

loadScript('1.js', function (error, script) {

    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', function (error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...
                loadScript('3.js', function (error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        // ...continue after all scripts are loaded (*)
                    }
                });

            }
        });
    }
});