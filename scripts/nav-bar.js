const navBtn = $('.menu');
const nav = $('.nav-m');
const close = $('.closebtn');

if (navBtn.length) { // if element exists
  navBtn.on('click', function() {
    nav.toggleClass('overlay-active');
    nav.removeClass('hide-active');
    nav.css('visibility', 'visible');
  });
}

if (close.length) { // if element exists
  close.on('click', function() {
    nav.removeClass('overlay-active');
    nav.addClass('hide-active');
  });
}
