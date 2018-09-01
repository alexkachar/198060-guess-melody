import {getElementFromTemplate, renderScreen} from '../utils';
import {headerTemplate} from '../templates/header';
import {getGenreTemplate} from '../templates/genre';
import {getArtistTemplate} from '../templates/artist';
import {levels, initialGameState} from '../data/data';
import {TITLES as RESULTS_TITLES, RESULTS, BUTTONS, getResultTemplate} from '../screens/results';


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

export {artistScreenElement, genreScreenElement, initArtistScreen, initGenreScreen, TITLES, currentState};
