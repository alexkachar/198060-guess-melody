import {initialGameState} from './js/data/data.js';

const getLevel = (state) => initialGameState[`${state.level}`];

export default class GameModel {
  constructor() {
    this.resetState();
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  resetState() {
    this._state = Object.assign({}, initialGameState);
  }

  hasNextLevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  tick() {
    this._state = tick(this._state);
  }


  get state() {
    return this._state;
  }

  answer(isCorrect) {}

}


