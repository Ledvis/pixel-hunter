import AbstractPresenter from './abstract-presenter';
import ModalErrorView from '../view/modal-error-view';

export default class ModalErrorPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new ModalErrorView(model);
    this._element = this._view.template;
  }

  render() {
    document.querySelector(`body`).insertAdjacentHTML(`beforeend`, this._element);
  }
}
