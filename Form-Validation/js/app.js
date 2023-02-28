//DOM Elements
const nameElem = document.getElementById('name');
const emailElem = document.getElementById('email');
const passwordElem = document.getElementById('password');
const confirmPasswordElem = document.getElementById('confirm-password');
const terms = document.getElementById('terms');
const form = document.getElementById('form');

form.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();
    verifyInputs();
}

function verifyInputs() {
    const name = nameElem.value.trim();
    const email = emailElem.value.trim();
    const password = passwordElem.value.trim();
    const confirmPassword = confirmPasswordElem.value.trim();

    if (name === '') {
        dealErrorFor(nameElem, 'Name can not be Empty');
    } else {
        dealSuccessFor(nameElem);
    }

    if (email === '') {
        dealErrorFor(emailElem, 'Email can not be Empty');
    } else if (!checkEmail(email)) {
        dealErrorFor(emailElem, 'Email is not valid');
    }
    else {
        dealSuccessFor(emailElem);
    }

    if (password === '') {
        dealErrorFor(passwordElem, 'Password can not be Empty');
    } else {
        dealSuccessFor(passwordElem);
    }

    if (confirmPassword === '') {
        dealErrorFor(confirmPasswordElem, 'Confirm Password is required');
    } else if (password !== confirmPassword) {
        dealErrorFor(confirmPassword, `Password didn't match`);
    } else {
        dealSuccessFor(confirmPasswordElem);
    }

    if (!terms.checked) {
        document.querySelector('.tNc').style.color = 'red';
    } else {
        document.querySelector('.tNc').style.color = '#ffd100';
    }
}

function dealErrorFor(element, message) {
    const row = element.parentElement;
    const small = row.querySelector('small');

    row.className = 'row error';
    small.innerText = message;
}

function dealSuccessFor(input) {
    const row = input.parentElement;
    row.className = 'row success';
}

function checkEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}