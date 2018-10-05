"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function addOneHundred(userNumberEntry) {
    return Number(userNumberEntry) + 100;

}

var userChoice = confirm("Would you like to enter a number?");

if (userChoice == true) {
    var userNumberEntry = prompt("Enter a number: ");
    if (userNumberEntry % 2 == 0) {
        alert("Your number is even!");
    } else {
        alert("Your number is odd!");
    }

    alert(userNumberEntry + " + " + 100 + " = " + addOneHundred(userNumberEntry));

    if (userNumberEntry > 0) {
        alert("Your number is positive!");
    } else {
        alert("Your number is negative!");
    }
}
else {
    alert("Okay, good-bye!");
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(input) {
    if (input === 'blue') {
        alert('Blue is the color of the sky.');
    }
    else if (input === 'red') {
        alert('Strawberries are red.');
    }
    else if (input === 'green') {
        alert('Money is green!');
    }
    else if (input === 'pink') {
        alert('On Wednesdays we wear pink!');
    }
    else if (input === 'black') {
        alert('The best color ever!');
    }
    else if (input === 'white') {
        alert("Be careful when you dare wear white pants!");
    }
    else {
        alert('What is ' + input + '???');
    }
    return input;
}

// console.log((analyzeColor('red')));
// console.log((analyzeColor('blue')));
// console.log((analyzeColor('black')));
// console.log((analyzeColor('pink')));
// console.log((analyzeColor('amber')));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//     switch (randomColor) {
//         case "blue":
//             console.log('Blue is the color of the sky');
//             break;
//         case 'red':
//             console.log('Red is your madmen!');
//             break;
//         case 'green':
//             console.log('Green is money!');
//             break;
//         case 'pink':
//             console.log('Wednesdays, wear pink!');
//             break;
//         case 'black':
//             console.log('Batman\'s favorite color');
//             break;
//         default:
//             console.log('What color is ' + randomColor + '?');
//             break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userEntry = prompt("Enter a color: ");
//
// alert(analyzeColor(userEntry));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("Enter your total: $");

function calculateTotal(luckyNumber, totalAmount) {
    var discountAmount;

    if (luckyNumber === 0) {
        discountAmount = totalAmount - 0;
    } else if (luckyNumber === 1) {
        discountAmount = totalAmount * .10;
    } else if (luckyNumber === 2) {
        discountAmount= totalAmount * .25;
    } else if (luckyNumber === 3) {
        discountAmount = totalAmount * .35;
    } else if (luckyNumber === 4) {
        discountAmount = totalAmount * .50;
    } else if (luckyNumber === 5) {
        discountAmount = totalAmount - totalAmount;
    } else {
        alert("Number is invalid!");
    }

    alert("Your lucky number is: " + luckyNumber);
    alert('Your total was: $' + totalAmount);
    alert("Your total is now: $" + discountAmount);
    return discountAmount;
}
// console.log(calculateTotal(8, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


calculateTotal(luckyNumber, totalAmount);
