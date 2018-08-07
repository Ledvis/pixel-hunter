import FooterView from './view/footer-view';

const mainScreen = document.querySelector(`main.central`);

export default function renderScreen(screen, header) {
  mainScreen.innerHTML = ``;

  if (header) {
    mainScreen.appendChild(header);
  }

  mainScreen.appendChild(screen);
  mainScreen.appendChild(new FooterView().element);
}
