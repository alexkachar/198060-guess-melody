import AbstractView from "../views/abstract-view";
import {headerTemplate} from "../templates/header-template";

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game game--artist">
        ${headerTemplate}
        <section class="game__screen">
          <h2 class="game__title">Кто исполняет эту песню?</h2>
            <form class="game__artist">
              ${this.level.answers.map((answer, index) => `
                <div class="artist">
                  <input class="artist__input visually-hidden" type="radio" name="answer" value="${answer.correct}" id="answer-${index}">
                    <label class="artist__name" for="answer-${index}">
                      <img class="artist__picture" src="${answer.img}" alt="${answer.artist}">
                      ${answer.artist}
                    </label>
                </div>`).join(``)}
            </form>
        </section>
      </section>`;
  }

  bind(element) {
    const backButton = element.querySelector(`.game__back`);
    backButton.addEventListener(`click`, this.onBackButtonClick);

    const playerButton = element.querySelector(`.track__button`);
    const audio = element.querySelector(`audio`);
    playerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (playerButton.classList.contains(`track__button--pause`)) {
        audio.play();
      } else {
        audio.pause();
      }
      playerButton.classList.toggle(`track__button--pause`);
    });

    const artistButtons = element.querySelectorAll(`.artist`);
    artistButtons.forEach((button) => {
      button.addEventListener(`click`, this.onArtistButtonClick(element));
    });

  }

  onBackButtonClick() {}

  onArtistButtonClick() {}
}
