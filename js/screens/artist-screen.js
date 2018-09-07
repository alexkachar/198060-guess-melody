import ArtistView from "../views/artist-view";
import {changeScreen} from "../screens/change-screen"

export const artistScreen = (state) => {
  const level = state.levels[state.level];
  const artistView = new ArtistView(level);

  artistView.onArtistButtonClick = (isCorrect) => {
    let newState;
    const answer = {isCorrect: isCorrect ? `true` : `false`, time: 25};
    if (isCorrect) {
      newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
    } else {
      newState = Object.assign({}, state, {notes: state.notes - 1, level: state.level + 1, answers: state.answers.concat(answer)});
    }
    changeScreen(newState);
  };
};
