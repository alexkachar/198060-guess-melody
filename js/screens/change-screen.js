import {renderScreen} from "../utils";
import {BUTTONS, getResultTemplate, RESULTS, TITLES as RESULTS_TITLES} from "./results";
import {levels} from "../data/data";
import {headerTemplate} from "../templates/header";
import {getArtistTemplate} from "../templates/artist";
import {getGenreTemplate} from "../templates/genre";
import {artistScreen} from "../screens/artist-screen";

const MAX_QUESTIONS = 10;

export const changeScreen = (state) => {
  if (state.notes < 0) {
    // renderScreen(getResultTemplate(RESULTS_TITLES.failTries, RESULTS.failTries, BUTTONS.fail));
  } else if (state.time < 0) {
    // renderScreen(getResultTemplate(RESULTS_TITLES.failTime, RESULTS.failTime, BUTTONS.fail));
  } else if (state.level === MAX_QUESTIONS) {
    // renderScreen(getResultTemplate(RESULTS_TITLES.win, RESULTS.win, BUTTONS.win));
  } else if (levels[state.level].type === `artist`) {
    artistScreen(state);
    // state.level++;
  } else if (levels[state.level].type === `genre`) {
    // renderScreen(getGameTemplate(`genre`, headerTemplate, TITLES.genre.pop, getGenreTemplate(levels[state.level])));
    // state.level++;
  }
};

