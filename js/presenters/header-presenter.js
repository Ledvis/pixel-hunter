import App from '../app';
import HeaderView from '../views/header-view';

class HeaderPresenter {
  constructor(state, mode) {
    this.gameState = state;
    this.mode = mode;
  }

  init() {
    this.view = new HeaderView(this.gameState, this.mode);
    document.querySelector(`.central`).insertAdjacentElement(`afterbegin`, this.view.element);
    this.bind();
  }

  bind() {
    this.view.showPreviousPage = function() {
      switch (this.mode) {
        case `game`:
          App.showRulesPage();
          break;

        case `rules`:
          App.showGreetingPage();
          break;

        case `greeting`:
          App.showWelcomePage();
          break;
      }
    };
  }
}

export default function(data, mode) {
  return new HeaderPresenter(data, mode);
}
