const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  navbarToggle.closest("section.navbar").classList.toggle("open");
});
