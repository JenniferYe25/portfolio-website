// get all elements needed
const titles = $('.titles .title');
const tabs = $('.semi_v_nav button');
const contents = $('.inner_most_content');

const web_card = $('.web');
const app_card = $('.app');
const other_card = $('.other');
const cards = [web_card, app_card, other_card];

const names = $('.bar_list h3');

// shows rightmost content
function showContent(index) {
    tabs.css('opacity', 1); // ensure all tabs are reset
    tabs.eq(index).css('opacity', 0.5); // select indicator on tab clicked

    // reset all styling on type of project title and title names
    titles.hide();
    contents.hide();

    // ensure if on mobile, display mobile view
    if ($(window).width() > 700) {
        printChar(titles.eq(index));
        contents.eq(index).css('display', 'flex');
    } else {
        printChar(titles.eq(index));
        contents.eq(index).css('display', 'block');
    }
}

// typing animation
function printChar(element) {
    element.css('display', 'flex'); // displays element
    let i = 0;
    const word = element.find('h2').text();
    element.find('h2').text('');

    const id = setInterval(() => {
        if (i >= word.length) {
            clearInterval(id);
        } else {
            element.find('h2').text(element.find('h2').text() + word[i]);
            i++;
        }
    }, 100);
}

// show project detail cards
function showCards(index, card, project) {
    names.css('outline', ''); // removes selected indicator for project titles
    names.eq(index).css('outline', '2px solid black'); // add select indicator for project clicked

    cards[card].hide(); // remove all cards from display

    // display detail card of the project clicked
    cards[card].eq(project).css('display', 'block');
    cards[card].eq(project).addClass('fade-in');
}
