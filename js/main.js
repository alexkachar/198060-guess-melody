import {renderScreen} from './utils';
import {welcomeScreenElement, initWelcomeScreen} from './welcome-screen';
import {genreScreenElement, initGenreScreen} from './genre-screen';
import {artistScreenElement, initArtistScreen} from './artist-screen';
import {initSuccessScreen} from './success-screen';
import {initFailTimeScreen} from './fail-time-screen';
import {initFailTriesScreen} from './fail-tries-screen';

renderScreen(welcomeScreenElement);
initWelcomeScreen(genreScreenElement);
initGenreScreen(artistScreenElement);
initArtistScreen();
initSuccessScreen();
initFailTimeScreen();
initFailTriesScreen();
