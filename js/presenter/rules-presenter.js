import RulesView from '../view/rules-view';
import initHeader from './header-presenter';
import renderTemplate from '../util/render-template';
import App from '../app';

class RulesPresenter {
  init() {
    this._screen = new RulesView();
    this.bind();

    return renderTemplate(this._screen.element, initHeader(`rules`, null).init());
  }

  bind() {
    this._screen.showNextPage = function(userName) {
      App.showGamePage(userName);
    };
  }
}

export default new RulesPresenter();
