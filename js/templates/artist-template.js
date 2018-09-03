export const getArtistTemplate = (level) => {
  return `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src ="${level.audio}" autoplay></audio>
    </div>

    <form class="game__artist">
      ${makeAnswers(level.answers)}
    </form>`;
};

export const makeAnswers = (answers) => {
  return answers.map((answer, index) => `
     <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${answer.correct}" id="answer-${index}">
        <label class="artist__name" for="answer-${index}">
          <img class="artist__picture" src="${answer.img}" alt="${answer.artist}">
          ${answer.artist}
        </label>
     </div>`).join(``);
};
