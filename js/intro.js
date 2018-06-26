import getElementFromTemplate from './get-element-from-template';
import renderScreen from './render-screen';
import greetingScreen from './greeting';
import footer from './page-footer';

const html = getElementFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}
`);

const btnShowNextScreen = html.querySelector(`.intro__asterisk`);
btnShowNextScreen.addEventListener(`click`, () => renderScreen(greetingScreen));

export default html;
