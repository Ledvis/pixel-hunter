import introPresenter from './presenter/intro-presenter';
import greetingPresenter from './presenter/greeting-presenter';
import rulesPresenter from './presenter/rules-presenter';
import gamePresenter from './presenter/game-presenter';

const ControllerId = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const Route = {
  [ControllerId.WELCOME]: introPresenter,
  [ControllerId.GREETING]: greetingPresenter,
  [ControllerId.RULES]: rulesPresenter,
  [ControllerId.GAME]: gamePresenter,
};

export default class App {
  static init() {
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`:`);
      this.changeController(id, data);
    };
    onHashChange();
    window.addEventListener(`hashchange`, () => {
      onHashChange();
    });
  }

  static changeController(id, data) {
    const controller = Route[id];

    if (controller) {
      controller.init(data);
    }
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

  static showGamePage(userName) {
    location.hash = `${ControllerId.GAME}:${userName}`;
  }
}
