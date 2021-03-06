const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container-fluid')
const myNav = document.querySelector('nav')
const more = document.querySelector('.moreText')
const less = document.querySelector('.lessText')

var timer = null;

var slideIndex = 0;
showSlides();


open.addEventListener('click', () => container.classList.add('show-nav'))
open.addEventListener('click', () => document.getElementById("open").style.display = "none");
open.addEventListener('click', () => document.getElementById("close").style.display = "block");
open.addEventListener('click', () => myNav.style.visibility = "visible");
open.addEventListener('click', () => myNav.style.opacity = "1");
open.addEventListener('click', () => myNav.style.transition = "opacity 1s, visibility 1s");


close.addEventListener('click', () => container.classList.remove('show-nav'))
close.addEventListener('click', () => document.getElementById("close").style.display = "none");
close.addEventListener('click', () => document.getElementById("open").style.display = "block");
close.addEventListener('click', () => myNav.style.visibility = "hidden");
close.addEventListener('click', () => myNav.style.opacity = "0");
close.addEventListener('click', () => myNav.style.transition = "opacity 1s, visibility 1s");

more.addEventListener('click', () => document.querySelector(".photo2").style.display = "block");
more.addEventListener('click', () => more.style.display = "none");
more.addEventListener('click', () => less.style.display = "block");

less.addEventListener('click', () => document.querySelector(".photo2").style.display = "none");
less.addEventListener('click', () => more.style.display = "block");
less.addEventListener('click', () => less.style.display = "none");

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 5000); // Change image every 2 seconds
}


function stopInterval() {
    clearInterval(timer)
}