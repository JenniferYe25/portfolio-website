const img = document.getElementById("me");
const about_project = document.getElementById("about_project");

if(about_project != null){
  about_project.onclick = function () {
    let src = img.getAttribute("src");
    if (src === "../assets/about img.jpg") {
      img.setAttribute("src", "../assets/craft.jpg");
    } else {
      img.setAttribute("src", "../assets/about img.jpg");
    }
  };
}

const navBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav-m');
const close = document.querySelector('.closebtn');

if(navBtn != null){
  navBtn.addEventListener('click', function(){
    nav.classList.remove("hide-active");
    nav.style.visibility = "visible";
    nav.classList.toggle("overlay-active");
  })
}

if(close != null){
  close.addEventListener('click', function(){
    nav.classList.add("hide-active");
    nav.classList.remove("overlay-active");
   

  })
}
