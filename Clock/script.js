let minutes = 0;
let seconds = 0;

let element = document.querySelector("#czas"); // Znajdź element o id "czas"

function formatTime(minutes, seconds) {
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
}

function updateDisplay() {
  element.textContent = formatTime(minutes, seconds);
}

function sekundy() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes < 60) {
    updateDisplay();
    setTimeout(sekundy, 1000);
  }
}

sekundy();
