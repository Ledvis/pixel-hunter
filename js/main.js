const SCREEN_IDS = [
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
];

const screens = SCREEN_IDS.map((id) => document.querySelector(`#${id}`));
const mainTemplate = document.querySelector(`.central`);
let currentIndex = 0;
let isAlt = false;

function clearScreen() {
  mainTemplate.innerHTML = ``;
}

function renderScreen(index) {
  if (screens[index]) {
    currentIndex = index;

    clearScreen();

    const currentScreen = screens[index].content;
    mainTemplate.appendChild(currentScreen.cloneNode(true));
  }
}

function navigateForward() {
  renderScreen(currentIndex + 1);
}

function navigateBackward() {
  renderScreen(currentIndex - 1);
}

function changeScreen(evt) {
  if (evt.keyCode === 18) {
    isAlt = true;
  }

  if (evt.keyCode === 39 && isAlt) {
    navigateForward();
  } else if (event.keyCode === 37 && isAlt) {
    navigateBackward();
  }
}

function disableAltKey(evt) {
  if (evt.keyCode === 18) {
    isAlt = false;
  }
}

document.addEventListener(`keydown`, changeScreen);
document.addEventListener(`keyup`, disableAltKey);

renderScreen(currentIndex);
