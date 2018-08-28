export const getGenreTemplate = (levels, level, index) => {
  return `<form class="game__tracks">
    ${makeAnswers(levels, level, index)};
    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
};

const makeAnswers = (levels, level, index) => {
  let answers = [];
  for (let i = 0; i < index; i++) {
    answers.push(`<div class="track">
      <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
        <audio src ="${levels.level.audio}"></audio>
      </div>

    <div class="game__answer">
      <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
      <label class="game__check" for="answer-${i}">Отметить</label>
    </div>
  </div>`);
  }
  return answers;
};
