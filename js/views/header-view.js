import AbstractView from './abstract-view';
import {
  GameRule
} from '../configs/constants';

export default class HeaderView extends AbstractView {
  constructor(state, mode) {
    super();
    this.gameState = state;
    this.mode = mode;
  }

  get template() {
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        ${this.mode === `game` ? `
          <h1 class="game__timer">${this.gameState.time}</h1>
          <div class="game__lives">
            ${new Array(GameRule.MAX_LIVES_COUNT - this.gameState.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
            ${new Array(this.gameState.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
          </div>
        ` : ``}
      </header>
    `.trim();
  }

  bind() {
    this._element.querySelector(`.header__back`).addEventListener(`click`, () => {
      this.showPreviousPage();
    });
  }

  updateTime(time) {
    this._element.querySelector(`.game__timer`).innerHTML = time;
  }

  updateLives(lives) {
    if (lives >= 0) {
      this._element.querySelector(`.game__lives`).innerHTML = `
        ${new Array(GameRule.MAX_LIVES_COUNT - lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      `;
    }
  }

  showPreviousPage() {
    throw new Error(`Define this method in presenter`);
  }
}
