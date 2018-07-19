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

const btnBackScreen = html.querySelector(`.back`);
btnBackScreen.addEventListener(`click`, function() {
  renderScreen(greetingScreen);
});

export default function renderBackBtn(container) {
  container.querySelector(`.header__back`).appendChild(html);
}
