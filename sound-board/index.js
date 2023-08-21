const container = document.querySelector(".container");
let soundElement;

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    playSound(e.target.textContent);
  }
});

function playSound(sound) {

  if (soundElement) {
    soundElement.pause();
  }

  switch (sound) {
    case "applause":
      soundElement = new Audio("./sounds/applause.mp3");
      break;
    case "boo":
      soundElement = new Audio("./sounds/boo.mp3");
      break;
    case "gasp":
      soundElement = new Audio("./sounds/gasp.mp3");
      break;
    case "tada":
      soundElement = new Audio("./sounds/tada.mp3");
      break;
    case "victory":
      soundElement = new Audio("./sounds/victory.mp3");
      break;
    case "wrong":
      soundElement = new Audio("./sounds/wrong.mp3");
      break;
    default:
      break;
  }
  soundElement.play();
}
