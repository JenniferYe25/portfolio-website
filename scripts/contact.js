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
const end = $('.end');
let elementQ = new Queue();
[elementQ.enqueue($('.one')[0]),
 elementQ.enqueue($('.two')[0]),
 elementQ.enqueue(end[0])
];

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
      if (!elementQ.isEmpty) { // current element has finished typing, go next
        appear(elementQ.dequeue());
      }
    } else {
      paragraph.text(paragraph.text() + word[i]); // add next letter
      i++;
    }
  }, 100);
}

// fade in function
function nontext(element) {
  $(element).css('display', 'flex');
  let op = 0.1; // initial opacity

  const timer = setInterval(() => {
    if (op >= 1) {
      clearInterval(timer);
      if (!elementQ.isEmpty) {
        appear(elementQ.dequeue());
      }
    }
    // fading
    $(element).css({
      'opacity': op,
      'filter': `alpha(opacity=${op * 100})`
    });
    op += op * 0.1;
  }, 10);
}

// decision-making function for display style
function appear(element) {
  const paragraph = $(element).find('p');
  if (!paragraph.length) {
    nontext(element);
  } else {
    printChar(element);
  }
}

// end button clicked and end website exp
function finish() {
  // get rid of all past elements that aren't ending text
  [$('.one'),
   $('.two'),
   $('.five1')
  ].forEach(element => {
    element.addClass('fade-out');
    element.one('animationend', () => {
      element.css('display', 'none');
    });
  });

  [$('.three1'),
   $('.four')
  ].forEach(element => elementQ.enqueue(element[0]));

  appear(elementQ.dequeue());
  end.css('display', 'none'); // remove end button 
}

// displays email
function email() {
  elementQ.enqueue($('.five1')[0]);
  appear(elementQ.dequeue());
}

appear(elementQ.dequeue());
