import AbstractView from './abstract-view';
import {
  GAME_SETTING
} from '../util/config';
import {
  countFinalScore
} from '../util/stat-utility';

export default class StatView extends AbstractView {
  constructor(userStats) {
    super();
    this._gameData = userStats.reverse();
    this._finalScore = [];

    this._gameData.forEach((game) => {
      const stats = game.stats;
      game.lives = GAME_SETTING.MAX_AMOUNT_LIVES - stats.filter((value) => value === 0).length;
      const finalScore = countFinalScore(stats, game.lives);
      this._finalScores.push(finalScore);
    });
  }
}
