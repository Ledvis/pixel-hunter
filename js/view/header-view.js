/* eslint-disable no-alert */

import AbstractView from './abstract-view';
import {
  GameSetting
} from '../config';

export default class HeaderView extends AbstractView {
  constructor(mode, gameData) {
    super();
    this._mode = mode;
    this._data = gameData;
  }

  get template() {
    if (this._mode) {
      return (this._mode === `game`) ? this.gameHeader : this.defaultHeader;
    } else {
      return false;
    }
  }

  get defaultHeader() {
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
      </header>
    `;
  }

  get gameHeader() {
    return `
      <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      <h1 class="game__timer">${this._data.time}</h1>
      <div class="game__lives">
        ${new Array(GameSetting.MAX_LIVES_AMOUNT - this._data.lives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
        ${new Array(this._data.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>
      </header>
    `;
  }

  bind() {
    this._element.querySelector(`.back`).addEventListener(`click`, (event) => {
      event.preventDefault();

      if (!this._element.querySelector(`.timer`) || confirm(`Вы уверены? Ваша игра не будет сохранена.`)) {
        switch (this._mode) {
          case `game`:
            this.showRulesPage();
            break;

          case `greeting`:
            this.showWelcomePage();
            break;

          case `rules`:
            this.showGreetingPage();
            break;
        }
      }
    });
  }

  showRulesPage() {
    throw new Error(`this method should be redefined in presenter`);
  }

  showWelcomePage() {
    throw new Error(`this method should be redefined in presenter`);
  }

  showGreetingPage() {
    throw new Error(`this method should be redefined in presenter`);
  }
}
