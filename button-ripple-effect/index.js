const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log(e);
  button.style.setProperty("--before-top", `${e.offsetY}px`);
  button.style.setProperty("--before-left", `${e.offsetX}px`);
  button.classList.add("ripple");

  setTimeout(() => {
    button.classList.remove("ripple");
  }, 500);
});
