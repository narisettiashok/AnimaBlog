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
const email = document.getElementById('signup-email');
const password = document.getElementById('signup-password');
const mobilenumber = document.getElementById('signup-mobilenumber');
const signupForm = document.getElementById('signup-form')

function signupformsubmitted(event) {
   event.preventDefault();
    alert('Hello World');

}




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
}
radiobtn.forEach(function(radio) {
    radio.addEventListener("click", radiocheck);
})





