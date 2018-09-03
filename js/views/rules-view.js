import AbstractView from './abstract-view';

export default class RulesView extends AbstractView {
  get template() {
    return `
      ${this.createHeader(`default`)}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled="">Go!</button>
        </form>
      </div>
      ${this.footerTemplate}
    `;
  }

  bind() {
    const inputEl = this._element.querySelector(`.rules__input`);
    const buttonEl = this._element.querySelector(`.rules__button`);
    let inputValue;

    inputEl.addEventListener(`keyup`, () => {
      inputValue = inputEl.value;
      buttonEl.disabled = inputValue.length === 0;
    });

    buttonEl.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.showNextPage(inputValue);
    });

    this._element.querySelector(`.header__back`).addEventListener(`click`, () => {
      this.showPreviousPage();
    });
  }

  showPreviousPage() {
    throw new Error(`Define this method in presenter`);
  }

  showNextPage() {
    throw new Error(`Define this method in presenter`);
  }
}
