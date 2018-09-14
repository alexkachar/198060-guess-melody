const preprocessAnswers = (answers) => answers.map((answer) => {
  const [action, title] = answer.action.split(`.`);
  return {
    action,
    title
  };
});

export const adaptServerData = (questions) => {
  for (const level of Object.values(questions)) {
    level.answers = preprocessAnswers(level.answers);
  }
  return data;
};
