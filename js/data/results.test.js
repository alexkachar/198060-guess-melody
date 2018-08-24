import {assert} from 'chai';
import {getStats} from '../results.js';

const statsMock1 = {
  isWinner: true,
  notesLeft: 3,
  timeLeft: 130,
  points: 20
};

const statsMock2 = {
  isWinner: false,
  notesLeft: 2,
  timeLeft: 0,
  points: 12
};

const statsMock3 = {
  isWinner: false,
  notesLeft: 0,
  timeLeft: 30,
  points: 6
};

const rivalsMock = [
  {isWinner: true, notesLeft: 3, timeLeft: 130, points: 19},
  {isWinner: true, notesLeft: 3, timeLeft: 200, points: 18},
  {isWinner: true, notesLeft: 2, timeLeft: 180, points: 12},
  {isWinner: true, notesLeft: 1, timeLeft: 50, points: 10}
];

describe(`Функция вывода результата игрока`, () => {
  it(`Если игрок выиграл, то его результат должен быть выведен в виде фразы: Вы заняли i место из t игроков. Это лучше, чем у n% игроков, где i — место, которое занял пользователь, t — общее кол-во игроков, n — процент успеха игрока`, () => {
    assert.equal(`Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`, getStats(rivalsMock, statsMock1));
  });

  it(`Если игрок проиграл и у него закончилось время, то должна быть выведена фраза: «Время вышло! Вы не успели отгадать все мелодии»`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getStats(rivalsMock, statsMock2));
  });

  it(`Если игрок проиграл и у него закончились попытки, то должна быть выведена фраза: «У вас закончились все попытки. Ничего, повезёт в следующий раз!»`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getStats(rivalsMock, statsMock3));
  });
});
