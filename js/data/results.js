import {getFormatedTime} from "../utils";

const FailedResults = {
  FAIL_TIME: `Время вышло! Вы не успели отгадать все мелодии`,
  FAIL_TRIES: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
};

const getStats = (rivals, playerStats) => {

  const stats = [];

  rivals.forEach((it) => {
    stats.push(it.points);
  });

  stats.push(playerStats.points);
  stats.sort((left, right) => right - left);

  const playerPosition = stats.indexOf(playerStats.points) + 1;
  const percent = Math.round((stats.length - playerPosition) * 100 / stats.length);

  return `Вы заняли ${playerPosition} место из ${stats.length} игроков. Это лучше, чем у ${percent}% игроков`;
};

const getTotal = (state) => {
  if (state.time === 0) {
    return FailedResults.FAIL_TIME;
  }

  if (state.notes >= 3) {
    return FailedResults.FAIL_TRIES;
  }

  const playerTime = getFormatedTime(300 - state.time);

  const winResult = `За ${playerTime.minutes} минуты и ${playerTime.seconds} секунд вы набрали ${state.points} баллов (${state.fastPoints} быстрых), совершив ${state.notes} ошибки`;

  return winResult;
};

export {getStats, getTotal};
