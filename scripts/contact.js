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

// getting all elements needed
const end = document.querySelector('.end');
let elementQ = new Queue();
[elementQ.enqueue(document.querySelector('.one')),
 elementQ.enqueue(document.querySelector('.two')),
 elementQ.enqueue(end)
];

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
      if (!elementQ.isEmpty) { // current element has finished typing, go next
        appear(elementQ.dequeue());
      }
    } else {
      paragraph.textContent += word[i];
      i++;
    }
  }, 100);
}

// fade in  function 
function nontext(element) {
  element.style.display = 'flex';
  let op = 0.1; // initial opacity

  const timer = setInterval(() => {
    if (op >= 1) {
      clearInterval(timer);
      if (!elementQ.isEmpty) {
        appear(elementQ.dequeue());
      }
    }
    // fading
    element.style.opacity = op;
    element.style.filter = `alpha(opacity=${op * 100})`;
    op += op * 0.1;
  }, 10);
}

// decision making function for display style
function appear(element) {
  const paragraph = element.querySelector('p');
  if (!paragraph) {
    nontext(element);
  } else {
    printChar(element);
  }
}

// end button clicked and end website exp
function finish() {
  // get rid of all past elements that aren't ending text
  [document.querySelector('.one'),
   document.querySelector('.two'),
   document.querySelector('.five1')
  ].forEach(element => {
    element.classList.add('fade-out');
    element.addEventListener('animationend', () => {
      element.style.display = "none";
    }, { once: true });
  });

  [document.querySelector('.three1'),
   document.querySelector('.four')
  ].forEach(element => elementQ.enqueue(element));

  appear(elementQ.dequeue());
  end.style.display = 'none'; // remove end button 
}

// displays email 
function email() {
  elementQ.enqueue(document.querySelector('.five1'));
  appear(elementQ.dequeue());
}

appear(elementQ.dequeue());
