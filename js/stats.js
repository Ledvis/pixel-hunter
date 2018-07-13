import {
  getElementFromTemplate
} from './util';

function createStats(state) {
  return getElementFromTemplate(`
    <div class="stats">
      <ul class="stats">
        ${state.answers.map((answer) => `<li class="stats__result stats__result--${answer.isRight ? `correct` : `wrong`}"></li>`).join(``)}
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  `);
}

export default function renderStats(container, state) {
  container.insertAdjacentElement(`beforeend`, createStats(state));
}
