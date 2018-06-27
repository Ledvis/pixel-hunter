import {
  renderScreen,
  getElementFromTemplate
} from './util';
import greetingScreen from './greeting';
import footer from './footer-page';

const html = getElementFromTemplate(`
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer}
`);

const asteriskScreenSwitcher = html.querySelector(`.intro__asterisk`);

asteriskScreenSwitcher.addEventListener(`click`, function() {
  renderScreen(greetingScreen);
});

export default html;
