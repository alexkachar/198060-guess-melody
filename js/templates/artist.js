export const getArtistTemplate = (levelsData, level, index) => {
  return `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src ="${levelsData[level].audio}"></audio>
    </div>

    <form class="game__artist">
      ${makeAnswers(levelsData, level, index)};
    </form>`;
};

const makeAnswers = (levelsData, level, index) => {
  let answers = [];
  for (let i = 0; i < index; i++) {
    answers.push(`<div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
        <label class="artist__name" for="answer-${i}">
          <img class="artist__picture" src="${levelsData[level].answers[i].img}" alt="${levelsData[level].answers[i].artist}">
          ${levelsData[level].answers[i].artist}
        </label>
      </div>`);
  }
  return answers;
};
