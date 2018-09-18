import AbstractView from './abstract-view';

export default class PopupView extends AbstractView {
  constructor(message) {
    super();
    this._message = message;
  }

  get template() {
    return `
      <div class ="popup">
        <style>
        .popup {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40vw;
          height: 40vh;
          margin-top: 100px;
          color: white;
          font-size: 30px;
          border: 4px solid yellow;
          background-color: rgba(0, 210, 200, 0.4);
          -webkit-animation: slideIn 1.1s infinite ease;
          animation: slideIn 1.1s infinite ease;
        }
        @-webkit-keyframes slideIn {

        }
        @keyframes slideIn {

        }
        </style>
        <p>${this._message}</p>
      </div>
    `;
  }
}
