const email = document.querySelector('#email');
const labelEmail = document.getElementById('emailLabel');
const password = document.querySelector('#password');
const labelPassword = document.getElementById('passwordLabel');

email.addEventListener('focus', function(){
    labelEmail.classList.remove('d-none');
    email.placeholder = '';
})

email.addEventListener('blur', function(){
    if(email.value === ''){
        labelEmail.classList.add('d-none');
        email.placeholder = 'Please enter your email';
    }
})

password.addEventListener('focus', function(){
    labelPassword.classList.remove('d-none');
    password.placeholder = '';
})

password.addEventListener('blur', function(){
    if(password.value === ''){
        labelPassword.classList.add('d-none');
        password.placeholder = 'Please enter your password';
    }
})