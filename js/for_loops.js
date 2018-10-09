
function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + (number * i));
    }
}

showMultiplicationTable(7);



for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
    console.log(randomNumber + ' is odd');
    }
}


    for (var x = 1; x < 10; x++) {
        var numString = '';
        for (var y = 1; y <= x; y++) {
        numString += x;
        }
        console.log(numString);
    }


for (var x = 100; x > 0; x -= 5) {
    console.log(x);
}

// for (var a = 0; a <= 10; ++a) {
//     console.log('a is ' + a);
//     for (var b = 0; b <= 1; ++b) {
//         console.log('b is ' + b);
//     }
//     console.log('after inner loop');
// } console.log('after output loop');