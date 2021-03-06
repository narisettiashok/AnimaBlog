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

 function successfullyRegistered() {
    for(i=0; i<formElements.length; i++) {
        formElements[i].style.border = "green solid 1px";
        let textMessage = formElements[i].name + " " + "submitted successfully";
        errorMessage[i].innerText =  textMessage.slice(0,1).toUpperCase() + textMessage.slice(1,);
    }
    let requestBody = {};
    formElements.forEach((element) => {
        requestBody[element.name] = element.value;
    }); 

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            requestBody
        )
    }).then(response => {
            formElements.forEach(function(reset) {
            reset.value = "";
        });
    });
};

function notSuccessfullyRegistered(message) {
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

function formSubmitted(event) {
    event.preventDefault();
    signupbtn.style.outline = "none";
    if(username.value == "" || email.value == "" || password.value == "" || mobilenumber.value == "") {
        errorInFields();
        console.log("Fill all the Fields");
    } else {
        if(checkedUsername() == true && checkedEmail() == true && checkedPassword() == true && checkedMobilenumber() == true){
            successfullyRegistered();
            console.log("Form Submitted Succesfully");
    } else {
        let errorMessage = ['Should be alphanumeric & min 8 Char', 'Email is incorrect','1 Spel Char, 1 Num, 8-15 Char','Enter mobile number correctly' ];
        notSuccessfullyRegistered(errorMessage);
            console.log("Error in submission");
    }
}
};