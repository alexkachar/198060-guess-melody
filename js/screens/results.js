import {getElementFromTemplate, renderScreen} from '../utils';
import {getStats, rivalsMock} from "../data/results";

const Titles = {
  FAIL_TIME: `Увы и ах!`,
  FAIL_TRIES: `Какая жалость!`,
  WIN: `Вы настоящий меломан!`
};

const Results = {
  FAIL_TIME: `<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>`,
  FAIL_TRIES: `<p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>`,
  WIN: [`<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
    `, `<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>`]
};

const Buttons = {
  FAIL: `Попробовать ещё раз`,
  WIN: `Сыграть ещё раз`
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

const failTimeElement = getElementFromTemplate(getResultTemplate(Titles.FAIL_TIME, Results.FAIL_TIME, Buttons.FAIL));
const failTriesElement = getElementFromTemplate(getResultTemplate(Titles.FAIL_TRIES, Results.FAIL_TRIES, Buttons.FAIL));

const failTriesScreen = () => {
  renderScreen(failTriesElement);
}

const failTimeScreen = () => {
  renderScreen(failTimeElement);
}

const getSuccessTemplate = (state) => {
  const stats = [];
  const rivals = rivalsMock;

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
    <p class="result__total">За ${state.time} секунд вы набрали ${state.points} баллов (0 быстрых), совершив ${3 - state.notes} ошибки</p>
    <p class="result__text">Вы заняли ${playerPosition} место из ${stats.length} игроков. Это лучше, чем у ${percent}% игроков</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;
}

const successScreen = (state) => {
  renderScreen(getElementFromTemplate(getSuccessTemplate(state)));
}

export {failTimeElement, failTriesElement, successScreen, failTimeScreen, failTriesScreen, getResultTemplate};
