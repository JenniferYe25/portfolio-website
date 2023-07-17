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
