import createFooter from '../presenter/footer-presenter';

const mainScreen = document.querySelector(`main.central`);

export default function renderTemplate(screen, header) {
  mainScreen.innerHTML = ``;

  if (header) {
    mainScreen.appendChild(header);
  }

  mainScreen.appendChild(screen);
  mainScreen.appendChild(createFooter().element);

  return mainScreen;
}
