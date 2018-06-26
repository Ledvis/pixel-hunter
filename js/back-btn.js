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

function onBackBtnClick(template) {
  renderScreen(template);
}

const btnBack = html.querySelector(`.back`);
btnBack.addEventListener(`click`, onBackBtnClick);

export default html.innerHTML;
