import AbstractView from "../views/abstract-view";

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game game--artist">
        ${gameHeader}
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
    playerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onPlayerButtonClick();
    });

    const artistButtons = element.querySelectorAll(`.artist`);
    artistButtons.forEach((button) => {
      button.addEventListener(`click`, () => {
        const correct = button.querySelector(`input`).value === `true`;
        this.onArtistButtonClick(correct);
      });
    });

  }

  onBackButtonClick() {}

  onPlayerButtonClick() {}

  onArtistButtonClick() {}
}
