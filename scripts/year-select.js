var yearTab = document.querySelectorAll('.content .semi_v_nav button')
var yearContent = document.querySelectorAll('.content .exp_content')

function showContent(index){
    // resets colour to main colour
    yearTab.forEach(element => {
        element.style.color ="#78a2cc"
    })
    // add select indicator for selected tab
    yearTab[index].style.color = '#bfd4db';

    // remove all content
    yearContent.forEach(element => {
        element.style.display = 'none';
    });
    // only display the one that matches the year clicked
    yearContent[index].style.display = 'block'
    yearContent[index].classList.add('fade-in');
}