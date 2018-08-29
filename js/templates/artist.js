export const getArtistTemplate = (level) => {
  return `<div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src ="${level.audio}"></audio>
    </div>

    <form class="game__artist">
      ${makeAnswers(level.answers)};
    </form>`;
};

const makeAnswers = (answers) => {
  let result = [];
  for (let i = 0; i < answers.length; i++) {
    result.push(`<div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
        <label class="artist__name" for="answer-${i}">
          <img class="artist__picture" src="${answers[i].img}" alt="${answers[i].artist}">
          ${answers[i].artist}
        </label>
      </div>`);
  }
  return result;
};

// const makeAnswers = (answers) => {
//   answers.map(function (answer, index) {
//     return `
//       <div class="artist">
//         <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
//         <label class="artist__name" for="answer-${index}">
//           <img class="artist__picture" src="${answers[index].img}" alt="${answers[index].artist}">
//           ${answers[index].artist}
//         </label>
//      </div>`;
//   });
// };
