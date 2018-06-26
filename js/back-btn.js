import {
  renderScreen
} from './util';

const html = `
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
`;

function onBackBtnClick(template) {
  renderScreen(template);
}

export {
  html as backBtnTemplate, onBackBtnClick
};
