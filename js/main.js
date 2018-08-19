import {renderScreen, getRandomValueFromArray} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './welcome-screen';
import {screenElement as genreScreenElement, initGenreScreen} from './genre-screen';
import {screenElement as artistScreenElement, initArtistScreen} from './artist-screen';
import {screenElement as successScreenElement, initSuccessScreen} from './success-screen';
import {screenElement as failTimeElement, initFailTimeScreen} from './fail-time-screen';
import {screenElement as failTriesElement, initFailTriesScreen} from './fail-tries-screen';

const resultsScreensArray = [successScreenElement, failTimeElement, failTriesElement];

const getRandomScreen = () => {
  return renderScreen(getRandomValueFromArray(resultsScreensArray));
};


renderScreen(welcomeScreenElement);
initWelcomeScreen(genreScreenElement);
initGenreScreen(artistScreenElement);
initArtistScreen(welcomeScreenElement, getRandomScreen);
initSuccessScreen(welcomeScreenElement);
initFailTimeScreen(welcomeScreenElement);
initFailTriesScreen(welcomeScreenElement);
