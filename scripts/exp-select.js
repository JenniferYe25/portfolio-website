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

let elementQ = new Queue();
elements = [index1, index2]

for (let i = 0; i < elements.length; i++) {
    elementQ.enqueue(elements[i]);
}  

appear(elementQ.dequeue())


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
  