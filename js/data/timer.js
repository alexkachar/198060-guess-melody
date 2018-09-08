const setTimer = (timerLimit) => ({
  tick: () => {
    return --timerLimit > 0 ? timerLimit : `Ваше время вышло`;
  }
});

export {setTimer};

// const ONE_SECOND = 1000;
//
// export const tick = (state) => {
//   let newState = Object.assign({}, state, {
//     time: state.time - 1
//   });
//   return newState;
// }
//
//
// let timer;
//
// export const startTimer = (state) => {
//   timer = setTimeout(() => {
//     tick(state);
//     startTimer();
//   }, ONE_SECOND);
// }
//
// export const stopTimer = () => {
//   clearTimeout(timer);
// }


