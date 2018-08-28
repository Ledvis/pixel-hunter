import GameStatView from '../view/game-stat-view';
import {
  PROJECT_ID
} from '../util/config';
import {
  loadData
} from '../util/backend';

class GameStatPresenter {
  init(userName) {
    function showGameStatView(response) {
      const playedGames = [];

      response.forEach((game) => {
        if (game.project === PROJECT_ID) {
          playedGames.push(game);
        }
      });

      const screen = new GameStatView(playedGames);
    }

    loadData(`stats/${userName}`, showGameStatView);
  }
}

export default new GameStatPresenter();
