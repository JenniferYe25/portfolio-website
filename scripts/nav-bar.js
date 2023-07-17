/*
The following code was adapted from 
https://www.javascriptfreecode.com/Side_Navigation_with_Overlay_Effect.htm
Modifications were made to fit the use of the website
*/
const navBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav-m');
const close = document.querySelector('.closebtn');

if (navBtn) { // if element exists
  navBtn.addEventListener('click', function() {
    nav.classList.toggle("overlay-active");
    nav.classList.remove("hide-active");
    nav.style.visibility = "visible";
  });
}

if (close) { // if element exists
  close.addEventListener('click', function() {
    nav.classList.remove("overlay-active");
    nav.classList.add("hide-active");
  });
}
