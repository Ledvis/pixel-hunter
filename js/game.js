import {
  getElementFromTemplate,
  renderScreen
} from './util';
import {
  generateGameData,
  INITIAL_GAME_STATE
} from './data';
import {
  renderHeader
} from './game-header';
import renderBtnBack from './btn-back';
import renderStats from './stats';
import createResults from './results';
import footer from './footer-page';

const gameContainer = getElementFromTemplate(`<div class="game"></div>${footer}`);
const gameData = generateGameData();
const gameState = Object.assign({}, INITIAL_GAME_STATE);

function fillGameLevel(level) {
  let html = ``;

  switch (level.type) {
    case `single`:
      html = `
        <p class="game__task">Угадай, фото или рисунок?</p>
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
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
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
        <p class="game__task">Найдите рисунок среди изображений</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-type="photo">
            <img src="${level.answers[0].image}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected" data-type="paint">
            <img src="${level.answers[1].image}" alt="Option 2" width="304" height="455">
          </div>
          <div class="game__option" data-type="photo">
            <img src="${level.answers[2].image}" alt="Option 3" width="304" height="455">
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
  renderGame(++index);
}

function renderGame(index) {
  if (index === gameData.length || gameState.livesCount === 0) {
    gameState.isOver = true;
  }

  if (!gameState.isOver) {
    const level = gameData[index];
    const gameBox = gameContainer.querySelector(`.game`);
    gameBox.innerHTML = ``;
    gameBox.insertAdjacentHTML(`afterbegin`, fillGameLevel(level));

    switch (level.type) {
      case `single`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          switchLevel(index, {
            isRight: evt.currentTarget.elements[`question1`].value === level.answers[0].type,
            time: 15 // Temporary hardcoded value
          });
        });
        break;

      case `double`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          const answers = Array.from(evt.currentTarget.elements).filter((element) => element.checked);

          if (answers.length === 2) {
            switchLevel(index, {
              isRight: answers.every((answer, answerIndex) => {
                return answer === level.answers[answerIndex].type;
              }
              ),
              time: 15 // Temporary hardcoded value
            });
          }
        });
        break;
      case `triple`:
        gameBox.querySelectorAll(`.game__option`).forEach((gameOption) => {
          return gameOption.addEventListener(`click`, (evt) => {
            switchLevel(index, {
              isRight: evt.target.dataset.type === `paint`,
              time: 15
            });
          });
        });
        break;
    }

    console.log(gameBox);
    renderHeader(gameBox, gameState);
    renderStats(gameBox, gameState);
  } else {
    const resultsScreen = createResults(gameState);
    renderScreen(resultsScreen);
    renderBtnBack(resultsScreen);
  }
}

renderGame(0);

export default gameContainer;
