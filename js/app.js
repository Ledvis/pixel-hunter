import welcomePresenter from './presenters/welcome-presenter';
import greetingPresenter from './presenters/greeting-presenter';
import rulesPresenter from './presenters/rules-presenter';
import gamePresenter from './presenters/game-presenter';
import generalStatsPresenter from './presenters/general-stats-presenter';

const ControllerId = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const Route = {
  [ControllerId.WELCOME]: welcomePresenter,
  [ControllerId.GREETING]: greetingPresenter,
  [ControllerId.RULES]: rulesPresenter,
  [ControllerId.GAME]: gamePresenter,
  [ControllerId.STATS]: generalStatsPresenter,
};

export default class App {
  static init() {
    function changeController(pageId, userName) {
      const controller = Route[pageId];

      if (controller) {
        controller.init(userName);
      } else {
        return;
      }
    }

    function onHashChange() {
      const hashValue = location.hash.replace(`#`, ``);
      const [pageId, userName] = hashValue.split(`:`);
      changeController(pageId, userName);
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

  static showLevelPage(userName) {
    location.hash = `${ControllerId.GAME}:${userName}`;
  }

  static showStatsPage(userName) {
    location.hash = `${ControllerId.STATS}:${userName}`;
  }
}
