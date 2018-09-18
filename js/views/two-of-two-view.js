import AbstractView from './abstract-view';

export default class TwoOfTwoView extends AbstractView {
  constructor(levelData) {
    super(levelData);
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._data.question}</p>
        <form class="game__content">
          ${this._data.answers.map((answer, index) => {
    return `
      <div class="game__option">
        <img src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height} alt="Option ${index + 1}">
        <label class="game__answer game__answer--photo">
          <input name="question${index + 1}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--painting">
          <input name="question${index + 1}" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>`;
  }).join(`
    `)}
        </form>
      </div>
      ${this.footerTemplate}
    `;
  }

  bind() {
    const buttons = this._element.querySelectorAll(`input[type="radio"]`);
    let firstAnswer = ``;
    let secondAnswer = ``;

    buttons.forEach((button) => {
      button.addEventListener(`change`, (event) => {
        if (event.currentTarget.name === `question1`) {
          firstAnswer = event.currentTarget.value;
        } else {
          secondAnswer = event.currentTarget.value;
        }

        if (firstAnswer && secondAnswer) {
          const isAnswerCorrect = firstAnswer === this._data.answers[0].type && secondAnswer === this._data.answers[1].type;
          this.showNextLevel(isAnswerCorrect);
        }
      });
    });
  }

  showNextLevel() {
    throw new Error(`This method should be define in presenter`);
  }
}
