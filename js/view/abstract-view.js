import getElementFromTemplate from '../util/get-template';

export default class AbstractView {
  get template() {
    throw new Error(`get template must be define for view`);
  }

  createElement() {
    return getElementFromTemplate(this.template);
  }

  bind() {
    // Redefine if needed
  }

  getMarkup() {
    this._element = this.createElement();
    this.bind();
  }

  get element() {
    if (!this._element) {
      this.getMarkup();
    }

    return this._element;
  }
}
