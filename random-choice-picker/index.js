const textarea = document.getElementById("textarea");
const choicesElement = document.getElementById("choices");

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // Call random picker and clean textarea
    randomPicker();

    textarea.value = "";
  } else {
    const choices = getChoicesList();

    let template = "";

    choices.forEach((choice) => {
      if (choice) {
        template += `<span class="choice">${choice}</span>`;
      }
    });

    choicesElement.innerHTML = template;
  }
});

function getChoicesList() {
  const choices = [];

  const splitChoices = textarea.value.split(",");

  splitChoices.forEach((choice) => {
    choices.push(choice.trim());
  });

  return choices;
}

function randomPicker() {
  const choices = choicesElement.children;

  let lastIndex = 0;
  let tries = 0;

  const interval = setInterval(() => {
    choices[lastIndex].classList.remove("selected");

    const random = getRandomInt(0, choices.length);

    lastIndex = random;

    choices[random].classList.add("selected");

    if (tries === 20) {
      clearInterval(interval);
    }

    tries++;
  }, 150);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
