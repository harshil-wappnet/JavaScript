// Async: a function always returns a promise. Other values are wrapped in a resolved promise automatically
async function f() {
    return 1;
}
f().then(console.log); // 1

// Await: works only inside async functions
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();

// Fetch apis using async-await
async function fetchapi() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const final_result = await data.json();
    console.log(final_result)
}

async function printData() {
    console.log("hjgjff");
    await fetchapi();
}

printData();