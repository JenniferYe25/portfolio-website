// jQuery version of Queue class
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

// jQuery version of getting all elements needed
const index1 = $('.one');
const index2 = $('.two');
const index3 = $('.three');
const index4 = $('.four');
const index5 = $('.five');

const submit = $('.submit');
const nameErr = $('.op');
const form = $('#Form');

let elementQ = new Queue();
const elements = [index1, index2, index3];

let username = "";

elements.forEach(function (element) {
  elementQ.enqueue(element);
});

// jQuery version of printChar function
function printChar(element) {
  const paragraph = element.find('p');
  if (!paragraph.length) return; // checking if queue is empty

  element.css('display', 'grid'); // displays element

  let i = 0;
  const word = paragraph.text();
  paragraph.text('');

  const id = setInterval(function () {
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

// jQuery version of nontext function
function nontext(element) {
  element.css('display', 'grid');
  let op = 0.1; // initial opacity

  const timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.css('opacity', op);
    element.css('filter', `alpha(opacity=${op * 100})`);
    op += op * 0.1;
  }, 10);

  if (!elementQ.isEmpty) {
    appear(elementQ.dequeue());
  }
}

// jQuery version of appear function
function appear(element) {
  if (!element.find('p').length) {
    // if has something to type out
    nontext(element);
  } else {
    printChar(element);
  }
}

// jQuery version of validateName function
function validateName(event) {
  event.preventDefault();

  username = form.find("[name='name']").val();
  if (!username) {
    // if user entered nothing
    nameErr.css('display', 'grid'); // display error message
  } else {
    // remove any error messages shown
    if (nameErr.css('display') !== 'none') {
      nameErr.css('display', 'none');
    }
    // make field not editable
    form.find('#name').prop('readonly', true);
    submit.css('display', 'none'); // remove submit button

    // add fade out animation and remove elements
    index1.addClass('fade-out');
    index2.addClass('fade-out');
    index1.on('animationend', function () {
      index1.css('display', 'none');
    });
    index2.on('animationend', function () {
      index2.css('display', 'none');
    });

    // replace text with user's name
    const $element = $('#include-name');
    $element.html($element.html().replace('var', username));

    elementQ.enqueue(index4);
    elementQ.enqueue(index5);
    appear(elementQ.dequeue());
  }
}

// Calling a function during form submission.
form.on('submit click', validateName);

appear(elementQ.dequeue());
