$(document).ready(function() {
  const img = $("#me");
  const aboutProject = $("#about_project");

  if (about_project.length) { // another way of saying found element
    about_project.on("click", function() {
      const src = img.attr("src");
      const newSrc = src === "../assets/me.jpg" ? "../assets/craft.jpg" : "../assets/me.jpg";
      img.attr("src", newSrc);
    });
  }
});