import {Routes} from './routes';
import {WELCOME, GENRE, ARTIST, SUCCESS, TIME, TRIES} from './constants';
import {welcomeScreenElement, welcomeButton} from './welcome-screen';
import {renderScreen} from './utils';
import {genreScreenElement, backButton as genreBackButton} from './genre-screen';
import {backButton as artistBackButton} from './artist-screen';
import {replayButton as successReplayButton} from './success-screen';
import {replayButton as timeReplayButton} from './fail-time-screen';
import {replayButton as triesReplayButton} from './fail-tries-screen';

// renderScreen(welcomeScreenElement);
renderScreen(Routes[WELCOME]);

genreBackButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));
artistBackButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));

successReplayButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));
timeReplayButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));
triesReplayButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));

welcomeButton.addEventListener(`click`, () => renderScreen(genreScreenElement));
