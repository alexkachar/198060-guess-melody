import {assert} from 'chai';
import {setTimer} from './timer.js';

describe(`Game timer function`, () => {
  it(`Function returns an Object`, () => {
    assert.isObject(setTimer(300));
  });

  it(`Times left`, () => {
    assert.equal(setTimer(150).tick(), 149);
  });

  it(`Time is out`, () => {
    assert.equal(setTimer(1).tick(), `Ваше время вышло`);
  });
});
