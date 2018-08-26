export const getArtistTemplate = (levels, index) => {
  return `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src ="${levels.audio}"></audio>
    </div>

    <form class="game__artist">
      ${makeAnswers(levels, index)};
    </form>`;
};

const makeAnswers = (levels, index) => {
  return `<div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
      <label class="artist__name" for="answer-${index}">
        <img class="artist__picture" src="${levels.answers.img}" alt="${levels.answers.artist}">
        ${levels.answers.artist}
      </label>
    </div>`;
};
