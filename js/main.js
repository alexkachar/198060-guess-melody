import {renderScreen} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './screens/welcome';
import {artistScreenElement, initArtistScreen, initGenreScreen} from './screens/game';
// import {initFailTimeScreen, initFailTriesScreen, initSuccessScreen} from './screens/results';


renderScreen(welcomeScreenElement);

// initGenreScreen(artistScreenElement);
// initSuccessScreen(welcomeScreenElement);
// initFailTimeScreen(welcomeScreenElement);
// initFailTriesScreen(welcomeScreenElement);
