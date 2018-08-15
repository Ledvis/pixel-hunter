import App from '../app';
import GreetingView from '../view/greeting-view';
import initHeader from './header-presenter';
import renderTemplate from '../util/render-template';

class GreetingPresenter {
  init() {
    this._screen = new GreetingView();
    this.bind();

    return renderTemplate(this._screen.element, initHeader(`greeting`, null).init());
  }

  bind() {
    this._screen.showNextPage = function() {
      App.showRulesPage();
    };
  }
}

export default new GreetingPresenter();
