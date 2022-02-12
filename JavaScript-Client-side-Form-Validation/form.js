const form = document.getElementById('form');
const inputs = document.querySelectorAll('.form-control');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const reset = document.getElementById('reset');

form.addEventListener('submit', (e) => {
    e.preventDefault();
// Validate All Inputs
    validateForm();
// Reset the Message of an Input if the User Change its Value
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.className = 'form-control';
        })
    })
})

// Reset Entire Form
reset.addEventListener('click', () => {
    inputs.forEach(input => {
        input.className = 'form-control';
    })
})

function validateForm() {
    // Get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
// Validate Username
    if (usernameValue === '') {
        setError(username, 'Username cannot be empty');
    } else if (usernameValue.length < 6 || usernameValue.length > 15) {
        setError(username, 'Username should be between 6 and 15 characters');
    } else if (true) {
        // TODO: dali imeto e samo bukvi, cifri i _
        setSuccess(username);
    } else {
        setSuccess(username);
    }
// Validate Email
    if (emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (isEmail(emailValue) === false) {
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
    }
// Validate Password / Confirm Password
    if (passwordValue === '') {
        setError(password, 'Password cannot be empty');
        password2.parentElement.className = 'form-control';
    } else if (passwordValue.length < 6 || passwordValue.length > 15) {
        setError(password, 'Password should be between 6 and 15 characters');
        password2.parentElement.className = 'form-control';
    } else if (true) {
        // TODO: dali parolata e samo bukvi i cifri
        // TODO: dali parolata ima A, a i 1
        setSuccess(password);
// Validate Confirm Password
        if (password2Value === '') {
            setError(password2, 'Password cannot be empty');
        } else if (passwordValue !== password2Value) {
            setError(password2, 'Passwords does not match');
        } else {
            setSuccess(password2);
        }
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Password cannot be empty');
    }

    function setError(input, errorMessage) {
        const formControl = input.parentElement;
        const smallTag = formControl.querySelector('small');
        // Add error message inside smallTag
        smallTag.innerText = errorMessage;
        // Add error class
        formControl.className = 'form-control error';
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        // Add success class
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        return emailPattern.test(email);
    }
}