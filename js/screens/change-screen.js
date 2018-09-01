import {levels} from "../data/data";
import {artistScreen} from "../screens/artist-screen";
import {genreScreen} from "./genre-screen";

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
  } else if (levels[state.level].type === `genre`) {
    genreScreen(state);
  }
};

