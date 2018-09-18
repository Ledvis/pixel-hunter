import RulesView from '../views/rules-view';
import App from '../app';
import {
  renderPage
} from '../lib/util';
import createHeader from './header-presenter';

export default new class RulesPresenter {
  init() {
    this.view = new RulesView();
    renderPage(this.view.element);
    createHeader(null, `rules`).init();
    this.bind();
  }

  bind() {
    this.view.showNextPage = function(userName) {
      App.showLevelPage(userName);
    };
  }
}();
