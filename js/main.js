import {renderScreen} from './utils';
import {screenElement as welcomeScreenElement, initWelcomeScreen} from './welcome-screen';
import {screenElement as genreScreenElement, initGenreScreen} from './genre-screen';
import {screenElement as artistScreenElement, initArtistScreen} from './artist-screen';
import {initSuccessScreen} from './success-screen';
import {initFailTimeScreen} from './fail-time-screen';
import {initFailTriesScreen} from './fail-tries-screen';

renderScreen(welcomeScreenElement);
initWelcomeScreen(genreScreenElement);
initGenreScreen(artistScreenElement);
initArtistScreen(welcomeScreenElement);
initSuccessScreen(welcomeScreenElement);
initFailTimeScreen(welcomeScreenElement);
initFailTriesScreen(welcomeScreenElement);
