import {headerTemplate} from "../templates/header";
import {getGenreTemplate} from "../templates/genre";
import {getElementFromTemplate, renderScreen} from "../utils";
import {screenElement as welcomeScreenElement} from "./welcome";
import {changeScreen} from "./change-screen";

const TITLES_MAP = {
  jazz: `джазз`,
  rock: `рок`,
  country: `кантри`,
  rnb: `R&B`,
  pop: `поп`,
  electronic: `электроник`
};

const getGameTemplate = (gameHeader, gameTitle, gameScreen) => {
  return `
  <section class="game game--genre">
    ${gameHeader}
  <section class="game__screen">
    <h2 class="game__title">Выберите все треки в стиле ${gameTitle}</h2>
      ${gameScreen}
    </section>
  </section>`;
};

export const genreScreen = (state) => {
  const level = state.levels[state.level];
  const genreScreenTemplate = getGameTemplate(headerTemplate, TITLES_MAP[level.genre], getGenreTemplate(level));
  const genreScreenElement = getElementFromTemplate(genreScreenTemplate);
  renderScreen(genreScreenElement);

  const backButton = genreScreenElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));

  const genreForm = genreScreenElement.querySelector(`.game__tracks`);
  const submitButton = genreScreenElement.querySelector(`.game__submit`);
  submitButton.disabled = true;

  genreForm.addEventListener(`click`, (event) => {
    if (event.target.name === `answer`) {
      const isAnswerChecked = genreForm.querySelectorAll(`[name="answer"]:checked`);
      submitButton.disabled = !isAnswerChecked.length;
    }
  });

  submitButton.addEventListener(`click`, (event) => {
    event.preventDefault();

    const userAnswers = genreForm.querySelectorAll(`[name="answer"]`);

    const isCorrect = Array.from(userAnswers).every((element) => {
      const checked = element.checked;
      const correct = element.value === `true`;

      return checked === correct;
    });


    let newState;
    const answer = {isCorrect, time: 25};

    if (isCorrect) {
      newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
    } else {
      newState = Object.assign({}, state, {notes: state.notes - 1, level: state.level + 1, answers: state.answers.concat(answer)});
    }

    genreForm.reset();
    submitButton.disabled = true;
    changeScreen(newState);
  });
};
