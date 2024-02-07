// Chaining promises in JavaScript allows you to perform asynchronous operations sequentially and handle their results in a more organized and readable way

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function (result) {

    console.log(result); // 4
    return result * 2;

});

// we can also add many ".then" to a single promise. This is not chaining
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});

promise.then(function (result) {
    console.log(result); // 1
    return result * 2;
});

// we can return new promises also
new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function (result) {

    alert(result); // 1

    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) { // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {

    alert(result); // 4

});