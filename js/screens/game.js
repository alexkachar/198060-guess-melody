import {getElementFromTemplate, renderScreen} from '../utils';
import {headerTemplate} from '../templates/header';
import {getGenreTemplate} from '../templates/genre';
import {getArtistTemplate} from '../templates/artist';
import {levels} from '../data/data';

const TITLES = {
  artist: `Кто исполняет эту песню?`,
  genre: `Выберите инди-рок треки`
};

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

console.log(levels, 'levels');
const artistScreenTemplate = getGameTemplate(`artist`, headerTemplate, TITLES.artist, getArtistTemplate(levels[`1`], 1));
const genreScreenTemplate = getGameTemplate(`genre`, headerTemplate, TITLES.genre, getGenreTemplate(levels, 6, 4));

const artistScreenElement = getElementFromTemplate(artistScreenTemplate);
const genreScreenElement = getElementFromTemplate(genreScreenTemplate);

const initArtistScreen = (prevScreen, nextScreen) => {
  const backButton = artistScreenElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, () => renderScreen(prevScreen));

  const artistButtons = artistScreenElement.querySelectorAll(`.artist__name`);

  artistButtons.forEach((element) => {
    element.addEventListener(`click`, () => nextScreen());
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
    renderScreen(nextScreen);
  });
};

export {artistScreenElement, genreScreenElement, initArtistScreen, initGenreScreen};
