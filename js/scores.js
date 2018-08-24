const initPlayerNotes = 3;
const MAX_ANSWERS_NUMBER = 10;
const FAST_ANSWER_TIME = 30;

const checkAnswers = (answers, notes) => {
  if (answers.length < MAX_ANSWERS_NUMBER) {
    return -1;
  }

  let points = 0;
  let currentNotes = notes;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].isCorrect && answers[i].time < FAST_ANSWER_TIME) {
      points = points + 2;
    } else if (answers[i].isCorrect && answers[i].time > FAST_ANSWER_TIME) {
      points++;
    } else {
      points = points - 2;
      currentNotes--;
    }
  }

  if (currentNotes > 0) {
    return points;
  } else {
    return -1;
  }
};

export {checkAnswers, initPlayerNotes};
