// var billAmount = prompt("What is the bill?");
// // OR billAmount = prompt("What is the bill?");
//
//
// var tip_Percentage = prompt("What is the tip percentage?");
// tip = (billAmount * (tip_Percentage / 100));
//
// if (isNaN(billAmount) === true) {
//     alert("Please enter a valid number for the bill amount.");
// }
// else if (isNaN(tip_Percentage) === true) {
//     alert("Please enter a valid number for the tip percentage.");
// }
// else if (billAmount <= -1) {
//     alert("Please enter a valid number for the bill amount.");
// }
// else if (tip_Percentage <= -1) {
//     alert("Please enter a valid number for the tip percentage.");
// }
// else {
//     var totalAmount = Number(billAmount) + Number(tip);
// // OR totalAmount = Number(billAmount) + Number(tip);
//     alert("Tip $" + tip.toFixed(2));
//     alert("Total $" + totalAmount.toFixed(2));
// }



var total ;
//Calculate Tip
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}
//Calculate Total Amount
function calculateTotalAmount() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    // validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    // Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }


    //Calculate total bill
    var totalBillAmount =  (parseFloat(billAmt) + parseFloat(total*numOfPeople));
    //round to two decimal places
    //round to two decimal places
    totalBillAmount = Math.round(totalBillAmount * 100) / 100;
    //next line allows us to always have two digits after decimal point
    totalBillAmount = totalBillAmount.toFixed(2);
    document.getElementById("totalAmount").style.display = "block";
    document.getElementById("totalAmt").innerHTML = totalBillAmount;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("totalAmount").style.display = "none";


//click to call function
document.getElementById("calculate").onclick = function() {
    console.log(calculateTip());
    console.log(calculateTotalAmount());
};