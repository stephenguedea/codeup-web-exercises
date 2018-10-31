'use strict';
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userLanguages = users.filter(user => user.languages.length >= 3);
console.log(userLanguages);

// const userLanguages = users.filter(currentElement => currentElement.languages.length >= 3);
// console.log(userLanguages);

// create an array of user's email address
const userEmail = users.map(user => user.email);
console.log(userEmail);

// reduce to get the total years of experience from the list of users.
// then get the average.
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// console.log(totalYears);

const yearsAvg = totalYears / users.length;
console.log(yearsAvg);

// reduce to get the longest email from the list of users
const longestEmail = users.reduce((email1, email2) => email1.email.length > email2.email.length ? email1 : email2);
console.log(longestEmail);

// reduce to get the list of user's name in a single string
// const listOfUsers = users.reduce((string, user) => string + user.name + ' ', '').trim();
// console.log('Your instructors names are: ' + listOfUsers);

const listOfUsers = users.reduce((accumulator, user, index) => {
    let lastChar = ', ';
    if (index === users.length - 1) {
        lastChar = '.';
    }
    return accumulator + user.name + lastChar;
}, "");

console.log("Your instructors are: " + listOfUsers);
// const userNames = users.reduce(nameCount, name)

// const listOfLanguages = users.reduce((accumulator, user) => accumulator + user.languages + ' ', '');
const listOfLanguages = users.reduce((accumulator, user) => {
    user.languages.map(language => {
        accumulator.push(language);
    });
    return accumulator;

}, []);
console.log(listOfLanguages);
console.log(new Set(listOfLanguages)); // gets rid of duplicates


