const TEMPLATE_IDS = [
  `greeting`,
  `game-1`,
  `game-2`,
  `game-3`,
  `rules`,
  `stats`
];

const ARROWS_TEMPLATE = `
  <div class="arrow">
    <style>
      .arrow {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }

      .arrow__btn {
        font-size: 30px;
        line-height: 1;
        padding: 0 15px;
        border: 2px solid black;
      }
    </style>
    <button class="arrow__btn">⬅</button>
    <button class="arrow__btn">➡</button>
  </div>
`;

const DIRECTION = {
  backward: 37,
  forward: 39
};

const screens = TEMPLATE_IDS.map((id) => document.querySelector(`#${id}`));
let mainTemplate = document.querySelector(`.central`);
let currentIndex = 0;

function renderScreen(index) {
  if (screens[index]) {
    currentIndex = index;
    mainTemplate.innerHTML = ``;
    let html = screens[index].content;
    mainTemplate.appendChild(html.cloneNode(true));
  }
}

function navigateLeft() {
  renderScreen(currentIndex - 1);
}

function navigateRight() {
  renderScreen(currentIndex + 1);
}

function changeScreen(evt) {
  if (evt.altKey) {
    switch (evt.keyCode) {
      case DIRECTION.backward:
        navigateLeft();
        break;
      case DIRECTION.forward:
        navigateRight();
        break;
    }
  }
}

document.body.insertAdjacentHTML(`beforeend`, ARROWS_TEMPLATE);

const arrowLeft = document.querySelector(`.arrow__btn:first-of-type`);
const arrowRight = document.querySelector(`.arrow__btn:last-of-type`);

document.addEventListener(`keydown`, changeScreen);
arrowLeft.addEventListener(`click`, navigateLeft);
arrowRight.addEventListener(`click`, navigateRight);
renderScreen(currentIndex);
