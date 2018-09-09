import {levels} from "../data/data";
import {resultScreen} from "./results-screen";
import {renderScreen} from "../utils";
import {gameScreen} from "./game-screen";

const MAX_QUESTIONS = 10;

export const changeScreen = (state) => {
  if (state.notes >= 3) {
    renderScreen(resultScreen(state));
  } else if (state.time < 0) {
    renderScreen(resultScreen(state));
  } else if (state.level > MAX_QUESTIONS) {
    renderScreen(resultScreen(state));
  } else if (levels[state.level].type === `artist`) {
    renderScreen(gameScreen(state, changeScreen));
  } else if (levels[state.level].type === `genre`) {
    renderScreen(gameScreen(state, changeScreen));
  }
};
