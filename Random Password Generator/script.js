
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbol = "!@#$%^&*()_{}|:></?,."
    return symbol[Math.floor(Math.random() * symbol.length)];
}
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

document.querySelector("#Generate").addEventListener("click", function () {

    const length = document.querySelector("#passwordLength").value;

    const hasLower = document.querySelector("#Lowercase").checked;
    const hasUpper = document.querySelector("#Uppercase").checked;
    const hasNumber = document.querySelector("#Numbers").checked;
    const hasSymbol = document.querySelector("#Symbols").checked;

    document.querySelector("#passwordResult").innerText = GeneratePassword(
        length,
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol
    );

})

function GeneratePassword(length, lower, upper, number, symbol) {

    let generatedPassword = "";
    let typesCount = lower + upper + symbol + number;
    let typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        }
        );

    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;

}

let button = document.getElementById("clipboardBtn");
// add click event listner on button
button.addEventListener("click", (e) => {
    e.preventDefault();
    // execute command for copy text by selecting textarea text with id
    document.execCommand(
        "copy",
        false,
        document.getElementById("passwordResult").select()
    );
});


