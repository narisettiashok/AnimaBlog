function signup() {
    document.getElementById('signup-form').style.transition ='2s';
    document.getElementById('login-form').style.transition= '2s';
    document.getElementById('signup-form').style.left = "0px";
    document.getElementById('login-form').style.left = "320px";
    document.getElementById('makeit').innerHTML = "Make It happen";
    document.getElementById('create').innerHTML = "Create Account";
}
    
function login() {
    document.getElementById('signup-form').style.transition = '2s';
    document.getElementById('login-form').style.transition ='2s';
    document.getElementById('login-form').style.left = "0px";
    document.getElementById('signup-form').style.left = "-320px";
    document.getElementById('makeit').innerHTML = "Connect To";
    document.getElementById('create').innerHTML = "Welcome to";
}

// SignUp Check

const username = document.getElementById('signup-username');
let usernameAlert = document.querySelector('.signup-username-alert');
const email = document.getElementById('signup-email');
const emailAlert = document.querySelector('.signup-email-alert');
const password = document.getElementById('signup-password');
const passwordAlert = document.querySelector('.password-comment');
const mobilenumber = document.getElementById('signup-mobilenumber');
const mobilenumberAlert = document.querySelector('.signup-mobile-alert');
const signupForm = document.getElementById('signup-form');
const signupbtn = document.querySelector('.signup-btn');

let formElements = [username, email, password, mobilenumber];
let errorMessage = [usernameAlert, emailAlert, passwordAlert, mobilenumberAlert];

function errorInFields() {
   errorMessage.forEach(function(errorMessage) {
    errorMessage.innerText = "Fields should not be empty";
   })
};

function succesfullyRegistered() {

    for(i=0; i<formElements.length; i++) {
        formElements[i].style.border = "green solid 1px";
        let textMessage = formElements[i].name + " " + "submitted succesfully";
        errorMessage[i].innerText =  textMessage.slice(0,1).toUpperCase() + textMessage.slice(1,);
    }

    formElements.forEach(function(reset) {
        reset.value = "";
    })
};

function notSuccesfullyRegistered(message) {
    for(i=0; i<formElements.length; i++) {
        formElements[i].style.border = "red solid 1px";
        errorMessage[i].innerText = message[i];
    }
        
};

function checkedUsername() {
    let checkAplhanumericValue = /^[0-9a-zA-Z]+$/;
    let usernameEntered = username.value;
    if(usernameEntered.match(checkAplhanumericValue)) {
        if(usernameEntered.length >= 8) {
            return true;
        }
        } else {
            return false;
}
}

function checkedEmail() {
    let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailEntered = email.value;
    if(emailEntered.match(checkEmail)) {
        return true;
    } else {
        return false;
    }
};

function checkedPassword() {
    let checkPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let passwordEntered = password.value;
    if(passwordEntered.match(checkPassword)) {
        return true;
    } else {
        return false;
    }
}

function checkedMobilenumber() {
    let checkMobilenumber = /^\d{10}$/;
    let mobilenumberEntered = mobilenumber.value;
    if(mobilenumberEntered.match(checkMobilenumber)) {
        return true;
    } else {
        return false;
    }
}


signupForm.onsubmit = function(event) {
    event.preventDefault();
    signupbtn.style.outline = "none";
    if(username.value == "" || email.value == "" || password.value == "" || mobilenumber.value == "") {
        errorInFields();
        console.log("Fill all the Fields");
    } else {
        if(checkedUsername() == true && checkedEmail() == true && checkedPassword() == true && checkedMobilenumber() == true){
            succesfullyRegistered();
            console.log("Form Submitted Succesfully");
    } else {
        let errorMessage = ['Should be alphanumeric & min 8 Char', 'Email is incorrect','1 Spel Char, 1 Num, 8-15 Char','Enter mobile number correctly' ];
        notSuccesfullyRegistered(errorMessage);
            console.log("Error in submission");
    }
}
};


// Services Section //

const readmore = document.querySelectorAll(".servicebtn");
const container = document.querySelector('#container');
const body = document.querySelector('body');
const servicehidden = document.querySelectorAll('.service-hidden');
const closeService = document.querySelectorAll('.close-service');
function hello() {
    container.style.filter = "blur(5px)";
    container.style.pointerEvents = "none";
    container.style.userEvents = "none";
    servicehidden[0].style.visibility = "visible";
    servicehidden[0].style.opacity = "1";
    servicehidden[0].style.width = "80%";
    servicehidden[0].style.height = "80%";
}
function popup() {
    container.style.transition = "transform 1.0s ease-in-out";
    hello();
}
readmore.forEach(function(btn) {
    btn.addEventListener('click', popup);
});

function closepopup() {
    container.style.filter = "none";
    container.style.pointerEvents = "auto";
    container.style.userEvents = "auto";
    servicehidden[0].style.visibility = "none";
    servicehidden[0].style.opacity = "0";
    servicehidden[0].style.width = "0%";
    servicehidden[0].style.height = "0%";
}

function close() {
    container.style.transition = "transform 1.0s ease-in-out";
    closepopup();
}

closeService.forEach(function(btn) {
    btn.addEventListener('click', close);
});

// Services text limit

const servicePara = document.querySelectorAll(".servicepara");