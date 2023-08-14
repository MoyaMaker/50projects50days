const loader = document.getElementById("loader");

window.onload = () => {
  let loadingValue = 0;

  const updateInterval = setInterval(() => {
    loader.innerHTML = `${loadingValue}%`;

    loadingValue++;

    if (loadingValue > 100) {
      clearInterval(updateInterval);
    }
  }, 30);
}