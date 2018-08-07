import RulesView from '../view/rules-view';
import initHeader from './header-presenter';
import renderScreen from '../render-screen';
import App from '../app';

class RulesPresenter {
  init() {
    this._screen = new RulesView();
    this.bind();

    return renderScreen(this._screen.element, initHeader(`rules`, null).init());
  }

  bind() {
    this._screen.showNextPage = function(userName) {
      App.showGamePage(userName);
    };
  }
}

export default new RulesPresenter();
