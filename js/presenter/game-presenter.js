import GameModel from '../model/game-model';
import LevelWithOneImage from '../view/level-one-view';
import LevelWithTwoImages from '../view/level-two-view';
import LevelWithThreeImages from '../view/level-three-view';
import createHeader from './header-presenter';
import renderTemplate from '../util/render-template';
import {
  InitialGameState,
  TIME,
  ANSWER
} from '../util/config';

const GameTemplate = {
  "tinder-like": LevelWithOneImage,
  "two-of-two": LevelWithTwoImages,
  "one-of-three": LevelWithThreeImages,
};

class GamePresenter {
  constructor() {
    this.model = new GameModel(InitialGameState);
  }

  init(userName, state = InitialGameState) {
    this.model.userName = userName;
    this._state = this.model.updateState(state);

    let levelData = this.model.getQuestionsData();

    if (!levelData) {
      this.model.loadQuestionsData().then((levels) => {
        this.model.updateQuestionsList(levels);
        levelData = this.model.getQuestionsData();
        this.generateView(levelData);
      });
    } else {
      this.generateView(levelData);
    }
  }

  generateView(levelData) {
    this.view = new GameTemplate[levelData.type](levelData);
    this.view.showNextPage = function(isAnswerCorrect) {
      this.onChosenAnswer(isAnswerCorrect);
    };
    this.showLevel();
  }

  showLevel() {
    const template = this.view.element;
    const gameHeader = createHeader(`game`, this._state).init();
    const screen = renderTemplate(template, gameHeader);
    this.headerContainer = screen.querySelector(`header`);
    this.tick();
  }

  updateHeader(state) {
    const gameHeader = createHeader(`game`, state).init();
    this.headerContainer.innerHTML = ``;
    this.headerContainer.appendChild(gameHeader);

    const timer = this.headerContainer.querySelector(`.game__timer`);

    if (this._state.time <= TIME.LAST_SECONDS) {
      timer.classList.add(`flashing`);
    } else {
      timer.classList.remove(`flashing`);
    }
  }

  tick() {
    this._state = this.model.tick();
    this.updateHeader(this._state);
    this.timer = setTimeout(() => this.tick(), 1000);
    if (!this._state.time) {
      this.onChosenAnswer(false);
    }
  }

  onChosenAnswer(isAnswerCorrect) {
    const spendAnswerTime = TIME.FOR_ANSWER - this.stopTimer();
    if (isAnswerCorrect) {
      this.model.nextLevel();


    }
  }

  stopTimer() {
    if (this.timer) {
      const time = this._state.time;
      this.model.stopTimer();
      clearTimeout(this.timer);
      return time;
    }

    return null;
  }
}

export default new GamePresenter();