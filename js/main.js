import {renderScreen, getRandomValueFromArray} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './screens/welcome';
import {artistScreenElement, genreScreenElement, initArtistScreen, initGenreScreen} from './screens/game';
import {failTimeElement, failTriesElement, successElement, initFailTimeScreen, initFailTriesScreen, initSuccessScreen} from './screens/results';

const resultsScreensArray = [successElement, failTimeElement, failTriesElement];

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

