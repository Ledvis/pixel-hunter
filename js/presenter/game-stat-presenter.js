import GameStatView from '../view/game-stat-view';
import {
  loadData
} from '../util/backend';

class GameStatPresenter {
  init(userName) {
    function showGameStatView(response) {

    }

    loadData(`stats/${userName}`, showGameStatView);
  }
}

export default new GameStatPresenter();
