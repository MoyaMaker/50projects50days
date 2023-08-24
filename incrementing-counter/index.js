const counters = document.querySelectorAll(".counter");

Array.from(counters).forEach((counter) => {
  let c = 0;
  let total = Number(counter.getAttribute("data-total"));

  const updateCounter = () => {
    if (c < total) {
      counter.innerHTML = c;
      c += Math.ceil(total / 200);

      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = total;
    }
  };

  updateCounter();
});
