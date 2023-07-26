$(document).ready(function() {
  $("#output").text("Hello, World!");
  const img = $("#me");
  const about_project = $("#about_project");

  if (about_project.length) { // another way of saying found element
    about_project.on("click", function() {
      const src = img.attr("src");
      const newSrc = src === "../assets/about img.jpg" ? "../assets/craft.jpg" : "../assets/about img.jpg";
      img.attr("src", newSrc);
    });
  }
});
