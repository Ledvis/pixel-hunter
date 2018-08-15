import IntroView from '../view/intro-view';
import App from '../app';
import renderTemplate from '../util/render-template';

class IntroPresenter {
  init() {
    this._screen = new IntroView();
    this.bind();

    return renderTemplate(this._screen.element);
  }

  bind() {
    this._screen.showNextPage = function() {
      App.showGreetingPage();
    };
  }
}

export default new IntroPresenter();
