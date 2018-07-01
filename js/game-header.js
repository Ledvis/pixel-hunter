import {
  getElementFromTemplate
} from './util';

const initialState = {
  livesCount: 3,
  time: 0
};

const html = getElementFromTemplate(`
  <header class="header">
    <div class="header__back"></div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      ${new Array(3 - initialState.livesCount)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      ${new Array(initialState.livesCount)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
    </div>
  </header>
`);

export default function renderHeader(container) {
  container.insertAdjacentElement(`afterbegin`, html);
}
