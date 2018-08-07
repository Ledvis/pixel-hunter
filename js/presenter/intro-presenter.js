import IntroView from '../view/intro-view';
import App from '../app';
import renderScreen from '../render-screen';

class IntroPresenter {
  init() {
    this._screen = new IntroView();
    this.bind();

    return renderScreen(this._screen.element);
  }

  bind() {
    this._screen.showNextPage = function() {
      App.showGreetingPage();
    };
  }
}

export default new IntroPresenter();
