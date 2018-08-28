import GreetingView from '../views/greeting-view';

export default new class GreetingPresenter {
  init() {
    this.view = new GreetingView();
    this.view.renderPage();
  }
}();
