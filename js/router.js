import {renderScreen} from "./utils";
import GameModel from "./game-model";
import GamePresenter from "./presenters/game-presenter";
import ErrorView from "./views/error-view";
import {adaptServerData} from "./data/data-adaptor.js";
import WelcomeView from "./views/welcome-view";
import Loader from "./loader";
import ResultsPresenter from "./presenters/results-presenter";

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
    gamePresenter.startGame();
    renderScreen(gamePresenter.element);
  }

  static showResultsScreen(model) {
    const resultsPresenter = new ResultsPresenter(model, Router.showGameScreen);
    resultsPresenter.load();
  }

  static showErrorScreen(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView.element);
  }
}
