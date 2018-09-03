export default class AbstractView {
  get template() {
    throw new Error(`get template must be define for view`);
  }

  createHeader(mode) {
    if (mode === `game`) {
      return `
        <header class="header">
          <div class="header__back">
            <button class="back">
              <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
              <img src="img/logo_small.svg" width="101" height="44">
            </button>
          </div>
        </header>
      `;
    }
    return `
    <header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
  `;
  }

  get footerTemplate() {
    return `
      <footer class="footer">
        <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
        <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> © 2016</span>
        <div class="footer__social-links">
          <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
          <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
          <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
          <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
        </div>
      </footer>
    `;
  }

  createElement() {
    const container = document.createElement(`div`);
    container.innerHTML = this.template.trim();
    return container;
  }

  getMarkup() {
    this._element = this.createElement();
    this.bind();
  }

  get element() {
    if (!this._element) {
      this.getMarkup();
    }

    return this._element;
  }

  renderPage() {
    const centralElement = document.querySelector(`.central`);
    centralElement.innerHTML = ``;
    centralElement.appendChild(this.element);
  }
}
