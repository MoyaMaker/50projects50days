const image = document.querySelector(".image");

const dropBoxes = document.querySelectorAll(".drop-box");

image.addEventListener("dragstart", (e) => {
  image.classList.add("hold");

  setTimeout(() => (image.className = "invisible"), 0);
});

image.addEventListener("dragend", (e) => {
  image.className = "image";
});

dropBoxes.forEach((dropBox) => {
  dropBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  dropBox.addEventListener("dragenter", (e) => {
    e.preventDefault();
    dropBox.classList.add("hover");
  });

  dropBox.addEventListener("dragleave", (e) => {
    dropBox.classList.remove("hover");
  });

  dropBox.addEventListener("drop", (e) => {
    dropBox.classList.remove("hover");

    dropBox.append(image);

    image.className = "image";
  });
});
