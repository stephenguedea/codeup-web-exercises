console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// Favorite Color
var userfavColor = prompt("What is your favorite color?");
alert("Wow! My favorite color is " + userfavColor + " too!");


// Renting movies exercise
/* confirm("Would you like to rent some movies?");

var movie1 = prompt("What movie would you like to rent?");
var movie1Days = prompt("How many days would you like to rent " + movie1 + "?");
confirm("Renting " + movie1 + " for " + movie1Days + " days?");

confirm("Would you like to rent another?");

var movie2 = prompt("What movie would you like to rent?");
var movie2Days = prompt("How many days would you like to rent " + movie2 + "?");
confirm("Renting " + movie2 + " for " + movie2Days + " days?");

confirm("Would you like to rent another?");

var movie3 = prompt("What movie would you like to rent?");
var movie3Days = prompt("How many days would you like to rent " + movie3 + "?");
confirm("Renting " + movie3 + " for " + movie3Days + " days?");

const cost = 3;

var totalCost = (movie1Days * cost) + (movie2Days * cost) + (movie3Days * 3);

alert("Your total cost is $" + totalCost.toFixed(2) + "." +"\nEnjoy!");


// Week's Payment
// var google_pay = 400, amazon_pay = 380, fb_pay = 350;
// var google_hours_work = 6, amazon_hours_work = 4, fb_hours_work = 10;
/*alert("Let's figure out for pay for this week!");

var google_pay = prompt("What is your hourly rate at Google?" + "\n(Enter a number, no symbols)");
var google_hours_work = prompt("How many hours did you work at Google?");

var amazon_pay = prompt("What is your hourly rate at Amazon?" + "\n(Enter a number, no symbols)");
var amazon_hours_work = prompt("How many hours did you work at Amazon?");

var fb_pay = prompt("What is your hourly rate at Facebook?" + "\n(Enter a number, no symbols)");
var fb_hours_work = prompt("How many hours did you work at Facebook?");
// Week's Pay
var total_payment = (google_pay * google_hours_work) + (amazon_pay * amazon_hours_work) + (fb_pay * fb_hours_work);
alert("Your pay for this week is $" + total_payment + ".");
*/

// Student Enrollment
/* alert("Let's enroll you in a class!");
var course = prompt("Which class would you like to enroll?");
confirm("Enrolling for " + course + "?");
var answer = prompt("Is the class full? (Yes/No)");
if (answer === 'Yes' || answer === 'yes') {
    alert('This class is full. Cannot enroll in this class, try another course.')
} else
    alert('You can enroll for this class!');

*/
// Exclusive Offer
alert("Exclusive Offer!");
var numOfItemsForDiscount = prompt("How many items must be bought for discount?");
var numOfItems = prompt("How many items were bought?");
var offer = confirm("Confirm offer has not expired");
var isPremiumMember = confirm("Customer is a Premium Member");

var discountApplied = (isPremiumMember && offer) || (numOfItems > numOfItemsForDiscount && offer);
//OR offer && (isPremiumMember || numOfItems > numOfItemsForDiscount)

alert("Product discount applied: " + discountApplied);
