async function fetchapi() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const final_result = await data.json();
    console.log(final_result)
}

async function printData() {
    console.log("before");
    await fetchapi();
    console.log("after");
}

printData();