import {AbstractView} from "./abstract-view";
import {headerTemplate} from "../templates/header-template";
import {getGenreTemplate} from "../templates/genre-template";
import {getElementFromTemplate, renderScreen} from "../utils";
import {screenElement as welcomeScreenElement} from "../screens/welcome";

export default class ArtistView extends AbstractView {
  constructor(screen) {
    super();
    this.screen = screen;
  }

  get template() {
    return `<form class="game__tracks">
    ${this.level.answers.map((answer, index) => `
  <div class="track">
      <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
        <audio src ="${answer.audio}" ${answer.autoplay ? `autoplay` : ``}></audio>
      </div>

    <div class="game__answer">
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="${answer.correct}" id="answer-${index}">
      <label class="game__check" for="answer-${index}">Отметить</label>
    </div>
  </div>`).join(``)}
    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
  }

  bind() {
    const level = state.levels[state.level];
    const genreScreenTemplate = getGameTemplate(headerTemplate, Titles[level.genre], getGenreTemplate(level));
    const genreScreenElement = getElementFromTemplate(genreScreenTemplate);
    renderScreen(genreScreenElement);


    const audio = Array.from(genreScreenElement.querySelectorAll(`audio`));
    const playerButtons = Array.from(genreScreenElement.querySelectorAll(`.track__button`));
    playerButtons[0].classList.add(`track__button--pause`);
    audio[0].play();

    playerButtons.forEach((btn, index) => {
      btn.addEventListener(`click`, (event) => {
        event.preventDefault();

        if (btn.classList.contains(`track__button--pause`)) {
          btn.classList.remove(`track__button--pause`);
          audio[index].pause();
        } else {
          for (let i = 0; i < playerButtons.length; i++) {
            playerButtons[i].classList.remove(`track__button--pause`);
            audio[i].pause();
          }

          btn.classList.add(`track__button--pause`);
          audio[index].play();
        }
      });
    });

    const backButton = genreScreenElement.querySelector(`.game__back`);
    backButton.addEventListener(`click`, () => renderScreen(welcomeScreenElement));

    const genreForm = genreScreenElement.querySelector(`.game__tracks`);
    const submitButton = genreScreenElement.querySelector(`.game__submit`);
    submitButton.disabled = true;

    genreForm.addEventListener(`click`, (event) => {
      if (event.target.name === `answer`) {
        const isAnswerChecked = genreForm.querySelectorAll(`[name="answer"]:checked`);
        submitButton.disabled = isAnswerChecked.length === 0;
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
  }
}
