

//line generates a random number between 1 and 50
var skip = parseFloat(prompt('Enter a number 1-50'));

console.log('Your number is: ' + skip);
for (var i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        //skip the even numbers.
        continue;
    }
       else if (i === 50) {
            break;
        }

       else if (skip === i) {
            console.log('Yikes! Skipping number: ' + skip);
        } else {
            console.log('Here is an odd number: ' + i);
        }




}