const mainTemplate = document.querySelector(`.central`);

export default function(element) {
  mainTemplate.innerHTML = ``;
  mainTemplate.appendChild(element);
}
