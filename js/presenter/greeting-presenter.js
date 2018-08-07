import App from '../app';
import GreetingView from '../view/greeting-view';
import initHeader from './header-presenter';
import renderScreen from '../render-screen';

class GreetingPresenter {
  init() {
    this._screen = new GreetingView();
    this.bind();

    return renderScreen(this._screen.element, initHeader(`greeting`, null).init());
  }

  bind() {
    this._screen.showNextPage = function() {
      App.showRulesPage();
    };
  }
}

export default new GreetingPresenter();
