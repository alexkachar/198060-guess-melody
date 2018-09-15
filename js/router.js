import {renderScreen} from "./utils";
import GameModel from "./game-model";
import GamePresenter from "./presenters/game-presenter";
import ResultsView from "./views/results-view";
import ErrorView from "./views/error-view";
import {adaptServerData} from "./data/data-adaptor.js";
import WelcomeView from "./views/welcome-view";
import Loader from "./loader";

let questions = [];

export default class Router {

  static start() {
    Loader.loadQuestions()
      .then((data) => {
        questions = adaptServerData(data);
      })
      .then(Router.showWelcomeScreen)
      .catch(Router.showErrorScreen);
  }

  static showWelcomeScreen() {
    const welcomeView = new WelcomeView();
    welcomeView.onWelcomeButtonClick = Router.showGameScreen;
    renderScreen(welcomeView.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel(questions);
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = Router.showWelcomeScreen;
    gamePresenter.showResults = Router.showResultsScreen;
    renderScreen(gamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen(model) {
    const playerScore = {
      time: model._state.time,
      notes: model._state.notes,
      points: model._state.points,
      fastPoints: model._state.fastPoints,
      answers: model._state.answers
    };
    if (model._state.notes < 3 && model._state.time > 0) {
      Loader.loadRivals()
        .then((data) => {
          const resultsView = new ResultsView(model, data);
          resultsView.onReplayClick = Router.showGameScreen;
          renderScreen(resultsView.element);
        })
        .then(() => Loader.saveResults(playerScore));
    } else {
      const resultsView = new ResultsView(model, []);
      resultsView.onReplayClick = Router.showGameScreen;
      renderScreen(resultsView.element);
    }
  }

  static showErrorScreen(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView.element);
  }
}
