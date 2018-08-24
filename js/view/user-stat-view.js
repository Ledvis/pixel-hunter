import AbstractView from './abstract-view';
import {
  GAME_SETTING,
  ANSWER_TYPE
} from '../util/config';

export default class UserStatView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `
      <ul class="stats">
        ${(this._data.map((score) => this.getLevelResults(score)).join(``))}
        ${new Array(GAME_SETTING.GAME_LEVELS_AMOUNT - this._data.length).fill(`<li class="stats__result stats__result--unknown"></li>`)}
      </ul>
    `.trim();
  }

  getLevelResults(answerType) {
    switch (answerType) {
      case ANSWER_TYPE.CORRECT:
        return `<li class="stats__result stats__result--correct"></li>`;
      case ANSWER_TYPE.FAST:
        return `<li class="stats__result stats__result--fast"></li>`;
      case ANSWER_TYPE.SLOW:
        return `<li class="stats__result stats__result--slow"></li>`;
      case ANSWER_TYPE.WRONG:
        return `<li class="stats__result stats__result--wrong"></li>`;
      default:
        return ``;
    }
  }
}
