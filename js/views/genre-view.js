import AbstractView from "../views/abstract-view";

export default class genreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  // ${index === 0 ? `track__button--pause` : `track__button--play`}

  get template() {
    return `<section class="game__screen">
          <h2 class="game__title">${this.level.question}</h2>
          <form class="game__tracks">              
            ${this.level.answers.map((answer, index) => `
              <div class="track">
                <button class="track__button track__button--play ${index === 0 ? `track__button--pause` : ``}" type="button"></button>
                <div class="track__status">
                  <audio src ="${answer.audio}" ${index === 0 ? `autoplay` : ``}></audio>
                </div>

                <div class="game__answer">
                  <input class="game__input visually-hidden" type="checkbox" name="answer" value="${answer.correct}" id="answer-${index}">
                  <label class="game__check" for="answer-${index}">Отметить</label>
                </div>
              </div>`).join(``)}
            <button class="game__submit button" type="submit">Ответить</button>
          </form>   
        </section>`;
  }

  bind(element) {
    const audio = Array.from(element.querySelectorAll(`audio`));
    const playerButtons = Array.from(element.querySelectorAll(`.track__button`));

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
    genreForm.addEventListener(`click`, (event) => {
      if (event.target.name === `answer`) {
        const isAnswerChecked = genreForm.querySelectorAll(`[name="answer"]:checked`);
        submitButton.disabled = isAnswerChecked.length === 0;
      }
    });

    const submitButton = genreForm.querySelector(`.game__submit`);
    submitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const userAnswers = genreForm.querySelectorAll(`[name="answer"]`);
      this.onAnswerClick(userAnswers);
      genreForm.reset();
      submitButton.disabled = true;
    });
  }

  onAnswerClick() {}
}
