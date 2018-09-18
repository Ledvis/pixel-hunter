import WelcomeView from '../views/welcome-view';
import App from '../app';
import {
  renderPage
} from '../lib/util';


export default new class WelcomePresenter {
  init() {
    this.pageView = new WelcomeView();
    renderPage(this.pageView.element);
    this.bind();
  }

  bind() {
    this.pageView.showNextPage = function() {
      App.showGreetingPage();
    };
  }
}();
