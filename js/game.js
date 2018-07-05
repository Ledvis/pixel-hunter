import {
  getElementFromTemplate,
} from './util';
import renderHeader from './game-header';
import {
  generateLevelsData,
  gameState
} from './data';
import footerTemplate from './page-footer';
import renderStats from './stats';

function fillGameLevel(level) {
  let html = ``;
  switch (level.type) {
    case `single`:
      html = `
        <p class="game__task">${level.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${level.answers[0].image}" alt="Option 1" width="705" height="455">
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
        `;
      break;
    case `double`:
      html = `
          <p class="game__task">${level.question}</p>
          <form class="game__content">
            <div class="game__option">
              <img src="${level.answers[0].image}" alt="Option 1" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src="${level.answers[1].image}" alt="Option 2" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          `;
      break;
    case `triple`:
      html = `
          <p class="game__task">${level.question}</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src="${level.answers[0].image}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
              <img src="${level.answers[1].image}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src="${level.answers[2].image}" alt="Option 1" width="304" height="455">
            </div>
          </form>
            `;
      break;
  }

  return html;
}

function renderGameLevel(index) {
  const gameBox = gameContainer.querySelector(`.game`);
  const level = gameData[index];
  const gameLevel = fillGameLevel(level);

  gameBox.innerHTML = ``;

  gameBox.insertAdjacentHTML(`afterbegin`, gameLevel);
}

const gameData = generateLevelsData();
const gameContainer = getElementFromTemplate(`<div class="game"></div>${footerTemplate}`);

renderGameLevel(0);

renderHeader(gameContainer, gameState);
// renderStats(gameContainer.querySelector(`.game`));

export default gameContainer;
