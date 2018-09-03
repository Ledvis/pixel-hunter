import WelcomeView from '../views/welcome-view';
import App from '../app';

export default new class WelcomePresenter {
  init() {
    this.view = new WelcomeView();
    this.view.renderPage();
    this.bind();
  }

  bind() {
    this.view.showNextPage = function() {
      App.showGreetingPage();
    };
  }
}();
