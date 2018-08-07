import HeaderView from '../view/header-view';
import App from '../app';

class HeaderPresenter {
  constructor(mode, gameData) {
    this.mode = mode;
    this.data = gameData;
  }

  init() {
    this._screen = new HeaderView(this.mode, this.data);
    this.bind();

    return this._screen.element;
  }

  bind() {
    this._screen.showRulesPage = function() {
      App.showRulesPage();
    };
    this._screen.showWelcomePage = function() {
      App.showWelcomePage();
    };
    this._screen.showGreetingPage = function() {
      App.showGreetingPage();
    };
  }
}

export default function(mode, gameData) {
  return new HeaderPresenter(mode, gameData);
}
