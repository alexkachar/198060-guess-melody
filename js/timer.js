const setTimer = (timerLimit) => ({
  tick: () => {
    return --timerLimit > 0 ? timerLimit : `Ваше время вышло`;
  }
});

export {setTimer};
