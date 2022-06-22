console.log("Namaste TypeScrit");
function add(n1, n2, showPhrase, phrase) {
    if (showPhrase) {
        var result = n1 + n2;
        console.log(phrase + result);
    }
}
var printResult = true;
var resultPhrase = "The Result : ";
add(5, 12, printResult, resultPhrase);
