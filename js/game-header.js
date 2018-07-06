import {
  getElementFromTemplate
} from './util';

function createHeader(state) {
  return getElementFromTemplate(`
    <header class="header">
      <div class="header__back"></div>
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
}

export default function renderHeader(container, state) {
  container.insertAdjacentElement(`afterbegin`, createHeader(state));
}
