const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

let indexSlider = 0;

const nextButton = document.querySelector(
  ".slider-button.slider-button--right"
);
const prevButton = document.querySelector(".slider-button.slider-button--left");

nextButton.addEventListener("click", nextSlider);
prevButton.addEventListener("click", prevSlider);

function nextSlider() {
  if (indexSlider < images.length - 1) {
    indexSlider++;
  } else {
    indexSlider = 0;
  }

  setSlider();
}

function prevSlider() {
  if (indexSlider === 0) {
    indexSlider = images.length - 1;
  } else {
    indexSlider--;
  }

  setSlider();
}

function setSlider() {
  document.body.style.backgroundImage = `url(${images[indexSlider]})`;

  document.querySelector(
    ".slider"
  ).style.backgroundImage = `url(${images[indexSlider]})`;
}
