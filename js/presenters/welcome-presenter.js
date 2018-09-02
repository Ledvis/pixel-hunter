import WelcomeView from '../views/welcome-view';

export default new class WelcomePresenter {
  init() {
    this.view = new WelcomeView();
    this.view.renderPage();
  }
}();
