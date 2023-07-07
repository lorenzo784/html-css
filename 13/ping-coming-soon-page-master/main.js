let inputEmail = document.getElementById('email');
let button = document.getElementById('btn');

button.addEventListener('click', function(e) {
    e.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(email)) {
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
    } else {
        inputEmail.style.border = '1px solid red';
        error.style.visibility = 'visible';
    }
}