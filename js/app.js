import IntroScreen from './presenter/intro-presenter';

const ControllerId = {
  WELCOME: ``,
  RULES: `rules`,
  GREETING: `greeting`,
  GAME: `game`,
  STATS: `stats`
};

const Route = {
  [ControllerId.WELCOME]: ``
};

export default class App {
  static init() {
    const changeHashHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`:`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, () => {
      changeHashHandler();
    });
    changeHashHandler();
  }
  static changeHash(id, data) {
    const controler = Route[id];
  }
}
