"use strict";
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', bode: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Check your input!');
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts)
.catch(error => console.log(error));

// Promise.all
const promise1 = Promise.resolve('Hello World');
// const promise1 = new Promise((resolve, reject) =>
// setTimeout(resolve, 1000, 'Hello'));
const promise2 = new Promise((resolve, reject) =>
setTimeout(resolve, 600, 10));
const promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 500, 'Goodbye'));

Promise.all([promise1, promise2, promise3]).then((values) =>
console.log(values));

Promise.race([promise1, promise2, promise3]).then((values) =>
    console.log(values));