import GreetingView from '../views/greeting-view';
import App from '../app';

export default new class GreetingPresenter {
  init() {
    this.view = new GreetingView();
    this.view.renderPage();
    this.bind();
  }

  bind() {
    this.view.showPreviousPage = function() {
      App.showWelcomePage();
    };

    this.view.showNextPage = function() {
      App.showRulesPage();
    };
  }
}();
