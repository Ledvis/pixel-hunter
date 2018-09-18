import AbstractView from './abstract-view';
import {
  GameRule,
  Answer
} from '../configs/constants';

export default class UserStatsView extends AbstractView {
  constructor(levelData) {
    super(levelData);
  }

  get template() {
    return `
      <div class="stats">
        <ul class="stats">
          ${this._data.stats.map((answer) => this.generateStats(answer)).join(``)}
          ${new Array(GameRule.LEVELS_COUNT - this._data.stats.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
        </ul>
      </div>
    `.trim();
  }

  generateStats(answer) {
    switch (answer) {
      case Answer.WRONG:
        return `<li class="stats__result stats__result--wrong"></li>`;

      case Answer.CORRECT:
        return `<li class="stats__result stats__result--correct"></li>`;

      case Answer.FAST:
        return `<li class="stats__result stats__result--fast"></li>`;

      case Answer.SLOW:
        return `<li class="stats__result stats__result--slow"></li>`;
    }
  }
}
