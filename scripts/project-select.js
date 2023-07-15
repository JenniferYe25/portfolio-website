var titles = document.querySelectorAll('.titles .title')
var tabs = document.querySelectorAll('.semi_v_nav button')
var contents = document.querySelectorAll('.inner_most_content')

var web_card = document.querySelectorAll('.web')
var app_card = document.querySelectorAll('.app')
var other_card = document.querySelectorAll('.other')
var cards = [web_card, app_card, other_card]

var names = document.querySelectorAll('.bar_list h3')

function showContent(index){
    tabs.forEach(element => {
        element.style.opacity = 1
    })
    tabs[index].style.opacity = 0.5;
    titles.forEach(element => {
        element.style.display = 'none';
    });
    contents.forEach(element => {
        element.style.display = 'none';
    });
    if(window.innerWidth > 700){
        printChar(titles[index])
        contents[index].style.display = 'flex'

    }else{
        printChar(titles[index])
        contents[index].style.display = 'block'
    }
    names[0].style.outline = "2px solid black"
    names[3].style.outline = "2px solid black"
    names[6].style.outline = "2px solid black"
}

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

function showCards(index, card, project){
    names.forEach(element => {
        element.style.outline = "";
    })
    names[index].style.outline = "2px solid black"

    cards[card].forEach(element => {
        element.style.display = 'none';
    })
    names[index].style.outline = '2 solid black';
    cards[card][project].style.display = 'block'
    cards[card][project].classList.add('fade-in');

}