const SERVER_URL = `https://es.dump.academy/guess-melody`;
const APP_ID = `lxk10203040`;

const toJSON = (res) => res.json();

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Loader {
  static loadQuestions() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkStatus)
      .then(toJSON);
  }

  static loadRivals() {
    return fetch(`${SERVER_URL}/stats/${APP_ID}`)
      .then(checkStatus)
      .then(toJSON);
  }

  static saveResults(score) {
    const requestSettings = {
      method: `POST`,
      body: JSON.stringify(score),
      headers: {
        'Content-Type': `application/json`
      }
    };
    return fetch(`${SERVER_URL}/stats/${APP_ID}`, requestSettings)
      .then(checkStatus);
  }
}
