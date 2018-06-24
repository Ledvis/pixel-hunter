const SCREEN_IDS = [
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
];

const ARROWS_TEMPLATE = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn  arrows__btn--left"><-</button>
    <button class="arrows__btn  arrows__btn--right">-></button>
  </div>
`;

const screens = SCREEN_IDS.map((id) => document.querySelector(`#${id}`));
const mainTemplate = document.querySelector(`.central`);
let currentIndex = 0;

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
  if (evt.altKey) {
    switch (evt.keyCode) {
      case 39:
        navigateForward();
        break;
      case 37:
        navigateBackward();
        break;
    }
  }
}

function showNavigationArrows() {
  document.body.insertAdjacentHTML(`beforeend`, ARROWS_TEMPLATE);
}

function addAppHandlers() {
  document.addEventListener(`keydown`, changeScreen);

  const leftArrow = document.querySelector(`.arrows__btn--left`);
  const rightArrow = document.querySelector(`.arrows__btn--right`);

  leftArrow.addEventListener(`click`, navigateBackward);
  rightArrow.addEventListener(`click`, navigateForward);
}

showNavigationArrows();
addAppHandlers();
renderScreen(currentIndex);
