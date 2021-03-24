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
const signupForm = document.getElementById('signup-form')

function succesfullyRegistered() {
    let formElements = [username, email, password, mobilenumber];
    let errorMessage = [usernameAlert, emailAlert, passwordAlert, mobilenumberAlert];

    formElements.forEach(function(element) {
            element.style.border = "green solid 1px";
    });
}

function notSuccesfullyRegistered(event) {
    let formElements = [username, email, password, mobilenumber];
    formElements.forEach(function(element) {
        if(event === element.name) {
            element.style.border = "red solid 1px";
        }
    });
};


function checkedUsername() {
    let checkAplhanumericValue = /^[0-9a-zA-Z]+$/;
    let usernameEntered = username.value;
    if(usernameEntered.match(checkAplhanumericValue)) {
        if(usernameEntered.length >= 8) {
            // usernameAlert.innerText = 'Username Saved Succesfully';
            // succesfullyRegistered(username.name, 'Username Submitted Succesfully');
            return true;
        }
        } else {
            // usernameAlert.innerText = 'Username should be more than 8 Characters';
            // notSuccesfullyRegistered(username.name, 'Should be Alphanumeric & Min 8 Char');
            return false;
}
}

function checkedEmail() {
    let checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailEntered = email.value;
    if(emailEntered.match(checkEmail)) {
        // emailAlert.innerText = 'Email Saved Succesfully';
        // succesfullyRegistered(email.name);
        return true;
    } else {
        // emailAlert.innerText = 'Email is Incorrect';
        // notSuccesfullyRegistered(email.name);
        return false;
    }
};

function checkedPassword() {
    let checkPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let passwordEntered = password.value;
    if(passwordEntered.match(checkPassword)) {
        // passwordAlert.innerText = 'Password Saved Succesfully';
        // succesfullyRegistered(password.name);
        return true;
    } else {
        // passwordAlert.innerText = '1 Spel Char, 1 Num, 8-15 Char';
        // notSuccesfullyRegistered(password.name);
        return false;
    }
}

function checkedMobilenumber() {
    let checkMobilenumber = /^\d{10}$/;
    let mobilenumberEntered = mobilenumber.value;
    if(mobilenumberEntered.match(checkMobilenumber)) {
        // mobilenumberAlert.innerText = 'Mobile Number Saved Sucessfully';
        // succesfullyRegistered(mobilenumber.name);
        return true;
    } else {
        // mobilenumberAlert.innerText = "Enter Mobile number Correctly";
        // notSuccesfullyRegistered(mobilenumber.name);
        return false;
    }
}


signupForm.onsubmit = function(event) {
    event.preventDefault();
    // let checkCondition = {
    //     username: /^[0-9a-zA-Z]+$/,
    //     email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    //     password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
    //     mobilenumber: /^\d{10}$/
    // }

    // var x = checkCondition.username;
    if(username.value == "" || email.value == "" || password.value == "" || mobilenumber.value == "") {
        console.log("Fill all the Fields");
    } else {
        if(checkedUsername() == true && checkedEmail() == true && checkedPassword() == true && checkedMobilenumber() == true){
            succesfullyRegistered();
            console.log("Form Submitted Succesfully");
    } else {
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




// Image Slide

const slides = document.querySelectorAll('.slide');
const slidescontainer = document.querySelector('.slider-container');
const slideimg = document.querySelectorAll('.slideimg');
const arrows = document.querySelectorAll('.btn');
const radiobtn = document.querySelectorAll('.radiobtn');

let count = 1;
slideimage();
function slideimage() {
        let counttranslate = -((count-1)*46)+"%";
        slidescontainer.style.transform = "translateX("+counttranslate+")";
};
function slide() {
    slidescontainer.style.transition = "transform 1.0s ease-in-out";
    slideimage();
};
function radiocheckslide() {
    for(var i=0; i<radiobtn.length; i++) {
        if(count === Number(radiobtn[i].name.slice(-1))) {
            radiobtn[i].checked = true;
        } else {
            radiobtn[i].checked = false;
        }
    }
};
function sliding() {
    if(this.id === "arrowleft") {
        if(count == 1) {
            count = slideimg.length;
        } else {
            count--;
        }
    } else if(this.id === "arrowright") {
        if(count == slideimg.length) {
            count = 1;
        } else {
            count++;
        }
    }
    slide();
    radiocheckslide();
};
arrows.forEach(function(btn) {
    btn.addEventListener('click', sliding);
});


// Radio Button

function radiocheck() {
    count  = Number(this.name.slice(-1));
    for(var i=0; i<radiobtn.length; i++) {
        if(this.name === radiobtn[i].name) {
            this.checked = true;
        } else {
            radiobtn[i].checked = false;
        }
    };
    slide();
    slideimage();
};

radiobtn.forEach(function(radio) {
    radio.addEventListener("click", radiocheck);
})