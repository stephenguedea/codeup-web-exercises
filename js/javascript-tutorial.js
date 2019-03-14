"use strict";

// alert("Hello World!");
// console.error("This is an error!");
// console.warn("Warning!");

// VARIABLE var, let, const
// **** let & const have a block-level scope ****


// ALWAYS USE const UNLESS YOU KNOW YOU'RE GOING TO REASSIGN THE VALUE
// let age = 29;
// age = 31;
// console.log(age);

// let score;
// score = 10;
// console.log(score);

// DATA TYPES
// String, Numbers, Boolean, null, undefined, Symbol (ES6)

// const name = 'Stephen';
// const age = 29;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// // null is empty
// const y = undefined;
// let z; // undefined
// console.log(typeof x);
//
// // CONCATENATION
// console.log("My name is " + name + ", I am " + age + " years old.");
//
// // TEMPLATE STRING
// const greeting = `My name is ${name}, and I am ${age}`;
//
// console.log(greeting);

// const s = 'Hello World';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase()); // HELLO
// console.log(s.split('')); (11) ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
//
// const t = 'technology, computers, it, code';
// console.log(t.split(', ')); (4) ["technology", "computers", "it", "code"]

// ARRAYS - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers); (5) [1, 2, 3, 4, 5]

// const bands = ['AC/DC', 'Pink Floyd', 'Van Halen', 'Metallica'];
// // console.log(bands); (6) ["AC/DC", "Pink Floyd", "Van Halen", "Metallica", 10, true]
// console.log(bands[1]); // Pink Floyd
//
// // bands[3] = 'Motley Crue';
// // console.log(bands); (4) ["AC/DC", "Pink Floyd", "Van Halen", "Motley Crue"]
//
// // BETTER WAY
// bands.push('Motley Crue'); // add to the end
// console.log(bands); // (5) ["AC/DC", "Pink Floyd", "Van Halen", "Metallica", "Motley Crue"]
//
// bands.unshift('Fleetwood Mac'); // add to the beginning
// console.log(bands); // (6) ["Fleetwood Mac", "AC/DC", "Pink Floyd", "Van Halen", "Metallica", "Motley Crue"]
//
// bands.pop(); // pops the last one off
// console.log(bands); // (5) ["Fleetwood Mac", "AC/DC", "Pink Floyd", "Van Halen", "Metallica"]
//
// console.log(Array.isArray('hello')); // false
// console.log(Array.isArray(bands)); // true
//
// console.log(bands.indexOf('Metallica')); // 4
//
// console.log(bands);

// OBJECTS LITERALS

// const person = {
//     firstName: 'Stephen',
//     lastName: 'Guedea',
//     age: 29,
//     hobbies: ['DJ', 'Karaoke', 'Movies', 'Wrestling', 'Sports'],
//     address: {
//         street: '2511 Townfield',
//         city: 'San Antonio',
//         state: 'TX'
//     }
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies[1]);
//
// console.log(`My name is ${person.firstName} ${person.lastName}.\nI am ${person.age} years old.
// \nMy hobbies are ${person.hobbies}.\nMy hometown is ${person.address.city}, ${person.address.state}.`);
//
// // ADD AN EMAIL TO person...
// person.email = 'stephen@gmail.com';
// console.log(person);

// ARRAYS OF OBJECTS
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     },
// ];

// console.log(todos[1].text); // Meeting with boss
//
// // JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON); // how to send data to a server

// LOOPS

// for
// for(let i = 0; i<10;i++){
//     console.log(`for loop number: ${i}`);
// }
//
// // while
// let i = 0;
// while (i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// Loop through arrays
// for(let i = 0; i<todos.length;i++){
//     console.log(todos[i].text);
// }
//
// // MORE USED
// for(let todo of todos){
//     console.log(todo.text);
// }
//
// // HIGH ORDER ARRAY METHODS
// // forEach, map, filter
//
// //forEach
// todos.forEach(function (todo) {
//     console.log(todo.text);
// });
//
// // map
// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText); // (3) ["Take out trash", "Meeting with boss", "Dentist appt"]
//
// // filter
// const todoCompleted = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// });
//
// console.log(todoCompleted); // (2) [{…}, {…}]0: {id: 1, text: "Take out trash", isCompleted: true}1: id: 2isCompleted: truetext: "Meeting with boss"__proto__: Objectlength: 2__proto__: Array(0)
//
//
// // GET THE TEXT WHERE isCompleted === true...
// const todoCompletedText = todos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return todo.text;
// });
//
// console.log(todoCompletedText); // (2) ["Take out trash", "Meeting with boss"]0: "Take out trash"1: "Meeting with boss"length: 2__proto__: Array(0)

// CONDITIONALS
// const x = 120;
// if (x === 10) {
//     console.log(`x is 10`);
// } else if(x > 10) {
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is less than 10');
// }

// const x = 6;
// const y = 11;
// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }

// TERNARY OPERATOR
// const x = 11;

// const color = x > 10 ? 'red' : 'blue';
// ? = then, : = else
// console.log(color);

// SWITCH
// const color = 'green';
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red OR blue');
//         break;
// }

// FUNCTIONS
// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }
// addNums(10, 5); // 15
//
// // OR...
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(10, 5)); // 15
//
//
// function subNums(num1, num2) {
//     return num1 - num2;
// }
// console.log(subNums(10, 5)); // 5
//
// function multiNums(num1, num2) {
//     return num1 * num2;
// }
// console.log(multiNums(25, 5)); // 125
//
// function divNums(num1, num2) {
//     return num1 / num2;
// }
// console.log(divNums(25, 5)); // 5
//
//
// const length = 5;
// const width = 8;
//
// function area(length, width) {
//     return length * width;
// }
//
// console.log(area(length, width));
//
// function perimeter(length, width) {
//     return (length * 2) + (width * 2);
// }
//
// console.log(perimeter(length, width));

// ARROW FUNCTION
// const addNums = ( num1 = 1, num2 = 1) => {
//     return num1 + num2;
// }
//
// console.log(addNums()); // 2
//
// // OR
//
// const addNumbers = ( num1 = 42, num2 = 30) => console.log(num1 + num2);
// addNumbers(); // 72
//
// // OR...
// const addMoreNumbers = ( num1 = 1, num2 = 20) => num1 + num2;
// console.log(addMoreNumbers()); // 21

// OOP

// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
//     // this.getBirthYear = function () {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }


// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
//
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// CLASS
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
//
// // Instantiate Object
// const person1 = new Person('Stephen', 'Guedea', '01/24/1990');
// const person2 = new Person('Liz', 'Bermea', '02/14/1989');
//
// console.log(person1.dob); // Wed Jan 24 1990 00:00:00 GMT-0600 (Central Standard Time)
// console.log(person2.dob); // Tue Feb 14 1989 00:00:00 GMT-0600 (Central Standard Time)
//
// // console.log(person1.getBirthYear()); // 1990
// //
// // console.log(person2.getFullName()); // Liz Bermea
// // console.log(person1.getFullName()); // Stephen Guedea
//
//
// console.log(person1.getFullName()); // Stephen Guedea
// console.log(person1.getBirthYear()); // 1990
// console.log(person2); // Person {firstName: "Liz", lastName: "Bermea", dob: Tue Feb 14 1989 00:00:00 GMT-0600 (Central Standard Time)}



