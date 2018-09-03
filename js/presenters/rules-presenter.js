import RulesView from '../views/rules-view';
import App from '../app';

export default new class RulesPresenter {
  init() {
    this.view = new RulesView();
    this.view.renderPage();
    this.bind();
  }

  bind() {
    this.view.showPreviousPage = function() {
      App.showGreetingPage();
    };

    this.view.showNextPage = function() {
      alert(`fuck you`);
    };
  }
}();
