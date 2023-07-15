const img = document.getElementById("me");
const about_project = document.getElementById("about_project");

if(about_project != null){
  about_project.onclick = function () {
    let src = img.getAttribute("src");
    if (src === "../assets/about img.jpg") {
      img.setAttribute("src", "../assets/craft.jpg");
    } else {
      img.setAttribute("src", "../assets/about img.jpg");
    }
  };
}