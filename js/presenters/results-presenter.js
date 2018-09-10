import ResultsView from "../views/results-view";

export default class ResultsPresenter {
  constructor(model) {
    this._resultsView = new ResultsView(model._state);
    this.element = this._resultsView.element;
  }
}
