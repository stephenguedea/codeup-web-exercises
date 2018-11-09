// ================================= OBJECTS BONUSES
// BONUS 1 (create a dog object):
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array



var dog = {
    breed: 'bulldog',
    weightInPounds: 19,
    age: 5,
    color: 'brown',
    sterilized: true,
    shotRecords:
        {
            date: 'December 20, 2017',
            typeOfShot: 'vaccination'
        },


    barks: function bark() {
        return console.log('Woof!');
    },
    getOlder: function getOlder() {
        return dog.age += 1;
    },
    fix: function fix () {
        if (dog.sterilized === false) {
            return dog.sterilized === true;
        }
    },
    // vaccinate: function vacinnate(shot) {
    //     return dog.shotRecords.push(
    //         {
    //             'shotRecords': shot,
    //         }
    //     );
    // }

};


console.log(dog);

// BONUS 2 (expanding on the books object exercise):
// Add a property "keywords" that contains an array of possible genres the book may be categorized by
// Add a boolean property "isAvailable" and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string "now"
// BONUS 3 (expanding on the books object exercise):
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//     Allow a user to delete a book or a group of books by title or author last name
// Allow a user to edit a book by index number in the books array
// ================================= MATH OBJECT BONUS
// Create an application that will calculate the volume of a building based on user input.
//     Account for multiple rooms and a user choice of measurement (between imperial or metric).