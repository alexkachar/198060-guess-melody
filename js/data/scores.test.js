import {assert} from 'chai';
import {checkAnswers, initNotes} from '../scores.js';

let answersMock1 = [
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
  {isCorrect: false, time: 31},
];

let answersMock2 = [
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
  {isCorrect: true, time: 31},
];

let answersMock3 = [
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
  {isCorrect: true, time: 15},
];

describe(`Players score calculating function`, () => {
  it(`If the player answers less than 10 questions, then the game is considered not passed and the function should return -1`, () => {
    assert.equal(-1, checkAnswers(answersMock1, initNotes));
  });

  it(`If the player answered all the questions correctly and not quickly, and never made a mistake, then the function should return 10 points`, () => {
    assert.equal(10, checkAnswers(answersMock2, initNotes));
  });

  it(`If the player answered all the questions correctly and quickly, and never made a mistake, then the function should return 20 points`, () => {
    assert.equal(20, checkAnswers(answersMock3, initNotes));
  });
});
