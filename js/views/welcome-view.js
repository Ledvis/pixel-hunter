import AbstractView from './abstract-view';
import App from '../app';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
      ${this.footerTemplate}
    `;
  }

  bind() {
    const asteriskElement = this.content.querySelector(`.intro__asterisk`);
    asteriskElement.addEventListener(`click`, () => {
      this.showNextPage();
    });
  }

  showNextPage() {
    App.showGreetingPage();
  }
}
