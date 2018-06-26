const mainTemplate = document.querySelector(`.central`);

function renderScreen(element) {
  mainTemplate.innerHTML = ``;
  mainTemplate.appendChild(element);
}

function getElementFromTemplate(templateString) {
  const templateElement = document.createElement(`div`);
  templateElement.innerHTML = templateString.trim();
  return templateElement;
}

export {
  renderScreen,
  getElementFromTemplate
};
