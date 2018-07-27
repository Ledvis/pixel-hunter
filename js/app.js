import Model from './model/model';
import Backend from './util/backend';
import IntroPresenter from './presenter/intro-presenter';
import SpinnerPresenter from './presenter/spinner-presenter';
import GreetingsPresenter from './presenter/greetings-presenter';
import ModalErrorPresenter from './presenter/modal-error-presenter';
import {
  GameType
} from './util/config';
import Util from './util/util';

export default class App {
  gameSelector(type, model) {
    switch (type) {
      case GameType.GREETINGS:
        App.showGreetings(model);
        break;
    }
  }

  showIntro() {
    const model = new Model();
    model.addSubscriber(this.gameSelector);
    const backend = new Backend();
    const intro = new IntroPresenter(model);
    const spinner = new SpinnerPresenter(model);

    intro.render();
    spinner.render();

    backend.loadData()
      .then((data) => {
        model._data = data;
      })
      .then(() => {
        const imgList = Util.selectUniqPictures(model._data);
        const imgPromise = Util.initializeImg(imgList);

        return Promise.all(imgPromise);
      })
      .then(() => {
        const greeting = new GreetingsPresenter(model);
        const FADE_TIMEOUT = 500;
        Util.crossFadeIn();
        setTimeout(() => {
          greeting.render();
          Util.crossFadeOut();
        }, FADE_TIMEOUT);
      })
      .catch((error) => {
        model.errorMessage = error.message;
        const modalError = new ModalErrorPresenter(model);
        modalError.render();
      })
      .then(() => {
        spinner.remove();
      });

  }

  static showGreetings(model) {
    const greetings = new GreetingsPresenter(model);
    greetings.render();
  }
}
