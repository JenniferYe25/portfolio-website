$(document).ready(function() {
  const img = $("#me");
  const aboutProject = $("#about_project");

  if (aboutProject.length) {
    aboutProject.click(function() {
      const src = img.attr("src");
      const newSrc = src === "../assets/me.jpg" ? "../assets/craft.jpg" : "../assets/me.jpg";
      img.attr("src", newSrc);
    });
  }
});