import {levels} from "./data/data";

const MAX_QUESTIONS = 10;

const initialGameState = Object.freeze({
  level: 1,
  notes: 0,
  time: 300,
  points: 0,
  answers: [],
  levels
});

export default class GameModel {
  constructor() {
    this.resetState();
  }

  getCurrentLevel() {
    return this._state.levels[this._state.level];
  }

  getLevelType() {
    return this._state.levels[this._state.level].type;
  }

  resetState() {
    this._state = Object.assign({}, initialGameState);
  }

  hasNextLevel() {
    return this._state.notes > 0 && this._state.time > 0 && this._state.level < MAX_QUESTIONS;
  }

  tick() {
    this._state.time -= 1;
  }


  get state() {
    return this._state;
  }

  answer(isCorrect) {
    const answer = {isCorrect, time: this._state.time};
    this._state.answers.push(answer);
    this._state.level += 1;
    if (!isCorrect) {
      this.state.notes += 1;
    }
  }
}


