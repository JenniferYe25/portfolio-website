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

/*
The following code was adapted from 
https://www.javascriptfreecode.com/Side_Navigation_with_Overlay_Effect.htm
Modifications were made to fit the use of the website
*/
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

const index1 = document.querySelector('.one p');
const index2 = document.querySelector('.two p');
const submit = document.querySelector('.button');
const grid = document.querySelector('.grid');

if(index1 != null && index2 != null){
  words = [index1.textContent, index2.textContent];
  elements = [index1, index2]
}


function printChar(word, element) {
  console.log(word);
  let i = 0;
  element.textContent = "";
  let id = setInterval(() => {
  if (i >= word.length) {
  clearInterval(id);
  } else {
  element.innerHTML += word[i];
  i++;
  }
  }, 100);
}

for (let i = 0; i < words.length; i++) {
  printChar(words[i], elements[i])
}
