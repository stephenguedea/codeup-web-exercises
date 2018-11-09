var billAmount = prompt("What is the bill?");
// OR billAmount = prompt("What is the bill?");


var tip_Percentage = prompt("What is the tip percentage?");
tip = (billAmount * (tip_Percentage / 100));

if (isNaN(billAmount) === true) {
    alert("Please enter a valid number for the bill amount.");
}
else if (isNaN(tip_Percentage) === true) {
    alert("Please enter a valid number for the tip percentage.");
}
else if (billAmount <= -1) {
    alert("Please enter a valid number for the bill amount.");
}
else if (tip_Percentage <= -1) {
    alert("Please enter a valid number for the tip percentage.");
}
else {
    var totalAmount = Number(billAmount) + Number(tip);
// OR totalAmount = Number(billAmount) + Number(tip);
    alert("Tip $" + tip.toFixed(2));
    alert("Total $" + totalAmount.toFixed(2));
}




