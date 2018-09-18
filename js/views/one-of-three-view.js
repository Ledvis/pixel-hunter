import AbstractView from './abstract-view';

export default class LevelOneView extends AbstractView {
  constructor(levelData) {
    super(levelData);
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this._data.question}</p>
        <form class="game__content  game__content--triple">
          ${this._data.answers.map((answer) => {
    return `
              <div class="game__option">
                <img src="${answer.image.url}" alt="${answer.type}" width="${answer.image.width}" height="${answer.image.height}">
              </div>
`;
  }).join(`
    `)}
        </form>
      </div>
      ${this.footerTemplate}
    `;
  }

  bind() {
    const options = this._element.querySelectorAll(`.game__option`);

    options.forEach((option) => {
      option.addEventListener(`click`, (event) => {
        const isAnswerCorrect = event.currentTarget.children[0].alt === `painting`;
        this.showNextLevel(isAnswerCorrect);
      });
    });
  }

  showNextLevel() {
    throw new Error(`This method should be define in presenter`);
  }
}
