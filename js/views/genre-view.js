// import AbstractView from "./abstract-view";
//
// export default class ArtistView extends AbstractView {
//   constructor(screen) {
//     super();
//     this.screen = screen;
//   }
//
//   get template() {
//     return `<form class="game__tracks">
//     ${this.level.answers.map((answer, index) => `
//   <div class="track">
//       <button class="track__button track__button--play" type="button"></button>
//         <div class="track__status">
//         <audio src ="${answer.audio}" ${answer.autoplay ? `autoplay` : ``}></audio>
//       </div>
//
//     <div class="game__answer">
//       <input class="game__input visually-hidden" type="checkbox" name="answer" value="${answer.correct}" id="answer-${index}">
//       <label class="game__check" for="answer-${index}">Отметить</label>
//     </div>
//   </div>`).join(``)}
//     <button class="game__submit button" type="submit">Ответить</button>
//   </form>`;
//   }
//
//   bind() {
//     const playerButtons = Array.from(genreScreenElement.querySelectorAll(`.track__button`));
//     playerButtons[0].classList.add(`track__button--pause`);
//     audio[0].play();
//
//     playerButtons.forEach((btn, index) => {
//       btn.addEventListener(`click`, this.onPlayerButtonsClick);
//
//     const backButton = genreScreenElement.querySelector(`.game__back`);
//     backButton.addEventListener(`click`, this.onBackButtonClick);
//
//     const genreForm = genreScreenElement.querySelector(`.game__tracks`);
//     const submitButton = genreScreenElement.querySelector(`.game__submit`);
//     submitButton.disabled = true;
//
//     genreForm.addEventListener(`click`, this.onGenreButtonsClick);
//
//     submitButton.addEventListener(`click`, this.onSubmitButtonClick);
//   }
//
//   onBackButtonClick() {}
//
//   onGenreButtonsClick() {}
//
//   onPlayerButtonsClick() {}
//
//   onSubmitButtonClick() {}
// }
