// Standard queue implementation 
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

// get all elements needed for animation 
const index1 = document.querySelector('.one');
const index2 = document.querySelector('.two');

let elementQ = new Queue();
[elementQ.enqueue(index1), elementQ.enqueue(index2)];

appear(elementQ.dequeue());

// typing animation
function printChar(element) {
  const paragraph = element.querySelector('p');
  if (!paragraph) return; // checking if queue is empty

  element.style.display = "grid"; // displays element

  let i = 0;
  const word = paragraph.innerText;
  paragraph.textContent = "";

  const id = setInterval(() => {
    if (i >= word.length) {
      clearInterval(id);
      if (!elementQ.isEmpty) {
        appear(elementQ.dequeue());
      }
    } else {
      paragraph.textContent += word[i];
      i++;
    }
  }, 100);
}

// fade in an8imation 
function nontext(element) {
  element.style.display = 'grid';
  let op = 0.1; // initial opacity

  const timer = setInterval(() => {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = `alpha(opacity=${op * 100})`;
    op += op * 0.1;
  }, 10);

  if (!elementQ.isEmpty) {
    appear(elementQ.dequeue());
  }
}

// decision making function 
  function appear(element){
    if(element.querySelector('p') == null){ // if has something to type out
      nontext(element)
    } else {
      printChar(element)
  }
}
