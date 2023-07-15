var titles = document.querySelectorAll('.titles .title')
var tabs = document.querySelectorAll('.semi_v_nav button')
var contents = document.querySelectorAll('.inner_most_content')

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
        titles[index].style.display = 'flex'
        contents[index].style.display = 'flex'
    }else{
        titles[index].style.display = 'flex'
        contents[index].style.display = 'block'
    }
}