const miniGlassList = document.querySelectorAll(".mini-glass");
const emptyGlassElement = document.querySelector(".empty");
const waterElement = document.querySelector(".water");

let lastIndex = -1;

miniGlassList.forEach((miniGlass, index) => {
  miniGlass.addEventListener("click", () => {
    mismarkMiniGlass();

    markMiniGlassSelected(lastIndex === index ? index - 1 : index);

    updatePercentageOfWater(lastIndex === index ? index : index + 1);
    waterRemained(lastIndex === index ? index : index + 1);

    lastIndex = lastIndex === index ? -1 : index;
  });
});

function markMiniGlassSelected(maxMark) {
  for (let i = 0; i <= maxMark; i++) {
    miniGlassList[i].classList.add("full");
  }
}

function mismarkMiniGlass() {
  for (let i = 0; i < miniGlassList.length; i++) {
    miniGlassList[i].classList.remove("full");
  }
}

function waterRemained(selectedItem) {
  const remained = 2 / miniGlassList.length;

  emptyGlassElement.innerHTML = `
  <span class="empty--title">${2 - remained * selectedItem}L</span>
  <span class="empty--description">Remained</span>
  `;
}

function updatePercentageOfWater(selectedItem) {
  const percentage = 100 / miniGlassList.length;
  const waterPercentage = `${percentage * selectedItem}%`;

  document.documentElement.style.setProperty(
    "--percentage-water",
    waterPercentage
  );

  waterElement.innerHTML = waterPercentage;
}
