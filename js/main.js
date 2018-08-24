import {renderScreen, getRandomValueFromArray} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './screens/welcome';
import {screenElement as genreScreenElement, initGenreScreen} from './screens/genre';
import {screenElement as artistScreenElement, initArtistScreen} from './screens/artist';
import {screenElement as successScreenElement, initSuccessScreen} from './screens/success';
import {screenElement as failTimeElement, initFailTimeScreen} from './screens/fail-time';
import {screenElement as failTriesElement, initFailTriesScreen} from './screens/fail-tries';

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
