// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Syntax for a promise object is:

// let promise_name = new Promise((resolve, reject) => {
// statements
// });

// When the callback obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:
// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object. 

// example of a successful job completion, a “fulfilled promise”
let promise1 = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .then and .catch
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise3.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

// .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction) is exactly the same
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

// The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.
// The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)); // <-- .then shows "value"


let promise4 = new Promise(function (resolve, reject) {
    resolve("Called first");

    setTimeout(() => resolve("Called second"), 1000); // ignored
});

promise4.then(data => console.log(data));
promise4.then(result => console.log(result));