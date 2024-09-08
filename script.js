document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();
    var onlineID = document.getElementById("onlineID").value;
    var password = document.getElementById("password").value;

    setTimeout(()=>{
        if (onlineID === "admin" && password === "password") {
            alert("Login successful");
        }else {
            alert("Login failed");
        }
    }, 5000)

});

const onlineIDField = document.getElementById('onlineID');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('login');

function checkFields() {
    if (onlineIDField.value.trim() !== "" && passwordField.value.trim() !== "") {
        loginButton.style.backgroundColor = '#008000';
        loginButton.style.cursor = 'pointer';
    } else {
        loginButton.style.backgroundColor = '#ccc';
        loginButton.style.cursor = 'not-allowed';
    }
}

onlineIDField.addEventListener('input', checkFields);
passwordField.addEventListener('input', checkFields);

const passwordInput = document.getElementById('password');
const showButton = document.getElementById('show');

showButton.addEventListener('click', function () {
    const isPasswordVisible = passwordInput.getAttribute('type') === 'password';

    passwordInput.setAttribute('type', isPasswordVisible ? 'text' : 'password');

    showButton.textContent = isPasswordVisible ? 'Hide' : 'Show';
});

const buttonText = document.getElementById('buttonText');
const spinner = document.getElementById('spinner');

document.getElementById('login').addEventListener('click', function() {
    loginButton.classList.add('active');
    
    setTimeout(() => {
        loginButton.classList.remove('active');
    }, 5000);
});

const enrollLink = document.querySelector('.enroll-link');
const tooltipBox = document.querySelector('.tooltip-box');

enrollLink.addEventListener('mouseover', () => {
    tooltipBox.style.opacity = '1';
    tooltipBox.style.visibility = 'visible';
});

enrollLink.addEventListener('mouseout', () => {
    tooltipBox.style.opacity = '0';
    tooltipBox.style.visibility = 'hidden';
});

tooltipBox.addEventListener('mouseover', () => {
    tooltipBox.style.opacity = '1';
    tooltipBox.style.visibility = 'visible';
});

tooltipBox.addEventListener('mouseout', () => {
    tooltipBox.style.opacity = '0';
    tooltipBox.style.visibility = 'hidden';
});