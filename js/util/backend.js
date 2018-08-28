const SERVER_URL = `https://es.dump.academy/pixel-hunter/`;

export function loadData(uri, onSuccess, onError) {
  return fetch(`${SERVER_URL}${uri}`, {
    method: `get`
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      if (onError instanceof Function) {
        onError(response);
      }
      throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
    }
  }).then((response) => {
    if (onSuccess instanceof Function) {
      onSuccess(response);
    }
    return response;
  });
}

export function postData(uri, body, onSuccess, onError) {
  return fetch(`${SERVER_URL}${uri}`, {
    method: `post`,
    headers: {
      "Content-type": `application/json; charset=UTF-8`
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (response.ok) {
      if (onSuccess instanceof Function) {
        onSuccess();
      }
    } else {
      if (onError instanceof Function) {
        onError(response);
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    }
  });
}
