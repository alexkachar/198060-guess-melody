import {initialGameState} from './js/data/data.js';
import {startTimer, stopTimer} from "../data/timer";

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  tick() {
    startTimer(this._state);
  }

  stopTick() {
    stopTimer();
  }

  outOfTries() {
    this._state.notes = 3;
  }

  tryMissed() {
    this._state.notes += 1;
  }

  outOfTime() {
    this._state.time = 0;
  }

  restart() {
    this._state = Object.assign({}, initialGameState);
  }
}

