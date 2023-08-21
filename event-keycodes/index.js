const waitingElement = document.getElementById("waiting");
const contentElement = document.getElementById("content");

window.onload = () => {
  contentElement.style.display = "none";

  window.addEventListener("keydown", (e) => {
    waitingElement.style.display = "none";
    contentElement.style.display = "flex";

    document.getElementById("key").innerHTML = e.key === " " ? "Space" : e.key;
    document.getElementById("keyCode").innerHTML = e.keyCode;
    document.getElementById("code").innerHTML = e.code;
  });
};
