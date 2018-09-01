import {levels} from "../data/data";
import {artistScreen} from "../screens/artist-screen";
import {genreScreen} from "./genre-screen";
import {failTimeScreen, failTriesScreen, successScreen} from "./results";

const MAX_QUESTIONS = 10;

export const changeScreen = (state) => {
  if (state.notes < 0) {
    failTriesScreen();
  } else if (state.time < 0) {
    failTimeScreen();
  } else if (state.level > MAX_QUESTIONS) {
    successScreen(state);
  } else if (levels[state.level].type === `artist`) {
    artistScreen(state, changeScreen);
  } else if (levels[state.level].type === `genre`) {
    genreScreen(state, changeScreen);
  }
};

