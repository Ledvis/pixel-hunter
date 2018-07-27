import {
  BackendSettings
} from './config';

export default class Backend {
  checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`));
    }
  }

  loadData() {
    return fetch(BackendSettings.GET_QUESTIONS_URL)
      .then(this.checkStatus)
      .then((response) => response.json())
      .catch((error) => new Error(error));
  }

  downloadStatistic(userName) {
    return fetch(`${BackendSettings.UPLOAD_STATISTIC_URL}:${BackendSettings.APP_ID}-:${userName}`).then(this.checkStatus).then(this.toJSON);
  }

  uploadStatistic(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${BackendSettings.UPLOAD_STATISTIC_URL}:${BackendSettings.APP_ID}-:${data.name}`, requestSettings).then(this.checkStatus);
  }
}
