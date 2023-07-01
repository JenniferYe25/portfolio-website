class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

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

const index1 = document.querySelector('.one');
const index2 = document.querySelector('.two');
const submit = document.querySelector('.button');
const grid = document.querySelector('.grid');


if(index1 != null && index2 != null){
  elements = [index1, index2]
  text = [index1.querySelector('p').textContent, index2.querySelector('p').textContent];
}
let elementQ = new Queue();
let wordQ = new Queue();

for (let i = 0; i < elements.length; i++) {
  elementQ.enqueue(elements[i]);
  wordQ.enqueue(text[i]);
}
console.log(wordQ)

function printChar(word, element) {
  if(word == undefined || element == undefined) return
  element.style.display = "grid"
  let i = 0;
  element.querySelector('p').textContent  = "";
  let id = setInterval(() => {
    if (i >= word.length) {
      clearInterval(id)
      printChar(wordQ.dequeue(), elementQ.dequeue())
    }else{
      element.querySelector('p').textContent += word[i];
      i++;
    }
  }, 100);
}

printChar(wordQ.dequeue(), elementQ.dequeue())

