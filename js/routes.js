import {welcomeScreenElement} from './welcome-screen';
import {genreScreenElement} from './genre-screen';
import {artistScreenElement} from './artist-screen';
import {successScreenElement} from './success-screen';
import {failTimeElement} from './fail-time-screen';
import {failTriesElement} from './fail-tries-screen';
import {WELCOME, GENRE, ARTIST, SUCCESS, TIME, TRIES} from './constants';

const Routes = {
  [WELCOME]: welcomeScreenElement,
  [GENRE]: genreScreenElement,
  [ARTIST]: artistScreenElement,
  [SUCCESS]: successScreenElement,
  [TIME]: failTimeElement,
  [TRIES]: failTriesElement
};

export {Routes};
