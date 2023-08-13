const showWidget = document.getElementById("show-widget");

showWidget.addEventListener("click", () => {
  showWidget.parentElement.classList.toggle("open");
});