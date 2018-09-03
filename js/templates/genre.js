export const getGenreTemplate = (level) => {
  return `<form class="game__tracks">
    ${makeAnswers(level.answers)}
    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
};

const makeAnswers = (answers) => {
  return answers.map((answer, index) => `
  <div class="track">
      <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
        <audio src ="${answer.audio}" ${answer.autoplay ? `autoplay` : ``}></audio>
      </div>

    <div class="game__answer">
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="${answer.correct}" id="answer-${index}">
      <label class="game__check" for="answer-${index}">Отметить</label>
    </div>
  </div>`).join(``);
};
