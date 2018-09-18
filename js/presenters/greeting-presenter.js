import GreetingView from '../views/greeting-view';
import createHeader from './header-presenter';
import {
  renderPage
} from '../lib/util';
import App from '../app';

export default new class GreetingPresenter {
  init() {
    this.view = new GreetingView();
    renderPage(this.view.element);
    createHeader(null, `greeting`).init();
    this.bind();
  }

  bind() {
    this.view.showNextPage = function() {
      App.showRulesPage();
    };
  }
}();
