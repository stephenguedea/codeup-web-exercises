// Counting the Number of Characters
/*var userEntry = prompt("What is the input string?");

if (userEntry === "") {
    alert("Must have a valid entry.");

} else {

    alert(userEntry + " has " + userEntry.length + " characters.");
}
*/
// Mad Lib
/* var userNoun = prompt("Enter a noun: ");
var userVerb = prompt("Enter a verb: ");
var userAdjective = prompt("Enter an adjective: ");
var userAdverb = prompt("Enter an adverb");

alert("Do you " + userVerb + " to your " + userAdjective + " " + userNoun + " " + userAdverb + " ? Wow!" );
*/
// Simple Math
/*var number1 = prompt("What is the first number?");
var number2 = prompt("What is the second number?");

alert(number1 + " + " + number2 + " = " + (Number(number1) + Number(number2))) + "\n" +
(number1 + " - " + number2 + " = " + (Number(number1) - Number(number2))) + "\n" +
(number1 + " * " + number2 + " = " + (Number(number1) * Number(number2))) + "\n" +
(number1 + " / " + number2 + " = " + (Number(number1) / Number(number2)));

*/


/*function countLetters(input) {
    var output = 0;
    var strippedWhitespace = input.trim();
    output = strippedWhitespace.length;
    return output;
}

console.log(countLetters('  Xanadu  ')); //6
*/

function hasLetterA(strInput) {
    var output;
    // search strInput for letter 'a'
    output = strInput.toLowerCase().indexOf('a') !== -1;
    // if letter 'a' present, make true, otherwise make false
    return output;
}
console.log(hasLetterA('stephen RaY '));

/*function name(input) {
    var output = input;

    return output;
}

console.log(name('Stephen'));
*/