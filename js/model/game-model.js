import {
  loadData,
  postData
} from '../util/backend';
import {
  executeTimer,
  incrementLevel,
  subtractLive,
  setNewLevelStat
} from '../util/game-utility';
import {
  InitialGameState,
  GAME_SETTING
} from '../util/config';

export default class GameModel {
  constructor(initialState) {
    this.state = initialState;
  }

  updateState(newState) {
    this.state = newState;
    return this.state;
  }

  getQuestionsData() {
    return this.questions && this.questions[this.state.level];
  }

  loadQuestionsData() {
    return loadData(`questions`);
  }

  sendAnswersData(uri, body, callback) {
    postData(uri, body, callback);
  }

  updateQuestionsList(levels) {
    this.questions = levels;
    return this.questions;
  }

  tick() {
    return this.updateState(executeTimer(this.state));
  }

  stop() {
    this.state.time = InitialGameState.time;
    this.updateState(this.state);
  }

  nextLevel() {
    this.updateState(incrementLevel(this.state));
  }

  subtractLive() {
    this.updateState(subtractLive(this.state));
  }

  isUserInGame() {
    return this.state.lives !== -1 && this.state.level < GAME_SETTING.GAME_LEVELS_AMOUNT;
  }

  setLevelStat(answer) {
    this.updateState(setNewLevelStat(this.state, answer));
  }
}
