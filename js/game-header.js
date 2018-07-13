import {
  getElementFromTemplate
} from './util';
import renderBtnBack from './back-btn';

function createHeader(gameState) {
  return getElementFromTemplate(`
    <div class="header__back"></div>
    <h1 class="game__timer">${gameState.time}</h1>
    <div class="game__lives">
      ${new Array(3 - gameState.livesCount)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      ${new Array(gameState.livesCount)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
    </div>
  `);
}

export default function renderHeader(container, state) {
  const headerBox = container.querySelector(`.header`);
  headerBox.innerHTML = ``;
  const headerHTML = createHeader(state);
  renderBtnBack(headerHTML);
  headerBox.insertAdjacentElement(`afterbegin`, headerHTML);
}
