const signupModal = document.querySelector('.signup-form-wrapper');
const loginModal = document.querySelector('.login-form-wrapper');
const signupBtn = document.querySelector('.signup-btn');
const loginBtn = document.querySelector('.login-btn');
const signupX = document.querySelector('.signup-x');
const loginX = document.querySelector('.login-x');
const formContainer = document.querySelector('.form-container');

signupBtn.addEventListener('click', () => {
    signupModal.classList.remove('hidden');
    formContainer.classList.toggle('hidden');
})
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    formContainer.classList.toggle('hidden');
})

signupX.addEventListener('click', () => {
    signupModal.classList.add('hidden');
    formContainer.classList.toggle('hidden');
})
loginX.addEventListener('click', () => {
    loginModal.classList.add('hidden');
    formContainer.classList.toggle('hidden');
})
