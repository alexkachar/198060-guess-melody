export const adaptServerData = (questions) => {
  for (const level of Object.values(questions)) {
    if (level.type === `artist`) {
      level.audio = level.src;
      delete level.src;
      level.answers.forEach((answer) => {
        answer.img = answer.image.url;
        delete answer.image;
        answer.artist = answer.title;
        delete answer.title;
        answer.correct = answer.isCorrect;
        delete answer.isCorrect;
      });
    } else {
      level.answers.forEach((answer) => {
        answer.correct = answer.genre === level.genre;
        answer.audio = answer.src;
        delete answer.src;
      });
    }
  }
  return questions;
};
