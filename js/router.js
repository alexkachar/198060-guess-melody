import {renderScreen} from "./utils";
import GameModel from "./game-model";
import GamePresenter from "./presenters/game-presenter";
import ResultsPresenter from "./presenters/results-presenter";
import ErrorView from "./views/error-view";
import {adaptServerData} from "./data/data-adaptor.js";
import WelcomeView from "./views/welcome-view";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let questions = [];

export default class Router {

  static start() {
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => questions = adaptServerData(data)).
      then((response) => Router.showWelcomeScreen()).
      catch(Router.showErrorScreen);
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
    const resultsPresenter = new ResultsPresenter(model, Router.showGameScreen);
    renderScreen(resultsPresenter.element);
  }

  static showErrorScreen(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView.element);
  }
}
