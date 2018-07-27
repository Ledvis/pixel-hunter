import AbstractView from './abstract-view';

export default class ModalErrorView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
      <section class="modal-error">
        <div class="modal-error__inner">
          <h2 class="modal-error__title">Произошла ошибка!</h2>
          <p class="modal-error__text">${this._state.errorMessage}</p>
        </div>
      </section>
    `;
  }
}
