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
closeService.forEach(function(btn) {
    btn.addEventListener('click', closepopup);
});

// Services text limit

const servicePara = document.querySelectorAll(".servicepara");