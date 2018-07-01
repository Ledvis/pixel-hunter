import {
  getElementFromTemplate,
  renderScreen
} from './util';
import {
  renderBtnBack
} from './back-btn';
import game3Screen from './game-3';
import renderHeader from './game-header';
import footer from './page-footer';

const html = getElementFromTemplate(`
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${footer}
`);

const formGame = html.querySelector(`form`);
const inputQuestions = html.querySelectorAll(`[name="question1"]`);

formGame.addEventListener(`input`, function() {
  let result = [...inputQuestions].some((field) => field.checked);
  if (result) {
    renderHeader(game3Screen);
    renderScreen(game3Screen);
    renderBtnBack(game3Screen);
  }
});

export default html;
