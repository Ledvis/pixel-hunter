const mainTemplate = document.querySelector(`.central`);

function renderScreen(element) {
  mainTemplate.innerHTML = ``;
  mainTemplate.appendChild(element);
}

function getElementFromTemplate(templateString) {
  const templateElement = document.createElement(`template`);
  templateElement.innerHTML = templateString.trim();
  return templateElement.content;
}

export {
  renderScreen,
  getElementFromTemplate
};
