import AbstractView from './abstract-view';
import {
  GameRule
} from '../configs/constants';
import {
  countFinalScore
} from '../lib/util';
import UserStatsView from './user-stats-view';

export default class GeneralStatsView extends AbstractView {
  constructor(data) {
    super(data);
    this._finalScores = [];

    this._data.forEach((game) => {
      const answers = game.stats;
      const livesLeft = GameRule.MAX_LIVES_COUNT - answers.filter((stat) => stat === 0).length;
      const finalScore = countFinalScore(answers, livesLeft);
      this._finalScores.push(finalScore);
    });
  }

  get template() {
    return `
      <div class="result">
        ${this.titleStat}<br>
        ${this._data.map((game, index) => this.getGameResult(index++)).join(``)}
      </div>
    `.trim();
  }

  get titleStat() {
    return (this._finalScores[0] === GameRule.FAIL) ? `<h1>Поражение!</h1>` : `<h1>Победа!</h1>`;
  }

  getGameResult(gameIndex) {
    const game = this._data[gameIndex];
    const userStat = game.stats;
    const userLives = game.lives;
    const finalScore = countFinalScore(userStat, userLives);

    if (finalScore !== GameRule.FAIL) {
      return `
          <table class="result__table">
          <tr>
            <td class="result__number">${gameIndex}.</td>
            <td colspan="2">
              ${new UserStatsView(game).template}
            </td>
            <td class="result__points">×&nbsp;</td>
            <td class="result__total">
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">
              &nbsp;
              <span class="stats__result stats__result--fast"></span>
            </td>
            <td class="result__points">×&nbsp;</td>
            <td class="result__total">
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;</td>
            <td class="result__total"></td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">
              &nbsp;
              <span class="stats__result stats__result--slow"></span>
            </td>
            <td class="result__points">×&nbsp;</td>
            <td class="result__total">
            </td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">
            </td>
          </tr>
        </table>
      `;
    }

    return `
      <table class="result__table">
        <tr>
          <td class="result__number">${gameIndex}.</td>
            <td colspan="2">

            </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
    `;
  }
}
