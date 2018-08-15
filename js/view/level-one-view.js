import {
  resizeImages
} from '../util/game-utility';
import AbstractView from './abstract-view';

export default class LevelWithOneImage extends AbstractView {
  constructor(levelData) {
    super();
    this._level = levelData;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">Угадай, фото или рисунок?</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this._level.answers[0].image.url}" alt="Option 1" width="${this._level.answers[0].image.width}" height="${this._level.answers[0].image.height}">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
      </div>
    `;
  }

  bind() {
    const frameSize = {
      width: 705,
      height: 455
    };
    resizeImages(this._element, frameSize);

    const radioButtons = this._element.querySelectorAll(`input[type="radio"]`);

    radioButtons.forEach((button) => {
      button.addEventListener(`change`, () => {
        const isAnswerCorrect = button.value === this._level.answers[0].type;

        this.showNextPage(isAnswerCorrect);
      });
    });
  }

  showNextPage() {
    throw new Error(`this method should be redefined in presenter`);
  }
}
