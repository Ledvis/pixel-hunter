import getElementFromTemplate from './getElementFromTemplate';

const html = getElementFromTemplate(`
<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      padding: 0 20px;
      font-size: 20px;
      line-height: 1;
      border: 2px solid black;
    }
  </style>
  <button class="arrows__btn  arrows__btn--left">⬅</button>
  <button class="arrows__btn  arrows__btn--right">➡</button>
</div>
`);

export default html;
