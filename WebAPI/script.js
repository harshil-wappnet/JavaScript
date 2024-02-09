const worker = new Worker("Worker.js");

worker.addEventListener('message', ({ data }) => {
    if (data.action == "countTo2Billion") {
        console.log("We're done without blocking the main thread");
    }
})

worker.postMessage({ type: 'cmd', action: 'countTo2Billion' })
alert("Something on Main thread");