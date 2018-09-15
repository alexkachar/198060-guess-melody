import ResultsView from "../views/results-view";

export default class ResultsPresenter {
  constructor(model, showGame) {
    this._resultsView = new ResultsView(model._state);
    this._resultsView.onReplayClick = showGame;
    this.element = this._resultsView.element;
  }
}
