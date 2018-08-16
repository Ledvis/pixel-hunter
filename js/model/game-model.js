import {
  loadData
} from '../util/backend';
import {
  tick,
  nextLevel,
  subtractLive
} from '../util/game-utility';
import {
  InitialGameState,
  GAME_SETTING
} from '../util/config';

export default class GameModel {
  constructor(state) {
    this._state = state;
  }

  updateState(newState) {
    this._state = newState;
    return this._state;
  }

  getQuestionsData() {
    return this.questions && this.questions[this._state.level];
  }

  loadQuestionsData() {
    return loadData(`questions`);
  }

  updateQuestionsList(levels) {
    this.questions = levels;
    return this.questions;
  }

  tick(time) {
    return this.updateState(tick(this._state, time));
  }

  stopTimer() {
    this._state.time = InitialGameState.time;
    this.updateState(this._state);
  }

  nextLevel() {
    this.updateState(nextLevel(this._state));
  }

  subtractLive() {
    this.updateState(subtractLive(this._state));
  }

  isUserInGame() {
    return this._state.lives !== -1 && this._state.level < GAME_SETTING.GAME_LEVELS_AMOUNT;
  }
}
