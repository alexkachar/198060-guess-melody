import ArtistView from "../views/artist-view";
import {changeScreen} from "../screens/change-screen";

export const artistScreen = (state) => {
  const artistView = new ArtistView();

  artistView.onArtistButtonClick = (element) => {
    let newState;
    const answer = {isCorrect: element.querySelector(`input`).value === `true`, time: 25};
    if (element.querySelector(`input`).value === `true`) {
      newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
    } else {
      newState = Object.assign({}, state, {
        notes: state.notes - 1,
        level: state.level + 1,
        answers: state.answers.concat(answer)
      });
    }
    changeScreen(newState);
  };
};
