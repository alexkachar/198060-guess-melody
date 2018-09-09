import {initialGameState} from "./data/data";

const getLevel = (state) => initialGameState[`${state.level}`];

export default class GameModel {
  constructor() {
    this.resetState();
  }

  getCurrentLevel() {
    return this._state.levels[this._state.level];
  }

  resetState() {
    this._state = Object.assign({}, initialGameState);
  }

  hasNextLevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  tick() {
    this._state.time -= 1;
  }


  get state() {
    return this._state;
  }

  answer(isCorrect) {
    const answer = {isCorrect, time: this._state.time};
    if (isCorrect) {
      this._state = Object.assign({}, this._state, {level: this._state.level + 1, answers: this._state.answers.concat(answer)});
    } else {
      this._state = Object.assign({}, this._state, {notes: this._state.notes - 1, level: this._state.level + 1, answers: this._state.answers.concat(answer)});
    }
  }
}


