

function isValidPassword(e) {
    e.preventDefault();
    const passwordExp = /^[A-Za-z0-9_@]{3,20}$/;
    let passcode = document.getElementById("passcode").value;
    if (!passwordExp.test(passcode)) {
        console.log("Doesn't match  the pattern");
    }
    else if (passcode == "" || passcode == null) {
        console.log("Cannot be null or empty");
    }
    else {
        console.log("Password is correct");
    }
}
