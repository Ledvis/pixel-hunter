import getElementFromTemplate from '../util';

export default class AbstractView {
  get template() {
    throw new Error(`get template must be define for view`);
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {
    // Define bind if needed
  }

  getMarkup() {
    this._element = this.render();
    this.bind();
  }

  getElement() {
    if (!this._element) {
      this.getMarkup();
    }

    return this._element;
  }
}
