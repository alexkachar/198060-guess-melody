import GenreView from "../views/genre-view";
import ArtistView from "../views/artist-view";

export const Titles = {
  JAZZ: `джазз`,
  ROCK: `рок`,
  COUNTRY: `кантри`,
  RNB: `R&B`,
  POP: `поп`,
  ELECTRONIC: `электроник`
};

const GameView = {
  artist: ArtistView,
  genre: GenreView
}

export const gameScreen = (state, changeScreen) => {
  const level = state.levels[state.level];
  const levelType = level.type;
  const genreView = new GameView[levelType](level);

  genreView.onSubmitButtonClick = (userAnswers) => {
    let isCorrect = userAnswers;
    if (levelType === `genre`) {
      isCorrect = Array.from(userAnswers).every((element) => {
        const checked = element.checked;
        const correct = element.value === `true`;

        return checked === correct;
      });
    }


    let newState;
    const answer = {isCorrect, time: 25};
    if (isCorrect) {
      newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
    } else {
      newState = Object.assign({}, state, {notes: state.notes - 1, level: state.level + 1, answers: state.answers.concat(answer)});
    }
    changeScreen(newState);
  };

    return genreView.element;
  }
};
