const img = document.getElementById("me");
const about_project = document.getElementById("about_project");

if (about_project) { // if element exists
  about_project.addEventListener("click", function () { //if clicked change image
    const src = img.getAttribute("src");
    const newSrc = src === "../assets/me.jpg" ? "../assets/craft.jpg" : "../assets/me.jpg";
    img.setAttribute("src", newSrc);
  });
}
