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

  const end = $('.end');
  let elementQ = new Queue();
  [$('.one'), $('.two'), end].forEach(function(element) {
    elementQ.enqueue(element[0]);
  });

  // typing animation
  function printChar(element) {
    const paragraph = $(element).find('p');
    if (!paragraph.length) return;

    $(element).css('display', 'grid');
    let i = 0;
    const word = paragraph.text();
    paragraph.text('');

    const id = setInterval(function() {
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

  // fade in function
  function nontext(element) {
    $(element).css('display', 'flex');
    let op = 0.1;

    const timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
        if (!elementQ.isEmpty) {
          appear(elementQ.dequeue());
        }
      }
      $(element).css('opacity', op);
      $(element).css('filter', 'alpha(opacity=' + op * 100 + ')');
      op += op * 0.1;
    }, 10);
  }

  // decision making function for display style
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
    [
      $('.one'), $('.two'), $('.five1')
    ].forEach(function(element) {
      element.addClass('fade-out');
      element.on('animationend', function() {
        $(this).css('display', 'none');
      });
    });

    [
      $('.three1'), $('.four'), $('.gif')
    ].forEach(function(element) {
      elementQ.enqueue(element[0]);
    });

    appear(elementQ.dequeue());
    end.css('display', 'none');
  }

  // displays email
  function email() {
    elementQ.enqueue($('.five1'));
    appear(elementQ.dequeue());
  }

  appear(elementQ.dequeue());

  const apiKey = 'medbyVVK7sVOtk26U1IhbS96DOiYaerM';

  function fetchRandomGIF(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=g`;

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      const gifUrl = data.data.images.original.url;
      const gifContainer = $('#gifContainer');
      gifContainer.html(`<img src="${gifUrl}" alt="${tag} GIF" style="width:15rem">`);
    })
    .fail(function(error) {
      console.error('Error fetching random GIF:', error);
    });
  }
