var yearTab = document.querySelectorAll('.content .semi_v_nav button')
var yearContent = document.querySelectorAll('.content .exp_content')

// from youtube video 
function showContent(index){
    yearTab.forEach(element => {
        element.style.color ="#78a2cc"
    })
    yearTab[index].style.color = '#bfd4db';
    yearContent.forEach(element => {
        element.style.display = 'none';
    });
    // yearContent[index].style.visibility = "hidden"
    yearContent[index].style.display = 'block'
    yearContent[index].classList.add('fade-in');
}