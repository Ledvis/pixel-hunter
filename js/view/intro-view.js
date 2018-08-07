import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
    `;
  }

  bind() {
    this._element.querySelector(`.intro__asterisk`).addEventListener(`click`, (event) => {
      event.preventDefault();
      this.showNextPage();
    });
  }

  showNextPage() {
    throw new Error(`this method should be redefined in presenter`);
  }
}
