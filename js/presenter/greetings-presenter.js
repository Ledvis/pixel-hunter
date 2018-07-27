import AbstractPresenter from './abstract-presenter';
import GreetingsView from '../view/greetings-view';
import {
  GameType
} from '../util/config';

export default class GreetingsPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GreetingsView(model);
    this._element = this._view.element;
    this._view.onAnswer = function() {
      this.onAnswer();
    };
  }

  onAnswer() {
    this._model.notifySubscribers(GameType.RULES, this._model);
  }
}
