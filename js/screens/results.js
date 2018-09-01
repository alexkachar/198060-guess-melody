import {getElementFromTemplate, renderScreen} from '../utils';
import {getStats, getTotal, rivalsMock} from "../data/results";

const Titles = {
  FAIL_TIME: `Увы и ах!`,
  FAIL_TRIES: `Какая жалость!`,
  WIN: `Вы настоящий меломан!`
};

const Buttons = {
  FAIL: `Попробовать ещё раз`,
  WIN: `Сыграть ещё раз`
};

const getResultTemplate = (isFailed, title, result, button, stats) => {
  return `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${title}</h2>
    <p class="result__total ${isFailed ? `result__total--fail` : ``}">${result}</p>
    ${!isFailed ? `<p class="result__text">${stats}</p>` : ``}
    <button class="result__replay" type="button">${button}</button>
  </section>`;
};

const resultScreen = (state) => {
  const isFailed = (state.notes <= 0);
  const result = getTotal(state);
  const stats = getStats(rivalsMock, state);
  const title = isFailed ? Titles.FAIL_TRIES : Titles.WIN;
  const button = isFailed ? Buttons.FAIL : Buttons.WIN;
  const template = getResultTemplate(isFailed, title, result, button, stats);
  const resultsElement = getElementFromTemplate(template);
  renderScreen(resultsElement);
};

export {getResultTemplate, resultScreen};
