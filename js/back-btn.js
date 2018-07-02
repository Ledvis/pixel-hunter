import {
  getElementFromTemplate,
  renderScreen
} from './util';
import greetingScreen from './greeting';

const html = getElementFromTemplate(`
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
`);

let btnBack = html.querySelector(`.back`);
btnBack.addEventListener(`click`, function() {
  renderScreen(greetingScreen);
});

function renderBtnBack(container) {
  container.querySelector(`.header__back`).insertAdjacentElement(`afterbegin`, html);
}

export default renderBtnBack;
