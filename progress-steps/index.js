const root = document.documentElement;
const progressSteps = document.getElementById("progress-steps");

let step = 0;
const maxSteps = 3;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", () => {
  if (step > 0) {
    step--;
  }

  updateStep();
  updateButtons();
});

next.addEventListener("click", () => {
  if (step < maxSteps) {
    step++;
  }

  updateStep();
  updateButtons();
});

function updateStep() {
  root.style.setProperty("--active-step", step);
  progressSteps.setAttribute("data-active-step", step);
}

function updateButtons() {
  if (step === 0) {
    prev.setAttribute("disabled", true);
  } else {
    prev.removeAttribute("disabled");
  }

  if (step === maxSteps) {
    next.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
  }
}
