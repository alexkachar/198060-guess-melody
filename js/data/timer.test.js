import {assert} from 'chai';
import {setTimer} from '../timer.js';

describe(`Функция игрового таймера`, () => {
  it(`Таймер возвращает объект`, () => {
    assert.isObject(setTimer(300));
  });

  it(`Время осталось`, () => {
    assert.equal(149, setTimer(150).tick());
  });

  it(`Время вышло`, () => {
    assert.equal(`Ваше время вышло`, setTimer(1).tick());
  });
});
