export const getArtistTemplate = (levels, level, index) => {
  return `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src ="${levels.level.audio}"></audio>
    </div>

    <form class="game__artist">
      ${makeAnswers(levels, level, index)};
    </form>`;
};

const makeAnswers = (levels, level, index) => {
  let answers = [];
  for (let i = 0; i < index; i++) {
    answers.push(`<div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
        <label class="artist__name" for="answer-${i}">
          <img class="artist__picture" src="${levels.level.answers[i].img}" alt="${levels.level.answers[i].artist}">
          ${levels.level.answers[i].artist}
        </label>
      </div>`);
  }
  return answers;
};
