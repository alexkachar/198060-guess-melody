import AbstractView from "../views/abstract-view";
import {headerTemplate} from "../templates/header-template";

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game game--genre">
        ${headerTemplate}
        <section class="game__screen">
          <h2 class="game__title">Выберите все треки в стиле ${gameTitle}</h2>
          ${gameScreen}
        </section>
      </section>`;
  }

  bind(element) {
    const backButton = element.querySelector(`.game__back`);
    backButton.addEventListener(`click`, this.onBackButtonClick);

    const playerButtons = element.querySelectorAll(`.track__button`);
    playerButtons.forEach((btn) => {
      btn.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this.onPlayerButtonsClick();
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

  onPlayerButtonsClick() {}

  onGenreButtonsClick() {}

  onSubmitButtonClick() {}
}
