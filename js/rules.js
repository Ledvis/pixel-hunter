import {
  getElementFromTemplate,
  renderScreen
} from './util';
import game1Screen from './game-1';
import greetingScreen from './greeting';
import {
  backBtnTemplate,
  onBackBtnClick
} from './back-btn';
import footer from './page-footer';

const html = getElementFromTemplate(`
  <header class="header">
    <div class="header__back">
      ${backBtnTemplate}
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}
`);

const backButtonScreen = html.querySelector(`.back`);
backButtonScreen.addEventListener(`click`, () => onBackBtnClick(greetingScreen));

const formRules = html.querySelector(`.rules__form`);
const inputRules = html.querySelector(`.rules__input`);
const buttonRules = html.querySelector(`.rules__button`);

function validateForm() {
  buttonRules.disabled = !inputRules.value.length > 0;
}

inputRules.addEventListener(`input`, validateForm);

formRules.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

  if (!buttonRules.disabled) {
    renderScreen(game1Screen);
  }
});

export default html;
