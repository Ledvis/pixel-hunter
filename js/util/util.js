import {
  GameSettings,
} from "../util/config";

export default class Util {
  static createElement(html) {
    const element = document.createElement(`template`);
    element.innerHTML = html.trim();
    return element.content;
  }

  static updateTimer(time) {
    document.querySelector(`.game__timer`).innerText = time;
  }

  static paintLowTime(time) {
    const timer = document.querySelector(`.game__timer`);

    if (time <= GameSettings.LITTLE_TIME) {
      timer.style.color = `red`;
    }
    if (time <= GameSettings.LITTLE_TIME && !(time % 2)) {
      timer.style.color = ``;
    }
  }

  static selectUniqPictures(data) {
    const picturesList = new Set();

    for (const item of data) {
      item.answers.forEach((answer) => {
        picturesList.add(answer.image.url);
      });
    }

    return picturesList;
  }

  static initializeImg(imgSrcArr) {
    const result = [];

    imgSrcArr.forEach((imgSrc) => {
      result.push(new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imgSrc;

        image.onload = function() {
          resolve(image);
        };

        image.onerror = function() {
          reject(new Error(`Не удалось загрузить изображение, пожалуйста, перезагрузите страницу.`));
        };
      }));
    });

    return result;
  }

  static crossFadeIn() {
    const container = document.querySelector(`.central`);
    container.style.transition = `opacity 0.5s ease-in-out`;
    container.style.opacity = 0;
  }

  static crossFadeOut() {
    const container = document.querySelector(`.central`);
    container.style.transition = `opacity 0.5s ease-in-out`;
    container.style.opacity = 1;
  }
}
