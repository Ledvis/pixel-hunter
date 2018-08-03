import IntroView from '../view/intro-view';
import App from '../app';

class IntroPresenter {
  init() {
    this._screen = new IntroView();
    this.bind();
  }

  bind() {
    this._screen.showNextPage = () => {
      App.showGreeting();
    };
  }
}

export default new IntroPresenter();
