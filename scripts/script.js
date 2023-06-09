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
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
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
const index3 = document.querySelector('.three');
const index4 = document.querySelector('.four')
const index5 = document.querySelector('.five');


const submit = document.querySelector('.submit');
const nameErr = document.querySelector('.op');

let elementQ = new Queue();
elements = [index1, index2, index3]

for (let i = 0; i < elements.length; i++) {
  elementQ.enqueue(elements[i]);
}

 function printChar(element) {
  if(element == undefined) return // checking if queue is empty

  element.style.display = "grid" // displays element

  let i = 0;
  var word = element.querySelector('p').innerText

  element.querySelector('p').textContent  = "";

  let id = setInterval(() => {
    if (i >= word.length) {
      clearInterval(id)
      if(!elementQ.isEmpty){
        appear(elementQ.dequeue())
      }
    }else{
      element.querySelector('p').textContent += word[i];
      i++;
    }
  }, 100);
}

function nontext(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'grid';

  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
  if(!elementQ.isEmpty){
    appear(elementQ.dequeue())
  }
}

function appear(element){
  if(element.querySelector('p') == null){
    nontext(element)
  }else{
    printChar(element)
  }
}

function validateName() {
  let name = document.forms["Form"]["name"].value;
  if (name == "") {
    nameErr.style.display = "grid"
  }else{
    if(nameErr.style.display != "none"){
      nameErr.style.display = 'none'
    }
    document.getElementById('name').readOnly = true;
    submit.style.display ='none';

    index1.classList.add('fade-out');
    index2.classList.add('fade-out');
    index1.addEventListener('animationend', ()=>{index1.style.display = "none"},{once: true})
    index2.addEventListener('animationend', ()=>{index2.style.display = "none"},{once: true})

    const element = document.getElementById("include-name");
    element.innerHTML = element.innerHTML.replace("var", name);
    
    elementQ.enqueue(index4);
    elementQ.enqueue(index5);
    appear(elementQ.dequeue())
  }
}

appear(elementQ.dequeue())
