import {
  renderScreen,
  getElementFromTemplate
} from './util';
import game from './game';
import renderBackBtn from './btn-back';
import footer from './footer-page';

const html = getElementFromTemplate(`
  <header class="header">
    <div class="header__back"></div>
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

const form = html.querySelector(`.rules__form`);
const inputUserName = html.querySelector(`.rules__input`);
const buttonSubmitForm = html.querySelector(`.rules__button`);
inputUserName.addEventListener(`input`, function(evt) {
  evt.preventDefault();

  const userInputValue = inputUserName.value;
  buttonSubmitForm.disabled = userInputValue ? false : true;
});

form.addEventListener(`submit`, function(evt) {
  evt.preventDefault();
  if (!buttonSubmitForm.disabled) {
    renderScreen(game);
    renderBackBtn(game);
  }
});

export default html;
