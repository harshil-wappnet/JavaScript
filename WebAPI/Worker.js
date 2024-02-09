// runs in the background, independently of other scripts, without affecting the performance of the page
// can't directly manipulate the DOM from inside a worker
// Inside worker.js

// Define an event listener for the 'message' event
self.addEventListener('message', ({ data }) => {
    if (data.action == "ocunt2Billion") {
        let count = 0;
        for (let i = 0; i < 2000000000; i++) {
            count++;
        }
        self.postMessage(result);
    }
});
