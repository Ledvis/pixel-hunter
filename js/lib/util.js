import {
  GameRule,
  Answer,
  Score
} from '../configs/constants';

export function getElementFromTemplate(template) {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
}

export function renderPage(element) {
  const centralElement = document.querySelector(`.central`);
  centralElement.innerHTML = ``;
  centralElement.appendChild(element);
}

export function appendElement(element) {
  const centralElement = document.querySelector(`.game`);
  centralElement.appendChild(element);
}

export function copyObject(object) {
  const newObject = Object.assign({}, object);

  for (const key in object) {
    if (object[key] instanceof Array) {
      newObject[key] = object[key].slice();
    }
  }

  return newObject;
}

export function countFinalScore(answers, lives) {
  if (answers.length < GameRule.LEVELS_COUNT) {
    return GameRule.FAIL;
  } else {
    const finallyScores = answers.reduce((sum, answer) => {
      switch (answer) {
        case Answer.CORRECT:
          return sum + Score.CORRECT_ANSWER;
        case Answer.FAST:
          return sum + Score.CORRECT_ANSWER + Score.FAST_ANSWER;
        case Answer.SLOW:
          return sum + Score.CORRECT_ANSWER + Score.SLOW_ANSWER;
      }

      return sum;
    }, 0);
    return finallyScores + lives * Score.EXTRA_LIFE;
  }
}
