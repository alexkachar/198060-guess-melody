import AbstractView from "../views/abstract-view";
import {headerTemplate} from "../templates/header-template";

export default const genreView = class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
    this.Titles = Titles;
  }

  get template() {
    return `
      <section class="game game--genre">
        ${headerTemplate}
        <section class="game__screen">
          <h2 class="game__title">Выберите все треки в стиле ${this.Titles[this.level.genre]}</h2>
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
              </div>`).join(``)};
        </section>
      </section>`;
  }

  bind(element) {
    const backButton = element.querySelector(`.game__back`);
    backButton.addEventListener(`click`, this.onBackButtonClick);

    const audio = Array.from(element.querySelectorAll(`audio`));
    const playerButtons = Array.from(element.querySelectorAll(`.track__button`));
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

    const genreForm = element.querySelector(`.game__tracks`);
    genreForm.addEventListener(`click`, (evt) => {
      const checked = evt.target.name === `answer`;
      this.onGenreButtonsClick(checked);
    });

    const submitButton = genreForm.querySelector(`.game__submit`);
    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onSubmitButtonClick();
    });
  }

  onBackButtonClick() {}

  onGenreButtonsClick() {}

  onSubmitButtonClick() {}
}
;
