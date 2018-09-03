import welcomePresenter from './presenters/welcome-presenter';
import greetingPresenter from './presenters/greeting-presenter';
import rulesPresenter from './presenters/rules-presenter';

const ControllerId = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`
};

const Route = {
  [ControllerId.WELCOME]: welcomePresenter,
  [ControllerId.GREETING]: greetingPresenter,
  [ControllerId.RULES]: rulesPresenter
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

  static showWelcomePage() {
    location.hash = ControllerId.WELCOME;
  }

  static showGreetingPage() {
    location.hash = ControllerId.GREETING;
  }

  static showRulesPage() {
    location.hash = ControllerId.RULES;
  }
}
