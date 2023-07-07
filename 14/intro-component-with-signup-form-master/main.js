const firstName = document.getElementById('firstNameInput');
const LastName = document.getElementById('lastNameInput');
const Email = document.getElementById('emailInput');
const Password = document.getElementById('passwordInput');

const firstNameError = document.getElementById('firstNameError');
const LastNameError = document.getElementById('lastNameError');
const EmailError = document.getElementById('emailError');
const PasswordError = document.getElementById('passwordError');

const Button = document.getElementById('button');

Button.addEventListener('click', function (e) {
    e.preventDefault()
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(LastName.value, LastName, LastNameError , 'Last Name cannot be empty');
    validateEmail(Email.value, Email, EmailError, 'Looks like this is not an email'  )
    validateEmpty(Password.value, Password, PasswordError , 'Password cannot be empty');
    
});

firstName.addEventListener('input', function (e) {
    firstName.style = '1px solid hsl(246, 25%, 77%)';
    firstNameError.innerHTML = ``;
});

LastName.addEventListener('input', function (e) {
    LastName.style = '1px solid hsl(246, 25%, 77%)';
    LastNameError.innerHTML = ``;
});

Email.addEventListener('input', function (e) {
    Email.style = '1px solid hsl(246, 25%, 77%)';
    EmailError.innerHTML = ``;
});

Password.addEventListener('input', function (e) {
    Password.style = '1px solid hsl(246, 25%, 77%)';
    PasswordError.innerHTML = ``;
});

function validateEmpty (valueInput, divInput, divError, errorMessage) {
    if (valueInput.length == 0) {
        showError(divInput, divError, errorMessage);
    }else {
        hiddenError(divInput, divError);
    }
}

function validateEmail (valueInput, divInput, divError, error) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(valueInput)) {
        divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
    } else {
        divInput.style.border = '1px solid red';
        divError.innerHTML = `<img src="./images/icon-error.svg" alt="" class="icon-error">
        <p class="error">${error}</p>`;
    }
}

function showError (divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img src="./images/icon-error.svg" alt="" class="icon-error">
    <p class="error">${error}</p>`;
}

function hiddenError (divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}