const navButton = document.getElementById("navigation");
const contentBox = document.getElementById("content");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("open");

  contentBox.classList.toggle("open");
})