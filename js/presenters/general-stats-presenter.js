import GeneralStatsView from '../views/general-stats-view';
import {
  renderPage
} from '../lib/util';

export default new class GeneralStatsPresenter {
  get urlRead() {
    return `https://es.dump.academy/pixel-hunter/stats/${this.user}`;
  }

  init(userName) {
    this.user = userName;
    this.loadStats()
      .then((data) => {
        this.view = new GeneralStatsView(data);
        renderPage(this.view.element);
      });
  }

  loadStats() {
    return fetch(this.urlRead)
      .then((response) => response.json());
  }
}();
