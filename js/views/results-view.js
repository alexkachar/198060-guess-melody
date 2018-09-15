import AbstractView from "../views/abstract-view";
import {getStats, getTotal} from "../data/results";

const Titles = {
  FAIL_TIME: `Увы и ах!`,
  FAIL_TRIES: `Какая жалость!`,
  WIN: `Вы настоящий меломан!`
};

const Buttons = {
  FAIL: `Попробовать ещё раз`,
  WIN: `Сыграть ещё раз`
};

export default class ResultsView extends AbstractView {
  constructor(model, rivals) {
    super();
    this.state = model.state;
    this.isFailed = (this.state.notes >= 3) || (this.state.time <= 0);
    this.byTimeFailed = (this.state.time <= 0);
    this.result = getTotal(this.state);
    this.title = this.isFailed ? Titles.FAIL_TRIES : Titles.WIN;
    this.button = this.isFailed ? Buttons.FAIL : Buttons.WIN;
    this.stats = getStats(rivals, this.state);
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
        <h2 class="result__title">${this.byTimeFailed ? Titles.FAIL_TIME : this.title}</h2>
        <p class="result__total ${this.isFailed ? `result__total--fail` : ``}">${this.result}</p>
        ${!this.isFailed ? `<p class="result__text">${this.stats}</p>` : ``}
        <button class="result__replay" type="button">${this.button}</button>
      </section>`;
  }

  bind(element) {
    const replayButton = element.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, this.onReplayClick);
  }

  onReplayClick() {}
}
