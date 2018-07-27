import Util from '../util/util';

export default class AbstractView {
  constructor(model) {
    this._model = model;
    this._data = model.levelData;
    this._state = model._state;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = Util.createElement(this.template);
    this.bind(this._element);
    return this._element;
  }

  bind() {
    // bind handlers if required
  }
}
