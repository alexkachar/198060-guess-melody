const getStats = (rivals, playerStats) => {
  if (playerStats.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (playerStats.notesLeft === 0) {
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
  {isWinner: true, notesLeft: 3, timeLeft: 130, points: 19},
  {isWinner: true, notesLeft: 3, timeLeft: 200, points: 18},
  {isWinner: true, notesLeft: 2, timeLeft: 180, points: 12},
  {isWinner: true, notesLeft: 1, timeLeft: 50, points: 10}
];

export {getStats, rivalsMock};
