import {
  copyObject
} from '../lib/util';
import initialGameState from '../configs/state';
import {
  GameRule
} from '../configs/constants';

export default class Model {
  constructor(state) {
    this.gameState = state;
    this.questions = [];
  }

  get urlRead() {
    throw new Error(`Abstract method. Define URL for model`);
  }

  get urlWrite() {
    throw new Error(`Abstract method. Define URL for model`);
  }

  get levelData() {
    return this.questions && this.questions[this.gameState.level];
  }

  load() {
    return fetch(this.urlRead)
      .then((response) => response.json());
  }

  send(data, successCallback) {
    return fetch(this.urlWrite, {
      method: `post`,
      headers: {
        "Content-type": `application/json; charset=UTF-8`
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          if (successCallback instanceof Function) {
            successCallback();
          }
        }
      });
  }

  updateState(state) {
    const newState = copyObject(state);
    return newState;
  }

  tick() {
    const newState = copyObject(this.gameState);
    newState.time--;
    return newState;
  }

  takeAwayLife() {
    const newState = copyObject(this.gameState);
    newState.lives--;
    return newState;
  }

  nextLevel() {
    const newState = copyObject(this.gameState);
    newState.level++;
    return newState;
  }

  resetTimer() {
    const newState = copyObject(this.gameState);
    newState.time = initialGameState.time;
    return newState;
  }

  isUserInTheGame() {
    return this.gameState.lives > 0 && this.gameState.level < GameRule.LEVELS_COUNT;
  }

  saveAnswer(answer) {
    const newState = copyObject(this.gameState);
    newState.stats.push(answer);
    return newState;
  }
}
