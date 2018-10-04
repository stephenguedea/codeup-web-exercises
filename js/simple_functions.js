"use strict";
// ================ SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

function returnTwo(number) {
    number = 2;
    return number;
}
console.log(returnTwo());
// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

function returnName(name) {
    name = "Stephen";
    return name;
}
console.log(returnName());
// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

function addThree(userNumber) {
    var numberResult = userNumber + 3;
    return numberResult;
}
console.log(addThree(5));
// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

function sayString(userInput) {
    return userInput;
}
console.log(sayString("Hello there, how are you?"));
// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
function sayHowdy(strInput) {
    return "Howdy!";

}
console.log(sayHowdy());

// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.
//function identity(input) {
//    return input;
//}
//console.log(identity('returning input'));
// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.
function getRandomNumber(min, max) {

    var random;

    random = Math.floor((Math.random() * max) + min);
    return random;
}
console.log(getRandomNumber(1, 10));
// Write a function called `first(input)` that returns the first character in the provided string.
function first(input) {
    return input.charAt(0);

}
console.log(first('timmy'));
// Write a function called `last(input)` that returns the last character of a string
function last(input) {
    return input.slice(-1);
}
console.log(last('abcdefghijklmnopqrstuvwxyz'));
// Write a function called `rest(input)` that returns everything but the first character of a string.
function rest(input) {
    return input.substring(1);
}
console.log(rest('BBob'));
// Write a function called `reverse(input)` that takes a string and returns it reversed.


// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
function isNumeric(input) {
    var output;
    output = isNaN(input) === false;
    return output;
}

// OR JUST !isNaN(input)

console.log(isNumeric('22'));

// Write a function called `count(input)` that takes in a string and returns the number of characters.
function count(input) {
    return input.length;
}
console.log(count('Stephen Ray'));

// Write a function called `add(a, b)` that returns the sum of a and b
function add(a, b) {
    var sum;
    sum = a + b;
    return sum;
}
//console.log(add(12, 10));

// Write a function called `subtract(a, b)` that return the difference between the two inputs.
function subtract(a, b) {
    return a - b;
}

console.log(subtract(75, 100));
// Write `multiply(a, b)` function that returns the product
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 5));
// Write a divide(numerator, denominator) function that returns a divided by b
function divide(numerator, denominator) {
    return numerator / denominator;
}
//console.log(divide(25, 5));
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
function remainder(number, divisor) {
    return number % divisor;
}
console.log(remainder(25, 4));
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
function square(a) {
    return a * a;
}
//console.log(square(6));
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
function sumOfSquares(a, b) {
    add;
    square;
    return add(square(a), square(b));
    return square(a);
    return square(b);

}
console.log(sumOfSquares(2, 5));


// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {

    return operator(a, b);
}
console.log(doMath(add, 4, 4));