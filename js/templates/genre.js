export const getGenreTemplate = (levels, index) => {
  return `<form class="game__tracks">
    ${makeAnswers(levels, index)};
    <button class="game__submit button" type="submit">Ответить</button>
  </form>`;
};

const makeAnswers = (levels, index) => {
  return `<div class="track">
    <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
      <audio src ="${levels.audio}"></audio>
    </div>

  <div class="game__answer">
    <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index}" id="answer-${index}">
    <label class="game__check" for="answer-${index}">Отметить</label>
  </div>
</div>`;
};
