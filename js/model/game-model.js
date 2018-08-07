export default class GameModel {
  constructor(state) {
    this._state = state;
  }

  updateState(newState) {
    this._state = newState;
    return this._state;
  }

  getLevelData() {
    return this.questions && this.questions[this._state.level];
  }
}
