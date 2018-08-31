import {renderScreen} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './screens/welcome';
import {artistScreenElement, genreScreenElement, initArtistScreen, initGenreScreen} from './screens/game';
import {initFailTimeScreen, initFailTriesScreen, initSuccessScreen} from './screens/results';


renderScreen(welcomeScreenElement);
initWelcomeScreen(genreScreenElement);
initGenreScreen(artistScreenElement);
initArtistScreen(welcomeScreenElement);
initSuccessScreen(welcomeScreenElement);
initFailTimeScreen(welcomeScreenElement);
initFailTriesScreen(welcomeScreenElement);
