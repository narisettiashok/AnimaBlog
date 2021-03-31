// Image Appear

const slides = document.querySelectorAll('.slide');
const slidescontainer = document.querySelector('.slider-container');
const sliderContainerDescription = document.querySelector(".slider-container-description");
const slideimg = document.querySelectorAll('.slideimg');
const arrows = document.querySelectorAll('.btn');
const radiobtn = document.querySelectorAll('.radiobtn');
const workName = document.querySelectorAll(".workname");

let count = 1;
slideimage();
function slideimage() {
        let imageSlide = "img"+count;
        let workHead = "work" + count;
        slideimg.forEach(function(img) {
            if(img.id === imageSlide) {
                document.getElementById(imageSlide).style.zIndex = "2";
            } else {
                document.getElementById(img.id).style.zIndex = "1";
            }
        });
        workName.forEach(function(work) {
            if(work.id === workHead) {
                document.getElementById(workHead).style.zIndex = "2";
            } else {
                document.getElementById(work.id).style.zIndex = "1";
            }
        });
};
function slide() {
    slidescontainer.style.transition = "transform 3.0s ease-in-out";
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
arrows.forEach((btn) => {
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