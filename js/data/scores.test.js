import {assert} from 'chai';
import {checkAnswers, initPlayerNotes} from '../scores.js';

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

describe(`Функция подсчёта набранных баллов игрока`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается не пройденной и функция должна вернуть -1`, () => {
    assert.equal(-1, checkAnswers(answersMock1, initPlayerNotes));
  });

  it(`Если игрок ответил на все вопросы правильно и не быстро, и ни разу не ошибся, то функция должна вернуть 10 баллов`, () => {
    assert.equal(10, checkAnswers(answersMock2, initPlayerNotes));
  });

  // Комбинируйте разные условия ответов и кол-ва жизней, чтобы описать максимальное кол-во вариантов.

  it(`Если игрок ответил на все вопросы правильно и быстро, и ни разу не ошибся, то функция должна вернуть 20 баллов`, () => {
    assert.equal(20, checkAnswers(answersMock3, initPlayerNotes));
  });
});
