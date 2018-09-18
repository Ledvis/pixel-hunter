import AbstractView from './abstract-view';

export default class TinderLikeView extends AbstractView {
  constructor(levelData) {
    super(levelData);
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._data.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this._data.answers[0].image.url}" alt="Option 1" width="682" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--painting">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      </div>
      ${this.footerTemplate}
    `;
  }

  bind() {
    const buttons = this._element.querySelectorAll(`input[type="radio"]`);

    buttons.forEach((button) => {
      button.addEventListener(`click`, (event) => {
        const isAnswerCorrect = event.currentTarget.value === this._data.answers[0].type;
        this.showNextLevel(isAnswerCorrect);
      });
    });
  }

  showNextLevel() {
    throw new Error(`This method should be define in presenter`);
  }
}
