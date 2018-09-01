import {getElementFromTemplate, renderScreen} from '../utils';
import {getStats, rivalsMock} from "../data/results";

const Titles = {
  FAIL_TIME: `Увы и ах!`,
  FAIL_TRIES: `Какая жалость!`,
  WIN: `Вы настоящий меломан!`
};

const Results = {
  FAIL_TIME: `Время вышло! Вы не успели отгадать все мелодии`,
  FAIL_TRIES: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  WIN: `За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки`
};

const Buttons = {
  FAIL: `Попробовать ещё раз`,
  WIN: `Сыграть ещё раз`
};

const getResultTemplate = (isFailed, title, result, button, winText) => {
  return `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${title}</h2>
    <p class="result__total ${isFailed ? `result__total--fail` : ``}">${result}</p>
    ${!isFailed ? `<p class="result__text">${winText}</p>` : ``}
    <button class="result__replay" type="button">${button}</button>
  </section>`;
};

const resultScreen = (state) => {
  const isFailed = (state.notes <= 0);
  const text = getStats(rivalsMock, state);
  const title = isFailed ? Titles.FAIL_TRIES : Titles.WIN;
  const button = isFailed ? Buttons.FAIL : Buttons.WIN;
  const winText = isFailed ? `` : Results.WIN;
  const template = getResultTemplate(isFailed, title, text, button, winText);
  const resultsElement = getElementFromTemplate(template);
  renderScreen(resultsElement);
};

const failTimeElement = getElementFromTemplate(getResultTemplate(Titles.FAIL_TIME, Results.FAIL_TIME, Buttons.FAIL));
const failTriesElement = getElementFromTemplate(getResultTemplate(Titles.FAIL_TRIES, Results.FAIL_TRIES, Buttons.FAIL));

const failTriesScreen = () => {
  renderScreen(failTriesElement);
}

const failTimeScreen = () => {
  renderScreen(failTimeElement);
}

const getSuccessTemplate = (state) => {
  return `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${state.time} секунд вы набрали ${state.points} баллов (0 быстрых), совершив ${3 - state.notes} ошибки</p>
    <p class="result__text">Вы заняли ${playerPosition} место из ${stats.length} игроков. Это лучше, чем у ${percent}% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;
}

const successScreen = (state) => {
  renderScreen(getElementFromTemplate(getSuccessTemplate(state)));
}

export {failTimeElement, failTriesElement, successScreen, failTimeScreen, failTriesScreen, getResultTemplate, resultScreen};
