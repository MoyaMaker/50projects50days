const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeExpanded();

    card.classList.add("expanded");
  });
});

function removeExpanded() {
  cards.forEach((card) => {
    card.classList.remove("expanded");
  });
}
