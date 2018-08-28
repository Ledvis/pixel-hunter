import GameModel from '../model/game-model';
import LevelWithOneImage from '../view/level-one-view';
import LevelWithTwoImages from '../view/level-two-view';
import LevelWithThreeImages from '../view/level-three-view';
import createHeader from './header-presenter';
import createUserStat from './user-stat-presenter';
import renderTemplate from '../util/render-template';
import {
  InitialGameState,
  TIME,
  ANSWER_TYPE,
  PROJECT_ID
} from '../util/config';
import App from '../app';
import {
  postData
} from '../util/backend';

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
    this.view.showNextPage = (isAnswerCorrect) => {
      this.onAnswer(isAnswerCorrect);
    };
    this.showNextLevel();
  }

  showNextLevel() {
    const template = this.view.element;
    const levelHeader = createHeader(`game`, this._state).init();
    const levelScreen = renderTemplate(template, levelHeader);
    template.querySelector(`.game`).appendChild(createUserStat(this._state.stats).element);
    this.headerContainer = levelScreen.querySelector(`header`);
    if (this.timer) {
      this.deleteTimer();
    }
    this.initTimer();
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

  initTimer() {
    this._state = this.model.tick();
    this.updateHeader(this._state);
    this.timer = setTimeout(() => this.initTimer(), 1000);
    if (!this._state.time) {
      this.onAnswer(false);
    }
  }

  onAnswer(isAnswerCorrect) {
    const spendAnswerTime = TIME.FOR_ANSWER - this.stopTimer();
    if (isAnswerCorrect) {
      this.model.nextLevel();

      let answerType = ANSWER_TYPE.CORRECT;

      if (spendAnswerTime < TIME.FAST_ANSWER_MAX) {
        answerType = ANSWER_TYPE.FAST;
      } else if (spendAnswerTime > TIME.SLOW_ANSWER_MIN) {
        answerType = ANSWER_TYPE.SLOW;
      }

      this.model.setLevelStat(answerType);
    } else {
      this.model.nextLevel();
      this.model.subtractLive();
      this.model.setLevelStat(ANSWER_TYPE.WRONG);
    }

    this._state = this.model.state;

    if (this.model.isUserInGame()) {
      this.init(this.model.userName, this._state);
    } else {
      this.gameOver();
    }
  }

  deleteTimer() {
    clearTimeout(this.timer);
  }

  stopTimer() {
    if (this.timer) {
      const time = this._state.time;
      this.model.stop();
      this.deleteTimer(this.timer);
      return time;
    }

    return null;
  }

  gameOver() {
    const body = {
      project: PROJECT_ID,
      stats: this._state.stats
    };

    postData(`stats/${this.model.userName}`, body, () => App.showGameStats(this.model.userName));
  }
}

export default new GamePresenter();
