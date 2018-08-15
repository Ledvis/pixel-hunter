import {
  resizeImages
} from '../util/game-utility';
import AbstractView from './abstract-view';

export default class LevelWithTwoImages extends AbstractView {
  constructor(levelData) {
    super();
    this._level = levelData;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          ${this._level.answers.map((option, i) => `<div class="game__option">
            <img src="${option.image.url}" alt="Option ${i + 1}" width="${option.image.width}" height="${option.image.height}">
            <label class="game__answer game__answer--photo">
              <input name="question${i + 1}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question${i + 1}" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>`).join(``)}
        </form>
      </div>
    `;
  }

  bind() {
    const frameSize = {
      width: 468,
      height: 458
    };
    resizeImages(this._element, frameSize);

    const radioBtns = this._element.querySelectorAll(`input[type="radion"]`);

    let firstQuestion;
    let secondQuestion;

    function checkAnswers(first, second) {
      return this._level.answers[0].type === first && this._level.answers[1].type === second;
    }

    radioBtns.forEach((btn) => {
      btn.addEventListener(`change`, (event) => {
        if (event.target.name === `question1`) {
          firstQuestion = event.target.value;
        } else {
          secondQuestion = event.target.value;
        }
      });

      if (firstQuestion && secondQuestion) {
        const isAnswerCorrect = checkAnswers(firstQuestion, secondQuestion);
        this.showNextPage(isAnswerCorrect);
      }
    });
  }

  showNextPage() {
    throw new Error(`this method should be redefined in presenter`);
  }
}
