import {
  resizeImages
} from '../util/game-utility';
import AbstractView from './abstract-view';

export default class LevelWithThreeImages extends AbstractView {
  constructor(levelData) {
    super();
    this._level = levelData;
    const typePaintingAmount = levelData.answers.filter((answer) => answer.type === `painting`).length;
    this._level.typeAnswer = (typePaintingAmount === 1) ? `painting` : `photo`;
  }

  get template() {
    return `
      <div class="game">
      <p class="game__task">${this.levelTitle}</p>
      <form class="game__content  game__content--triple">
        ${this._level.answers.map((option) => `<div class="game__option">
            <img src="${option.image.url}" alt="${option.type}" width="${option.image.width}" height="${option.image.height}">
        </div>`).join(``)}
      </form>
      </div>`;
  }

  get levelTitle() {
    return (this._level.typeAnswer === `painting`) ? `Найдите рисунок среди изображений` : `Найдите фото среди изображений`;
  }

  bind() {
    const frameSize = {
      width: 304,
      height: 455
    };

    resizeImages(this._element, frameSize);

    const pictures = this._element.querySelectorAll(`.game__option`);

    pictures.forEach((pic) => {
      pic.addEventListener(`click`, (ev) => {
        const isCorrectAnswer = ev.target.lastElementChild.alt === this._level.typeAnswer;
        this.showNextLevel(isCorrectAnswer);
      });
    });
  }

  showNextLevel() {}
}
