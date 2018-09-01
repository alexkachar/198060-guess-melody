const Results = {
  FAIL_TIME: `Время вышло! Вы не успели отгадать все мелодии`,
  FAIL_TRIES: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
  WIN: `За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки`
};

const getStats = (rivals, playerStats) => {

  const stats = [];

  rivals.forEach((it) => {
    stats.push(it.points);
  });

  stats.push(playerStats.points);
  stats.sort((left, right) => right - left);

  const playerPosition = stats.indexOf(playerStats.points) + 1;
  const percent = (stats.length - playerPosition) * 100 / stats.length;

  return `Вы заняли ${playerPosition} место из ${stats.length} игроков. Это лучше, чем у ${percent}% игроков`;
};

const getTotal = (state) => {
  if (state.time === 0) {
    return Results.FAIL_TIME;
  }

  if (state.notes === 0) {
    return Results.FAIL_TRIES;
  }

  return Results.WIN;
}

const rivalsMock = [
  {isWinner: true, notes: 3, time: 130, points: 19},
  {isWinner: true, notes: 3, time: 200, points: 18},
  {isWinner: true, notes: 2, time: 180, points: 12},
  {isWinner: true, notes: 1, time: 50, points: 10}
];

export {getStats, rivalsMock, getTotal};
