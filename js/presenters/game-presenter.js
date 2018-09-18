import Model from '../models/model';
import createHeader from './header-presenter';
import SpinnerView from '../views/spinner-view';
import PopupView from '../views/popup-view';
import UserStatsView from '../views/user-stats-view';
import OneOfThreeView from '../views/one-of-three-view';
import TwoOfTwoView from '../views/two-of-two-view';
import TinderLikeView from '../views/tinder-like-view';
import initialGameState from '../configs/state';
import App from '../app';
import {
  renderPage,
  appendElement
} from '../lib/util';
import {
  Time,
  Answer,
  PROJECT_ID
} from '../configs/constants';

const LevelView = {
  "one-of-three": OneOfThreeView,
  "two-of-two": TwoOfTwoView,
  "tinder-like": TinderLikeView
};

export default new class GamePresenter {
  constructor() {
    this.model = new class GameModel extends Model {
      get urlRead() {
        return `https://es.dump.academy/pixel-hunter/questions`;
      }

      get urlWrite() {
        return `https://es.dump.academy/pixel-hunter/stats/${this.user}`;
      }
    }(initialGameState);
  }

  init(userName, state = initialGameState) {
    this.model.gameState = this.model.updateState(state);

    if (!this.model.levelData) {
      this.model.user = userName;
      this.spinnerView = new SpinnerView();
      renderPage(this.spinnerView.element);
      this.model
        .load()
        .catch((error) => {
          this.popupView = new PopupView(error);
          renderPage(this.popupView.element);
        })
        .then((data) => {
          this.model.questions = data;
          this.renderLevel(this.model.levelData);
        })
        .then(() => {
          this.spinnerView.removeSpinner();
        });
    } else {
      this.renderLevel(this.model.levelData);
    }
  }

  renderLevel(levelData) {
    this.levelView = new LevelView[levelData.type](levelData);
    renderPage(this.levelView.element);
    this.levelView.showNextLevel = (isAnswerCorrect) => {
      this.onAnswer(isAnswerCorrect);
    };
    this.headerPresenter = createHeader(this.model.gameState, `game`);
    this.headerPresenter.init();
    this.userStatsView = new UserStatsView(this.model.gameState);
    appendElement(this.userStatsView.element);
    this.initTimer();
  }

  initTimer() {
    this.model.gameState = this.model.tick();
    this.updateTimeView();
    this.timer = setTimeout(() => this.initTimer(), 1000);
    if (!this.model.gameState.time) {
      this.onAnswer(false);
    }
  }

  onAnswer(isAnswerCorrect) {
    const timeSpentForAnswer = Time.FOR_ANSWER - this.stopTimer();
    this.model.gameState = this.model.nextLevel();

    if (this.model.isUserInTheGame()) {
      if (isAnswerCorrect) {

        let answerType = Answer.CORRECT;

        if (timeSpentForAnswer < Time.FAST_ANSWER_MAX) {
          answerType = Answer.FAST;
        } else if (timeSpentForAnswer > Time.SLOW_ANSWER) {
          answerType = Answer.SLOW;
        }

        this.model.gameState = this.model.saveAnswer(answerType);
      } else {
        this.model.gameState = this.model.takeAwayLife();
        this.updateLivesView();
        this.model.gameState = this.model.saveAnswer(Answer.WRONG);
      }

      this.init(this.model.userName, this.model.gameState);
    } else {
      this.gameOver();
    }
  }

  gameOver() {
    const body = {
      project: PROJECT_ID,
      stats: this.model.gameState.answers
    };
    this.model.send(body, () => App.showStatsPage(this.model.user));
  }

  stopTimer() {
    if (this.timer) {
      const time = this.model.gameState.time;
      this.model.gameState = this.model.resetTimer();
      clearTimeout(this.timer);
      return time;
    } else {
      return null;
    }
  }

  updateTimeView() {
    this.headerPresenter.view.updateTime(this.model.gameState.time);
  }

  updateLivesView() {
    this.headerPresenter.view.updateLives(this.model.gameState.lives);
  }
}();
