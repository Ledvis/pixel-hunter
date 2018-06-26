import getElementFromTemplate from './get-element-from-template';
import renderScreen from './render-screen';
import game1Screen from './game-1';
import {backBtnTemplate, onBackBtnClick} from './back-btn';

const html = getElementFromTemplate(`
  ${backBtnTemplate}
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
  <footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>
`);

const backButtonScreen = html.querySelector(`.back`);
backButtonScreen.addEventListener(`click`, onBackBtnClick);

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
