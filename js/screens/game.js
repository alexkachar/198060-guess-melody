import {getElementFromTemplate, renderScreen} from '../utils';
import {headerTemplate} from '../templates/header';
import {getGenreTemplate} from '../templates/genre';
import {getArtistTemplate} from '../templates/artist';
import {levels, initialGameState} from '../data/data';
import {TITLES as RESULTS_TITLES, RESULTS, BUTTONS, getResultTemplate} from '../screens/results';

const MAX_QUESTIONS = 10;

const TITLES = {
  artist: `Кто исполняет эту песню?`,
  genre: {
    jazz: `Выберите все джазз треки`,
    rock: `Выберите все рок треки`,
    country: `Выберите все кантри треки`,
    rnb: `Выберите все R&B треки`,
    pop: `Выберите все поп треки`,
    electronic: `Выберите все электроник треки`
  }
};

let currentState = Object.assign({}, initialGameState);

const getGameTemplate = (gameType, gameHeader, gameTitle, gameScreen) => {
  return `
  <section class="game game--${gameType}">
    ${gameHeader}
  <section class="game__screen">
    <h2 class="game__title">${gameTitle}</h2>
      ${gameScreen}
    </section>
  </section>`;
};

const artistScreenTemplate = getGameTemplate(`artist`, headerTemplate, TITLES.artist, getArtistTemplate(levels[`1`]));
const genreScreenTemplate = getGameTemplate(`genre`, headerTemplate, TITLES.genre.pop, getGenreTemplate(levels[`6`]));

const artistScreenElement = getElementFromTemplate(artistScreenTemplate);
const genreScreenElement = getElementFromTemplate(genreScreenTemplate);

const changeScreen = (state) => {
  const questions = state.questions[state.level];
  if (state.notes < 0) {
    renderScreen(getResultTemplate(RESULTS_TITLES.failTries, RESULTS.failTries, BUTTONS.fail));
  } else if (state.time < 0) {
    renderScreen(getResultTemplate(RESULTS_TITLES.failTime, RESULTS.failTime, BUTTONS.fail));
  } else if (state.level === MAX_QUESTIONS) {
    renderScreen(getResultTemplate(RESULTS_TITLES.win, RESULTS.win, BUTTONS.win));
  } else if (questions.type === `artist`) {
    renderScreen(getGameTemplate(`artist`, headerTemplate, TITLES.artist, getArtistTemplate(levels[state.level])));
  } else if (questions.type === `genre`) {
    renderScreen(getGameTemplate(`genre`, headerTemplate, TITLES.genre.pop, getGenreTemplate(levels[state.level])));
  }
};

const initArtistScreen = (prevScreen) => {
  const backButton = artistScreenElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, () => renderScreen(prevScreen));

  const artistButtons = artistScreenElement.querySelectorAll(`.artist__name`);

  artistButtons.forEach((element) => {
    element.addEventListener(`click`, () => changeScreen(currentState));
  });
};

const initGenreScreen = (nextScreen) => {
  const backButton = genreScreenElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, () => renderScreen(nextScreen));

  const genreform = genreScreenElement.querySelector(`.game__tracks`);
  const submitButton = genreScreenElement.querySelector(`.game__submit`);
  submitButton.disabled = true;

  genreform.addEventListener(`click`, (event) => {
    if (event.target.name === `answer`) {
      const isAnswerChecked = genreform.querySelectorAll(`[name="answer"]:checked`);
      submitButton.disabled = !isAnswerChecked.length;
    }
  });

  submitButton.addEventListener(`click`, (event) => {
    event.preventDefault();
    genreform.reset();
    submitButton.disabled = true;
    changeScreen(currentState);
  });
};

export {artistScreenElement, genreScreenElement, initArtistScreen, initGenreScreen, changeScreen, currentState};
