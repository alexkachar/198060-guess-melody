const SERVER_URL = `https://es.dump.academy/guess-melody`;

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
}
