export default function(templateString) {
  const templateElement = document.createElement(`template`);
  templateElement.innerHTML = templateString.trim();
  return templateElement.content;
}
