import {assert} from 'chai';
import {setTimer} from '../timer.js';

describe(`Game timer function`, () => {
  it(`Function returns an Object`, () => {
    assert.isObject(setTimer(300));
  });

  it(`Times left`, () => {
    assert.equal(149, setTimer(150).tick());
  });

  it(`Time is out`, () => {
    assert.equal(`Ваше время вышло`, setTimer(1).tick());
  });
});
