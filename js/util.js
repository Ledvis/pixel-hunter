export default function getElementFromTemplate(template) {
  const container = document.createElement(`template`);
  container.innerHTML = template.trim();
  return container.content;
}
