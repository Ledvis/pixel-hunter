import GameModel from '../model/game-model';
import LevelOneView from '../view/level-one-view';
import {
  InitialGameState
} from '../config';

const GameTemplate = {
  "tinder-like": LevelOneView,
};

class GamePresenter {
  constructor() {
    this.model = new GameModel(InitialGameState);
  }

  generateLevel(levelData) {
    this.view = new GameTemplate[levelData.type](levelData);
  }

  init(userName, state) {
    this.model.userName = userName;
    this._state = this.model.update(state);

    let levelData = this.model.getLevelData();

    if (!levelData) {
      function loadLevelData() {

      }
    }
  }
}

export default new GamePresenter();
