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

const index1 = document.querySelector('.one');
const index2 = document.querySelector('.two');
const index3 = document.querySelector('.three1');
const index4 = document.querySelector('.four')
const index5 = document.querySelector('.five1')


const end = document.querySelector('.end');

let elementQ = new Queue();
elements = [index1, index2, end]

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
    element.style.display = 'flex';

    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            if(!elementQ.isEmpty){
                appear(elementQ.dequeue())
              }
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

function finish(){
        index1.classList.add('fade-out');
        index2.classList.add('fade-out');
        index5.classList.add('fade-out');
        index1.addEventListener('animationend', ()=>{index1.style.display = "none"},{once: true})
        index2.addEventListener('animationend', ()=>{index2.style.display = "none"},{once: true})
        index5.addEventListener('animationend', ()=>{index5.style.display = "none"},{once: true})
    
        elementQ.enqueue(index3)
        elementQ.enqueue(index4)

        appear(elementQ.dequeue())

        end.style.display = 'none'
}

function email(){
    elementQ.enqueue(index5)
    appear(elementQ.dequeue())
}

appear(elementQ.dequeue())
