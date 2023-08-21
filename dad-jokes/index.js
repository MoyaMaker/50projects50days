const jokeBox = document.getElementById("joke");
const buttonGetJoke = document.getElementById("getJoke");

async function getDadJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const json = await response.json();

  jokeBox.innerHTML = json.joke;
}

buttonGetJoke.addEventListener("click", () => {
  getDadJokes();
});

window.onload = () => {
  getDadJokes();
};
