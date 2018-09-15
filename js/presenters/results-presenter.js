import ResultsView from "../views/results-view";
import Loader from "../loader";
import {renderScreen} from "../utils";

export default class ResultsPresenter {
  constructor(model, showGameScreen) {
    this.model = model;
    this.showGameScreen = showGameScreen;

    this.playerScore = {
      time: model._state.time,
      notes: model._state.notes,
      points: model._state.points,
      fastPoints: model._state.fastPoints,
      answers: model._state.answers
    };
  }

  renderContent(data) {
    const resultsView = new ResultsView(this.model, data);
    resultsView.onReplayClick = this.showGameScreen;
    renderScreen(resultsView.element);
  }

  load() {

    if (this.model._state.notes < 3 && this.model._state.time > 0) {
      Loader.loadRivals()
        .then((data) => {
          this.renderContent(data);
        })
        .then(() => Loader.saveResults(this.playerScore));
    } else {
      this.renderContent([]);
    }
  }

}


