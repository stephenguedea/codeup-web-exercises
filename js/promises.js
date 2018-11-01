"use strict";
// function wait (number) {
//     return new Promise((resolve, reject) => { // resolve and reject are functions!!
//         setTimeout(() => {
//             if (number) {
//                 resolve(number);
//             } else {
//                 reject('Error: Check input');
//             }
//         }, number);
//     });
// }

const wait = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`You'll see this after ${number / 1000} second(s)`);
                }, number);
        });
};
// wait(1000).then((message) => {
//     console.log(message);
// });
//
// wait(2000).then((message) => {
//     console.log(message);
// });
//
// wait(5000).then((message) => {
//     console.log(message);
// });
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(2000).then(() => console.log('You\'ll see this after 2 seconds'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(4000).then(() => console.log('You\'ll see this after 4 seconds'));
// wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));

// wait(10000).then(() => console.log('You\'ll see this after 10 seconds'));
// wait(10000).then(() => console.log('You\'ll see this after 10 seconds'));

// wait(20000).then(() => console.log('You\'ll see this after 20 seconds'));


const githubUser = (username) => {
    let request = fetch(`https://api.github.com/users/${username}/events`,
        {headers: {'Authorization': 'token 47da355de58ae933d04839b17e93a244098ca75f'}
        });

    request
        .then((response) => response.json())
        .then(data => console.log(data[0].created_at))

    // return new Promise((resolve, reject) => {
    //     if (username){
    //     resolve (`GET /users/${username}/events`);
    //     } else {
    //         reject('Error: Check input');
    //     }
    // });
};

// var username = prompt("What is your github username");

// fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(data => console.log(data));

githubUser('stephenguedea');

// INSTRUCTOR'S CODE
// const githubAPIBaseUrl = 'https://api.github.com';
// const token = token;
// const options = {
//     headers: {
//         'Authorization': 'token ' + token
//     }
// }
//
// const recentCommit = (username) => {
//     const userEventEndpoint = `/users/${username}/events/public`;
//     return fetch(githubAPIBaseUrl + userEventEndpoint, options);
// };
//
// recentCommit('stephenguedea')
// .then((data) => data.json())
// .then(data => {
//     console.log(data);
// });

const userRecentCommit = (username) => {
    let userEventEndpoint = fetch(`https://api.github.com/users/${username}/events`,
        {
            headers: {'Authorization': 'token 47da355de58ae933d04839b17e93a244098ca75f'}
        });
    userEventEndpoint
        .then((data) => data.json())
        .then(data => console.log(data[0].created_at))
};
userRecentCommit('stephenguedea');