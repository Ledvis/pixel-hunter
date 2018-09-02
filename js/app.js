import welcomePresenter from './presenters/welcome-presenter';
import greetingPresenter from './presenters/greeting-presenter';

const ControllerId = {
  WELCOME: ``,
  GREETING: `greeting`
};

const Route = {
  [ControllerId.WELCOME]: welcomePresenter,
  [ControllerId.GREETING]: greetingPresenter
};

export default class App {
  static init() {
    function changeController(id, data) {
      const controller = Route[id];

      if (controller) {
        controller.init();
      } else {
        return;
      }
    }

    function onHashChange() {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, userName] = hashValue.split(`:`);
      changeController(id, userName);
    }

    window.addEventListener(`hashchange`, () => onHashChange());
    onHashChange();
  }

  static showGreetingPage() {
    location.hash = ControllerId.GREETING;
  }
}
