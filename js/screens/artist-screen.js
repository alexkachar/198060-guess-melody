import ArtistView from "../views/welcome-view";
import {changeScreen} from "../screens/change-screen";

export const artistScreen = new ArtistView();

artistScreen.onPlayerButtonClick = (evt, audio) => {
  if (evt.target.classList.contains(`track__button--pause`)) {
    audio.play();
  } else {
    audio.pause();
  }
  evt.target.classList.toggle(`track__button--pause`);

};

artistScreen.onArtistButtonClick = (element, state) => {
  let newState;
  const answer = {isCorrect: element.querySelector(`input`).value === `true`, time: 25};
  if (element.querySelector(`input`).value === `true`) {
    newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
  } else {
    newState = Object.assign({}, state, {notes: state.notes - 1, level: state.level + 1, answers: state.answers.concat(answer)});
  }
  changeScreen(newState);
};
