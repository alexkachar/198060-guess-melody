import {assert} from 'chai';
import {getStats} from './results.js';

const statsMock1 = {
  isWinner: true,
  notes: 3,
  time: 130,
  points: 20
};

const statsMock2 = {
  isWinner: false,
  notes: 2,
  time: 0,
  points: 12
};

const statsMock3 = {
  isWinner: false,
  notes: 0,
  time: 30,
  points: 6
};

const rivalsMock = [
  {isWinner: true, notes: 3, time: 130, points: 19},
  {isWinner: true, notes: 3, time: 200, points: 18},
  {isWinner: true, notes: 2, time: 180, points: 12},
  {isWinner: true, notes: 1, time: 50, points: 10}
];

describe(`Player result output function`, () => {
  it(`If the player wins, the returned message is correct`, () => {
    assert.equal(getStats(rivalsMock, statsMock1), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });

  it(`If the player loses and out of time, the returned message is correct`, () => {
    assert.equal(getStats(rivalsMock, statsMock2), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`If the player loses and out of tries, the returned message is correct`, () => {
    assert.equal(getStats(rivalsMock, statsMock3), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
});
