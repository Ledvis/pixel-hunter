import {
  getElementFromTemplate,
  renderScreen
} from './util';

const html = getElementFromTemplate(`
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
`);

let greetingScreen = null;

function getGreetingScreen(template) {
  greetingScreen = template;
}

function onBackBtnClick() {
  renderScreen(greetingScreen);
}

function renderBtnBack(container) {
  let btnBack = document.querySelector(`.back`);

  if (btnBack) {
    btnBack.addEventListener(`click`, onBackBtnClick);
  } else {
    container.querySelector(`.header__back`).insertAdjacentHTML(`afterbegin`, html.innerHTML);
    btnBack = document.querySelector(`.back`);
    btnBack.addEventListener(`click`, onBackBtnClick);
  }
}

export {
  renderBtnBack,
  getGreetingScreen
};
