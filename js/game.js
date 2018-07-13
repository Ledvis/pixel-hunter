import {
  getElementFromTemplate,
  renderScreen
} from './util';
import renderHeader from './game-header';
import renderBtnBack from './back-btn';
import {
  generateLevelsData,
  INITIAL_STATE
} from './data';
import footerTemplate from './page-footer';
import renderStats from './stats';
import getResults from './results';

const gameData = generateLevelsData();
const gameState = Object.assign({}, INITIAL_STATE);

function createGameContainer() {
  return getElementFromTemplate(`
    <header class="header"></header>
    <div class="game"></div>
    ${footerTemplate}
  `);
}

function fillGameLevel(level) {
  let html = ``;
  switch (level.type) {
    case `single`:
      html = `
        <p class="game__task">${level.question}</p>
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${level.answers[0].url}" alt="Option 1" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input name="question1" type="radio" value="painting">
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
              <img src="${level.answers[0].url}" alt="Option 1" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="painting">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src="${level.answers[1].url}" alt="Option 2" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="painting">
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
            <div class="game__option" data-type="${level.answers[0].type}">
              <img src="${level.answers[0].url}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected" data-type="${level.answers[1].type}">
              <img src="${level.answers[1].url}" alt="Option 2" width="304" height="455">
            </div>
            <div class="game__option" data-type="${level.answers[2].type}">
              <img src="${level.answers[2].url}" alt="Option 3" width="304" height="455">
            </div>
          </form>
            `;
      break;
  }

  return html;
}

function switchLevel(index, answer) {
  gameState.answers.push(answer);

  if (!answer.isRight) {
    gameState.livesCount--;
  }

  renderGameLevel(++index);
}

function renderGameLevel(index) {
  if (index === gameData.length || gameData.livesCount === 0) {
    gameState.isOver = true;
  }

  if (!gameState.isOver) {
    const gameBox = gameContainer.querySelector(`.game`);
    const level = gameData[index];
    const gameLevel = fillGameLevel(level);

    gameBox.innerHTML = ``;
    gameBox.insertAdjacentHTML(`afterbegin`, gameLevel);

    switch (level.type) {
      case `single`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          switchLevel(index, {
            isRight: evt.currentTarget.elements[`question1`].value === level.answers[0].type,
            time: 15 // temporary hardcoded value
          });
        });
        break;
      case `double`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          const answers = Array.from(evt.currentTarget.elements).filter((element) => element.checked);

          if (answers.length === 2) {
            switchLevel(index, {
              isRight: answers.every((answer, answerIndex) => {
                return answer.value === level.answers[answerIndex].type;
              })
            });
          }
        });
        break;
      case `triple`:
        Array.from(gameBox.querySelectorAll(`.game__option`)).forEach((option) => {
          option.addEventListener(`click`, (evt) => {
            switchLevel(index, {
              isRight: evt.currentTarget.dataset.type === `painting`,
              time: 15
            });
          });
        });
        break;
    }

    renderHeader(gameContainer, gameState);
    renderStats(gameBox, gameState);
  } else {
    if (gameState.livesNumber > 0) {
      gameState.isWin = true;
    }

    const resultsScreen = getResults(gameState);
    renderScreen(resultsScreen);
    renderBtnBack(resultsScreen);
  }
}

const gameContainer = createGameContainer();

renderGameLevel(0);

export default gameContainer;
