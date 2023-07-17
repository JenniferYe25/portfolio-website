// get all eleemnts needed
const titles = document.querySelectorAll('.titles .title')
const tabs = document.querySelectorAll('.semi_v_nav button')
const contents = document.querySelectorAll('.inner_most_content')

const web_card = document.querySelectorAll('.web')
const app_card = document.querySelectorAll('.app')
const other_card = document.querySelectorAll('.other')
const cards = [web_card, app_card, other_card]

const names = document.querySelectorAll('.bar_list h3')

// shows right most content
function showContent(index){
    tabs.forEach(element => { // ensure all tabs are reset
        element.style.opacity = 1
    })
    tabs[index].style.opacity = 0.5; // select indicator on tab clicked

    // reset all styling on type of project title and title names
    titles.forEach(element => {
        element.style.display = 'none';
    });
    contents.forEach(element => {
        element.style.display = 'none';
    });

    // ensure if on mobile, display mobile view
    if(window.innerWidth > 700){
        printChar(titles[index])
        contents[index].style.display = 'flex'

    }else{
        printChar(titles[index])
        contents[index].style.display = 'block'
    }
}

// typing animation 
function printChar(element) {
    element.style.display = "flex" // displays element
  
    let i = 0;
    var word = element.querySelector('h2').innerText
    element.querySelector('h2').textContent  = "";
  
    let id = setInterval(() => {
      if (i >= word.length) {
        clearInterval(id)
      }else{
        element.querySelector('h2').textContent += word[i];
        i++;
      }
    }, 100);
  }

// show project detail cards
function showCards(index, card, project){
    // removes selected indicator for project titles
    names.forEach(element => {
        element.style.outline = "";
    })
    names[index].style.outline = "2px solid black" // add select indicator for project clicked

    // remvoe all cards from display
    cards[card].forEach(element => {
        element.style.display = 'none';
    })

    // display detail card of the project clicked
    cards[card][project].style.display = 'block'
    cards[card][project].classList.add('fade-in');

}