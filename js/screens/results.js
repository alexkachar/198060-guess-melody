import {getElementFromTemplate, renderScreen} from '../utils';

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

const initFailTimeScreen = (nextScreen) => {
  const replayButton = failTimeElement.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => renderScreen(nextScreen));
};

const initFailTriesScreen = (nextScreen) => {
  const replayButton = failTriesElement.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => renderScreen(nextScreen));
};

const initSuccessScreen = (nextScreen) => {
  const replayButton = successElement.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => renderScreen(nextScreen));
};

export {failTimeElement, failTriesElement, successElement, initFailTimeScreen, initFailTriesScreen, initSuccessScreen};
