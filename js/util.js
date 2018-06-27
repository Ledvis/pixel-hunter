const mainContent = document.querySelector(`.central`);

function renderScreen(element) {
  mainContent.innerHTML = ``;
  mainContent.appendChild(element);
}

function getElementFromTemplate(string) {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div;
}

export {
  renderScreen,
  getElementFromTemplate
};
