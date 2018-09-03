import {AbstractView} from "../views/abstract-view";
import {headerTemplate} from "../templates/header-template";
import {getArtistTemplate} from "../templates/artist-template";
import {getElementFromTemplate, renderScreen} from "../utils";
import {screenElement as welcomeScreenElement} from "../screens/welcome";

export default class ArtistView extends AbstractView {
  constructor(screen) {
    super();
    this.screen = screen;
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

  bind() {
    const level = state.levels[state.level];
    const artistScreenTemplate = getGameTemplate(headerTemplate, getArtistTemplate(level));
    const artistScreenElement = getElementFromTemplate(artistScreenTemplate);
    renderScreen(artistScreenElement);

    const audio = artistScreenElement.querySelector(`audio`);
    const playerButton = artistScreenElement.querySelector(`.track__button`);
    playerButton.addEventListener(`click`, this.onPlayerButtonClick);

    const backButton = artistScreenElement.querySelector(`.game__back`);
    backButton.addEventListener(`click`, () => this.onBackButtonClick);

    const artistButtons = artistScreenElement.querySelectorAll(`.artist`);
    artistButtons.forEach((element) => {
      element.addEventListener(`click`, this.onArtistButtonClick);
    });
  }

  onPlayerButtonClick() {}

  onBackButtonClick() {}

  onArtistButtonClick() {}
}
