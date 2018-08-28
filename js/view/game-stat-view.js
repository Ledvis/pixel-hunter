import AbstractView from './abstract-view';
import {
  GAME_SETTING,
} from '../util/config';
import {
  countFinalScore
} from '../util/stat-utility';

export default class GameStatView extends AbstractView {
  constructor(userStats) {
    super();
    this._gameData = userStats.reverse();
    this._finalScore = [];

    this._gameData.forEach((game) => {
      const userAnswers = game.stats;
      game.lives = GAME_SETTING.MAX_LIVES_AMOUNT - userAnswers.filter((value) => value === 0).length;
      const finalScore = countFinalScore(userAnswers, game.lives);
      this._finalScore.push(finalScore);
    });
  }
}
