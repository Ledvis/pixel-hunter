import {
  getElementFromTemplate
} from './util';

function createStats(state) {
  return getElementFromTemplate(`
    <ul class="stats">
      ${state.answers.map((answer) => `<li class="stats__result stats__result--${answer.isRight ? `correct` : `wrong`}"></li>`).join(``)}
      ${new Array(3 - state.answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
      <!-- <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
    </ul>
  `);
}

export default function renderStats(container, state) {
  container.insertAdjacentElement(`beforeend`, createStats(state));
}
