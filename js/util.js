export function getElementFromTemplate(template) {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
}
