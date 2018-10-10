// var number = 1;
// while (number < 65536) {
//     number = number * 2;
//     console.log(number);
// }

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log('I have ' + allCones + ' to sell today!');

// do-while loop

do {
    // This expression will generate a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log('Customer ordered ' + cones + ' cones!');
    //
    // if (cones <= allCones) {
    //     allCones = allCones - cones;
    //     console.log('I now have ' + allCones + ' left.')
    // } else {
    //     console.log('Not enough for you. Next customer, please!');
    // }

    if (cones > allCones) {
        console.log('I can\'t sell ' + cones + ' all I have is ' + allCones);
    } else {
        allCones -= cones;
        console.log('I have sold ' + cones + ' cones.');
    }
} while (allCones > 0);
    console.log("I have sold all ice cream cones!");
