import {getElementFromTemplate, renderScreen} from '../utils';
import {rivalsMock} from "../data/results";

const TITLES = {
  failTime: `Увы и ах!`,
  failTries: `Какая жалость!`,
  win: `Вы настоящий меломан!`
};

const RESULTS = {
  failTime: `<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>`,
  failTries: `<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>`,
  win: [`<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    `, `<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>`]
};

const BUTTONS = {
  fail: `Попробовать ещё раз`,
  win: `Сыграть ещё раз`
};

const getResultTemplate = (title, result, button) => {
  return `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${title}</h2>
    ${result}
    <button class="result__replay" type="button">${button}</button>
  </section>`;
};

const failTimeElement = getElementFromTemplate(getResultTemplate(TITLES.failTime, RESULTS.failTime, BUTTONS.fail));
const failTriesElement = getElementFromTemplate(getResultTemplate(TITLES.failTries, RESULTS.failTries, BUTTONS.fail));
const successElement = getElementFromTemplate(getResultTemplate(TITLES.win, RESULTS.win, BUTTONS.win));

const failTriesScreen = () => {
  renderScreen(failTriesElement);
}

const failTimeScreen = () => {
  renderScreen(failTimeElement);
}

const getSuccessElement = (state, rivals) => {
  const stats = [];

  rivals.forEach((it) => {
    stats.push(it.points);
  });

  stats.push(state.points);
  stats.sort((left, right) => right - left);

  const playerPosition = stats.indexOf(state.points) + 1;
  const percent = (stats.length - playerPosition) * 100 / stats.length;

  return `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${state.time} секунд вы набрали ${state.points} баллов (${state.fastPoints} быстрых), совершив ${3 - state.notes} ошибки</p>
    <p class="result__text">Вы заняли ${playerPosition} место из ${stats.length} игроков. Это лучше, чем у ${percent}% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;
}

const successScreen = (state) => {
  renderScreen(getSuccessElement(state, rivalsMock));
}

export {TITLES, RESULTS, BUTTONS, failTimeElement, failTriesElement, successScreen, failTimeScreen, failTriesScreen, getResultTemplate};
