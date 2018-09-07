import {levels} from "../data/data";
import {resultScreen} from "./results-screen";
import {renderScreen} from "../utils";
import {genreScreen} from "./game-screen";

const MAX_QUESTIONS = 10;

export const changeScreen = (state) => {
  if (state.notes < 0) {
    renderScreen(resultScreen(state));
  } else if (state.time < 0) {
    renderScreen(resultScreen(state));
  } else if (state.level > MAX_QUESTIONS) {
    renderScreen(resultScreen(state));
  } else if (levels[state.level].type === `artist`) {
    renderScreen(genreScreen(state, changeScreen));
  } else if (levels[state.level].type === `genre`) {
    renderScreen(genreScreen(state, changeScreen));
  }
};
