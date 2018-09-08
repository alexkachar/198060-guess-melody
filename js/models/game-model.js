import {levels} from "../data/data";
import {setTimer} from "../data/timer";

export default class GameModel {
  constructor() {
    this._initialState = {
      level: 1,
      notes: 3,
      time: 200,
      points: 0,
      answers: [],
      levels
    }

    this.timer = setTimer(this._initialState.time);
  }

  get state() {
    return this._initialState;
  }

}
