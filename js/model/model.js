import {
  InitialState,
  StepValue,
} from '../util/config';
import Observer from '../util/observer';
import Util from '../util/util';

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this._observer = new Observer();
    this.tick = function() {
      if (this._timeValue > 0) {
        this._state.time -= StepValue.TIME;
        Util.updateTimer(this._timeValue);
      }

      Util.paintLowTime(this._timeValue);

      if (this._timeValue === 0) {
        this._die();
      }
    };
  }

  addSubscriber(func) {
    this._observer.subscribe(func);
  }

  notifySubscribers(type, data) {
    this._observer.notifySubscribers(type, data);
  }

  get levelData() {
    return this._data[this._state.level];
  }

  set errorMessage(error) {
    this._state.errorMessage = error;
  }

  _die() {
    this._state.lives -= StepValue.LIVE;
  }
}
