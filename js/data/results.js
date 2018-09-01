const getStats = (rivals, playerStats) => {
  if (playerStats.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerStats.notes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

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

const rivalsMock = [
  {isWinner: true, notes: 3, time: 130, points: 19},
  {isWinner: true, notes: 3, time: 200, points: 18},
  {isWinner: true, notes: 2, time: 180, points: 12},
  {isWinner: true, notes: 1, time: 50, points: 10}
];

export {getStats, rivalsMock};
