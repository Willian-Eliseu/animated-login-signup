const email = document.querySelector('#email');
const labelEmail = document.getElementById('emailLabel');
const password = document.querySelector('#password');
const labelPassword = document.getElementById('passwordLabel');

const userName = document.querySelector('#name');
const labelName = document.getElementById('nameLabel');
const signupEmail = document.querySelector('#signupEmail');
const labelSignupEmail = document.getElementById('signupEmailLabel');
const signupPassword = document.querySelector('#signupPassword');
const labelSignupPassword = document.getElementById('signupPasswordLabel');

const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const signupLink = document.querySelector('#signupLink');
const loginLink = document.querySelector('#loginLink');

function handleInputFocus(event, label){
    label.classList.remove('d-none');
    event.target.placeholder = '';
}

function handleInputBlur(event, label, placeholder){
    if(event.target.value === ''){
        label.classList.add('d-none');
        event.target.placeholder = placeholder;
    }
}

email.addEventListener('focus', (e)=> handleInputFocus(e, labelEmail));
email.addEventListener('blur', (e)=> handleInputBlur(e, labelEmail, 'Please enter your email'));
password.addEventListener('focus', (e)=> handleInputFocus(e, labelPassword));
password.addEventListener('blur', (e)=> handleInputBlur(e, labelPassword, 'Please enter your password'));
userName.addEventListener('focus', (e)=> handleInputFocus(e, labelName));
userName.addEventListener('blur', (e)=> handleInputBlur(e, labelName, 'Please enter your name'));
signupEmail.addEventListener('focus', (e)=> handleInputFocus(e, labelSignupEmail));
signupEmail.addEventListener('blur', (e)=> handleInputBlur(e, labelSignupEmail, 'Please enter your email'));
signupPassword.addEventListener('focus', (e)=> handleInputFocus(e, labelSignupPassword));
signupPassword.addEventListener('blur', (e)=> handleInputBlur(e, labelSignupPassword, 'Please enter your password'));

signupLink.addEventListener('click', (e)=>{
    e.preventDefault();
    login.classList.add('d-none');
    signup.classList.remove('d-none');
});

loginLink.addEventListener('click', (e)=>{
    e.preventDefault();
    login.classList.remove('d-none');
    signup.classList.add('d-none');
});