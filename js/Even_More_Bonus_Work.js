// ================================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string
// "It's Justin!" if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".

function makeJustinMessage(string) {
    if (string === "Justin" || string === 'justin') {
        return "It's Justin!";
    }
    else if (string === " " || isNaN(string) === false) {
        console.log("INVALID INPUT");
    } else {
        return "It's not Justin";
    }
}
console.log(makeJustinMessage("justin"));
//
//     __
// Write a function that returns a string describing the action to be taken for a given street light color input.
// For example, if the function input is the string "red", a message like "STOP!" could be returned from the function.
// Input should not be case sensitive.

function streetLights(input) {
    if (input.toLowerCase() === 'green') {
        console.log("Proceed with caution");
    } else if (input.toLowerCase() === 'yellow') {
        console.log("No cop, don't stop!");
    } else if (input.toLowerCase() === 'red') {
        console.log("STOP!");
    }
    return input;
}
console.log(streetLights('Yellow'));

//     __
// Create a function that simply returns an input as an output.
// If no input is passed to the function when it is called, return the string "no input provided."
// __

function userOutput(input) {
    if (input) {
        return input;
    } else {
        if (input === "" || input == null)
        return "No input provided";
    }
}

console.log(userOutput(" hi"));
// Create a function that returns a unique message string for a given digit input.
// If the input is not a single digit, return the string "too many digits".
// If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.

function message(number) {
    if (number  >= 10) {
        return 'too many digits';
    } else if (isNaN(number) === true) {
        return 'invalid input';
    } else {
        return 'You number is ' + number;
    }
}
console.log(message('1'));
//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')

// function dayOfTheWeek(input) {
//     var day = prompt("What is your favorite day?");
//     if (day === 'Monday' || day === 'monday' || day === 'Mon' || day === 'mon') {
//         return 'Eww! Why?';
//     } else if (day === 'Tuesday' || day === 'tuesday' || day === 'Tues' || day === 'tues') {
//         return 'That\'s better than Monday!';
//     } else if (day === 'Wednesday' || day === 'wednesday' || day === 'Wed' || day === 'wed') {
//         return 'Hump Day!';
//     } else if (day === 'Thursday' || day === 'Thursday' || day === 'Thurs' || day === 'thurs') {
//         return 'Thursday is Friday Eve!';
//     } else if (day === 'Friday' || day === 'friday' || day === 'Fri' || day === 'fri') {
//         return 'Hello Friday!';
//     } else if (day === 'Saturday' || day === 'saturday' || day === 'Sat' || day === 'sat') {
//         return 'Saturday, the only day better than Friday!';
//     } else if (day === 'Sunday' || day === 'sunday' || day === 'Sun' || day === 'sun') {
//         return 'Nobody talk to me, it\'s Sunday!';
//     } else {
//         return 'C\'mon really?';
//     }
// }
// console.log(dayOfTheWeek());

// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator

function pickANumber(input) {
    var number = prompt("Enter a number: ");
    if (isNaN(number) === true) {
        alert("Enter a real number!");
    } else {
        return alert("You entered " + number);
    }
}
console.log(pickANumber());
// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __

function seasonsOfTheYear(input) {
    var winter = "January", "December", "February";
    var spring = "March", "April", "May", "June";
    var summer = "July", "August", "September";
    var fall = "October", "November";
    var season = prompt("Enter a season: ");
    if (season === winter) {
        return "Winter is here!";
    } else if  (season === spring) {
        return "Spring break forever!";
    } else if (season === summer) {
        return "Summer vacay!";
    } else if (season === fall) {
        return "Spooky and Gobble Season!";
    } else {
        return "Pick a month!";
    }

}
console.log(seasonsOfTheYear());

// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units