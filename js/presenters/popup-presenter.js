import PopupView from '../views/popup-view';

export default new class PopupPresenter {
  init() {
    this.view = new PopupView();
    this.view.renderPage();
  }
}();
