import {renderScreen, getRandomValueFromArray} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './welcome-screen';
import {screenElement as genreScreenElement, initGenreScreen} from './genre-screen';
import {screenElement as artistScreenElement, artistButtons, initArtistScreen} from './artist-screen';
import {screenElement as successScreenElement, initSuccessScreen} from './success-screen';
import {screenElement as failTimeElement, initFailTimeScreen} from './fail-time-screen';
import {screenElement as failTriesElement, initFailTriesScreen} from './fail-tries-screen';

renderScreen(welcomeScreenElement);
initWelcomeScreen(genreScreenElement);
initGenreScreen(artistScreenElement);
initArtistScreen(welcomeScreenElement);
initSuccessScreen(welcomeScreenElement);
initFailTimeScreen(welcomeScreenElement);
initFailTriesScreen(welcomeScreenElement);

const resultsScreensArray = [successScreenElement, failTimeElement, failTriesElement];

const getRandomScreen = () => {
  return renderScreen(getRandomValueFromArray(resultsScreensArray));
};

artistButtons.forEach((element) => {
  element.addEventListener(`click`, () => getRandomScreen());
});
