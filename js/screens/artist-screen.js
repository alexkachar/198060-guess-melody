import {headerTemplate} from "../templates/header";
import {getArtistTemplate} from "../templates/artist";
import {getElementFromTemplate, renderScreen} from "../utils";
import {changeScreen} from "./change-screen";
import {screenElement as welcomeScreenElement} from "./welcome";

const getGameTemplate = (gameHeader, gameScreen) => {
  return `
  <section class="game game--artist">
    ${gameHeader}
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
      ${gameScreen}
    </section>
  </section>`;
};

export const artistScreen = (state) => {
  const level = state.levels[state.level];
  const artistScreenTemplate = getGameTemplate(headerTemplate, getArtistTemplate(level));
  const artistScreenElement = getElementFromTemplate(artistScreenTemplate);
  renderScreen(artistScreenElement);

  const backButton = artistScreenElement.querySelector(`.game__back`);
  backButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));

  const artistButtons = artistScreenElement.querySelectorAll(`.artist`);

  artistButtons.forEach((element) => {
    element.addEventListener(`click`, () => {
      let newState;
      const answer = {isCorrect: element.querySelector(`input`).value === `true`, time: 25};
      if (element.querySelector(`input`).value === `true`) {
        newState = Object.assign({}, state, {level: state.level + 1, answers: state.answers.concat(answer)});
      } else {
        newState = Object.assign({}, state, {notes: state.notes - 1, level: state.level + 1, answers: state.answers.concat(answer)});
      }
      changeScreen(newState);
    });
  });
};
