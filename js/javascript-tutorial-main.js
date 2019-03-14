// TO SELECT THINGS BY THE DOM


// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));


// Multiple element
// console.log(document.querySelectorAll('.items')); // NodeList [ul.items]0: ul.itemslength: 1__proto__: NodeList
// console.log(document.getElementsByClassName('item')); // html collection HTMLCollection(3) [li.item, li.item, li.item]
// console.log(document.getElementsByTagName('li')); // HTMLCollection(3) [li.item, li.item, li.item]

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// CHANGING THINGS IN THE DOM
// const ul = document.querySelector('.items');
//
// // ul.remove();
//
// // ul.lastElementChild.remove();
//
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Stephen';
// ul.lastElementChild.innerHTML = '<h1>Guedea</h1>';
//
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// EVENTS
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// LITTLE APPLICATION
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput); // GIVES YOU THE ACTUAL ELEMENT... NEEDS THE NAME
    // console.log(nameInput.value); // GETS YOU THE NAME INPUT.


    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // CLEAR FIELDS
        nameInput.value = '';
        emailInput.value = '';
    }

}



