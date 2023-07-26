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
let elementQ = new Queue();
[elementQ.enqueue($('.one')[0]), elementQ.enqueue( $('.two')[0])];

appear(elementQ.dequeue());

// typing animation
function printChar(element) {
  const paragraph = $(element).find('p');
  if (!paragraph.length) return; // checking if queue is empty

  $(element).css('display', 'grid'); // displays element

  let i = 0;
  const word = paragraph.text();
  paragraph.text('');

  const id = setInterval(() => {
    if (i >= word.length) {
      clearInterval(id);
      if (!elementQ.isEmpty) {
        appear(elementQ.dequeue());
      }
    } else {
      paragraph.text(paragraph.text() + word[i]);
      i++;
    }
  }, 100);
}

// fade in animation
function nontext(element) {
  $(element).css('display', 'grid');
  let op = 0.1; // initial opacity

  const timer = setInterval(() => {
    if (op >= 1) {
      clearInterval(timer);
    }
    $(element).css('opacity', op);
    $(element).css('filter', `alpha(opacity=${op * 100})`);
    op += op * 0.1;
  }, 10);

  if (!elementQ.isEmpty) {
    appear(elementQ.dequeue());
  }
}

// decision-making function
function appear(element) {
  if ($(element).find('p').length == 0) {
    // if has something to type out
    nontext(element);
  } else {
    printChar(element);
  }
}
