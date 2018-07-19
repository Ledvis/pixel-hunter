import {
  getElementFromTemplate,
} from './util';
import renderBtnBack from './btn-back';

function createHeader(state) {
  let html = getElementFromTemplate(`<header class="header">
      <div class="header__back">
      </div>
      <h1 class="game__timer">${state.time}</h1>
      <div class="game__lives">
        ${new Array(3 - state.livesCount)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
        ${new Array(state.livesCount)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>
    </header>
  `);
  return html;
}

export function renderHeader(container, state) {
  if (!document.querySelector(`.header`)) {
    const headerContainer = createHeader(state);
    renderBtnBack(headerContainer);
    container.insertAdjacentElement(`beforebegin`, headerContainer);
  }
}
