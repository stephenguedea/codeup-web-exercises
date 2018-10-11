(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //  var person = {
    //      firstName: 'Stephen',
    //      lastName: 'Guedea',
    //      sayHello: function () {
    //          console.log('Hello from ' + person.firstName + " " + person.lastName + "!");
    //      }
    // };
     // console.log(person.firstName);
     // console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // if shopper amount >= 200, amount = amount * .12;

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // // function to apply discount and update amount
    // function discount(amount) {
    //     if (amount >= 200) {
    //         amount = parseFloat(amount - (amount * .12).toFixed(2));
    //     }
    //     return amount;
    // }
    // // console.log(discount(150));
    //
    //
    // shoppers.forEach(function (shopper) {
    //     // shopper.amount = discount(amount);
    //     console.log("Shopper: " + shopper.name);
    //     console.log("Amount: " + shopper.amount);
    //     console.log('Discount Amount: ' + (shopper.amount - discount(shopper.amount)).toFixed(2));
    //     console.log("Total Amount: " + discount(shopper.amount));
    // });

    // discount(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: 'The Salmon of Doubt',
            author:
                {
                    firstName: 'Douglas',
                    lastName: 'Adams'
                }


        },

        {
            title: 'Walkaway',
            author:
                {
                firstName: 'Cory',
                lastName: 'Doctorow'
                }

        },

        {
            title: 'A Brief History of Time',
            author:
                {
                firstName: 'Stephen',
                lastName: 'Hawking'
                }

        },
        {
            title: 'IT',
            author:
                {
                    firstName: 'Stephen',
                    lastName: 'King'
                }
        },
        {
            title: 'Harry Potter and the Deathly Hollows',
            author:
                {
                    firstName: 'J.K',
                    lastName: 'Rowlings'
                }
        }
        ];

    // console.log(books[4].title);
    // console.log(books[4].author.firstName);
    // console.log(books[4].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (var i = 0; i <= 4; i++) {
        console.log("Book #" + parseFloat(i + 1) + '\nTitle: ' + books[i].title + "\nAuthor: " + books[i].author.firstName + ' ' + books[i].author.lastName);
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, authorFirstName, authorLastName) {
        return books.push(
            {
                "title": title,
                'author':
                    {
                        'firstName': authorFirstName,
                        'lastName' : authorLastName,
                    }
            }
        );
    }
    createBook('Batman', 'Bob', 'Kane');
    createBook('The Rap Book', 'Shea', 'Sarrantino');
    console.log(books);
    console.log(books[5].title);
    console.log(books[6].author.firstName);
        // book.title = 'Batman';
        // book.author = 'Bill Finger';
        // // book.author.lastName = 'Finger';
        // book.createBook = function () {
        //     console.log("Title: " + book.title + "\nAuthor: " + book.author);
        // };
        // book.createBook();

    function showBookInfo() {
        for (var i = 0; i <= 4; i++) {
            console.log("Book #" + parseFloat(i + 1) + '\nTitle: ' + books[i].title + "\nAuthor: " + books[i].author.firstName + ' ' + books[i].author.lastName);
        }
    }
    showBookInfo();
    console.log(showBookInfo());
})();
