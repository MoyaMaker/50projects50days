const themeButton = document.querySelector(".theme-button");
const clockHours = document.querySelector(".clock .hours");
const clockMinutes = document.querySelector(".clock .minutes");
const clockSeconds = document.querySelector(".clock .seconds");
const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthsAbbr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
});

setInterval(() => {
  const d = new Date();

  const degPerHour = 360 / 12;
  const degPerMinutes = 360 / 60;
  const degPerSecond = 360 / 60;

  clockHours.style.transform = `rotate(${
    (d.getHours() - 12) * degPerHour + (degPerHour / 60) * d.getMinutes()
  }deg)`;
  clockMinutes.style.transform = `rotate(${d.getMinutes() * degPerMinutes}deg)`;
  clockSeconds.style.transform = `rotate(${d.getSeconds() * degPerSecond}deg)`;

  digitalClock.innerHTML = `${d.getHours() - 12}:${
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
  } ${d.getHours() > 12 ? "PM" : "AM"}`;

  date.innerHTML = `${daysOfWeek[d.getDay()]}, ${
    monthsAbbr[d.getMonth()]
  } <span>${d.getDate()}</date>`;
}, 1000);
